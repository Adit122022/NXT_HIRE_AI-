'use server'

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";


const ONE_WEEK = 60 * 60 * 24 *7    //60sec 60min 24 hrs  7 days (1 week) 1000 miliseconds
export async function signup(params :SignUpParams){
const  {uid , email , name} = params;
 try {
     const userRecord = await  db.collection("users").doc(uid).get();
     if(userRecord.exists){
        return { success:false , message:'User already exists .Please sign in instead.'}
     }
     await db.collection('users').doc(uid).set({ name, email })
     return { success: true, message: "User created successfully.Please sign in now" };
 } catch (e :any) {
     console.log("Error creating a user" , e);
     if(e.code === 'auth/email-already-exists'){
        return { success: false , message :'This email is already in use.' }
     }
     return {success : false , message: ' Failed to create an account.'} 
    } 
    }
  export async function setSessionCookie(idToken: string){
    const cookieStore  = await cookies();
    const sessionCookie = await auth.createSessionCookie(idToken , { expiresIn :ONE_WEEK *1000} ) 
     cookieStore.set('session',sessionCookie, {
      maxAge :ONE_WEEK,
      httpOnly:true,
      secure:process.env.NODE_ENV ==="production",
      path:'/',
      sameSite:'lax'
    })
  }
 export async function signIn(params: SignInParams) {
  const { email,idToken } = params;
  
  try {
    const userRecord = await auth.getUserByEmail(email);

    if (!userRecord) {
      return { success: false, message: "This email is not registered. Create a new account first." };
    }
    await setSessionCookie(idToken)
    return { success: true, message: "Signed in successfully." };

  } catch (e) {
    console.log("Error signing in:", e);
    return { success: false, message: "Failed to sign in. Try again later." };
  }
}
export async function getCurrentUser(): Promise<User | null> {
  const cookieStore =await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) {
    return null;
  }
  try {
    const decodedToken = await auth.verifySessionCookie(sessionCookie, true);
    const userRecord = await db.collection("users").doc(decodedToken.uid).get();
    if (!userRecord.exists) {
      return null;
    }
    return {
...userRecord.data(),
      id: decodedToken.id,
      email: decodedToken.email || "",
      name: userRecord.data()?.name || "",
    };
  } catch (e) {
    console.error("Error verifying session cookie:", e);
    return null;
  }
}

export async function isAuthenticated() {
  const user = await  getCurrentUser();
  return !!user;    // if user is null, it return false, otherwise true
  
}
