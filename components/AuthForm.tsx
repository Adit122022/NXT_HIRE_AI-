"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import React from 'react';
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";



const authFromSchema =(type :FormType)=>{
     return  z.object({
  name:type === "sign-up" ? z.string().min(3): z.string(),
  email:z.string().email(),
  password:z.string().min(3),
})

}

const  AuthForm = ({type} :{type :FormType}) => {
    const router = useRouter()
    const formSchema = authFromSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    name:'',
    email:'',
    password:''
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        if(type=== 'sign-up'){ console.log('Sign Up' , values);
            toast.success('Account Created Succsfully.Please Sign In')
             router.push('/sign-in')
        }
        else{ console.log('Sign IN' , values);
            toast.success('Sign In Succsfully.')
             router.push('/')
        }
          
    } catch (error) {
          console.log(error)
toast.error(`There was an error: ${error}`)        
      }

  }

  const isSignIN = type=== "sign-in"
  return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <Image src="/logo.svg" alt="logo" height={32} width={38}/>
                <h2>AI_HR</h2>
            </div>
                <h2>Practice Job Interview With Ai</h2>
        
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mt-4 form">
      {!isSignIN && <FormField control={form.control} name={"name"} label={"Name"} placeholder="Your Name"/>}
      <FormField control={form.control} name={"email"} type={"email"} label={"Email"} placeholder="Your Email"/>
      <FormField control={form.control} name={"password"} type={"password"} label={"Password"} placeholder="Your Password"/>
        <Button className="btn" type="submit">{isSignIN ? "Sign IN" : "Create an Account"}</Button>
      </form>
    </Form>
    <p className="text-center">

{isSignIN ?" no account yet ?" :" have an account already "}
<Link href={!isSignIN ? '/sign-in' : "/sign-up"} className="font-bold text-user-primary ml-1">{!isSignIN ? "Sign In" : "Sign up"} 
</Link>
    </p>
    </div>
    </div>
  )
}

export default AuthForm