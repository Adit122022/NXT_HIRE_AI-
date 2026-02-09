'use client'
import { cn } from '@/lib/utils';
import { vapi } from '@/lib/vapi.sdk';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Define props interface if not defined elsewhere
interface AgentProps {
    userName: string;
    userId: string;
    type: string; // or specific type if known
}

interface SavedMessage {
    role: 'user' | 'system' | 'assistant';
    content: string;
}

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED'
}

const Agent = ({ userName, userId, type }: AgentProps) => {

    const router = useRouter();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)
    const [messages, setMessages] = useState<SavedMessage[]>([]);

    // Safety check for empty messages array
    const latestMessage = messages.length > 0 ? messages[messages.length - 1].content : "";

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
        const onCallEnd = () => setCallStatus(CallStatus.FINISHED);

        const onMessage = (message: any) => {
            console.log("Full message object:", message);
            if (message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage: SavedMessage = {
                    role: message.role,
                    content: message.transcript
                };
                setMessages((prev) => [...prev, newMessage]);
            }
        };

        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);
        const onError = (error: Error) => console.log('Error', error);

        // event listeners
        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('message', onMessage);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);
        vapi.on('error', onError);

        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('message', onMessage);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd);
            vapi.off('error', onError);
        }
    }, [])

    useEffect(() => {
        if (callStatus === CallStatus.FINISHED) {
            // Optional: Add a small delay before redirecting so user sees "Call Ended"
            setTimeout(() => router.push('/'), 1000);
        }
    }, [callStatus, router])

    const handleCall = async () => {
        setCallStatus(CallStatus.CONNECTING);
        try {
            await vapi.start(
                null as any,
                {
                    variableValues: {
                        username: userName,
                        userid: userId,
                    }
                },
                null,
                process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!
            );
        } catch (error) {
            console.error("Failed to start call:", error);
            setCallStatus(CallStatus.INACTIVE);
        }
    }

    const handleDisconnect = async () => {
        // vapi.stop() triggers the 'call-end' event, 
        // which will update the state via the useEffect listener.
        vapi.stop();
    }

    const isCallInactiveOrFinished = callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED;

    return (
        <>
            <div className="call-view">
                <div className="card-interviewer">
                    <div className="avatar">
                        <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover" />
                        {isSpeaking && <span className='animate-speak'></span>}
                    </div>
                    <h3>Ai Intereviews / Hr</h3>
                </div>
                <div className="card-border">
                    <div className="card-content">
                        <Image src="/user-avatar.png" alt="user" width={540} height={540} className="rounded-full object-cover size-[120px]" />
                        {isSpeaking && <span className='animate-speak'></span>}
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>

            {messages.length > 0 && (
                <div className="transcript-border">
                    <div className="transcript">
                        <p className={cn("transition-all duration-500", 'animate-fadeIn opacity-100')}>
                            {latestMessage}
                        </p>
                    </div>
                </div>
            )}

            <div className="w-full flex justify-center">
                {callStatus !== CallStatus.ACTIVE ? (
                    <button className='relative btn-call' onClick={handleCall}>
                        <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus !== CallStatus.CONNECTING && 'hidden')} />
                        <span>
                            {isCallInactiveOrFinished ? 'Call' : " .  .  ."}
                        </span>
                    </button>
                ) : (
                    <button className="btn-disconnect" onClick={handleDisconnect}>
                        END
                    </button>
                )}
            </div>
        </>
    )
}

export default Agent;