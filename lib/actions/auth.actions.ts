'use server'

import { db } from "@/firebase/admin";

export async function signup(params :SignUpParams){
const  {uid , email , name} = params;
 try {
     const userRecord = await  db.collection("users").doc(uid).get();
     if(userRecord.exists){
        return { success:false , message:'User already exists .Please sign in instead.'}
     }
     await db.collection('users').doc(uid).set({ name, email })
     return { success: true, message: "User created successfully." };
 } catch (e :any) {
     console.log("Error creating a user" , e);
     if(e.code === 'auth/email-already-exists'){
        return { success: false , message :'This email is already in use.' }
     }
     return {success : false , message: ' Failed to create an account.'} 
    } 
    }

 export async function signIn(params: SignInParams) {
  const { email } = params;
  
  try {
    // Search user by email (if email is unique)
    const snapshot = await db.collection("users").where("email", "==", email).get();

    if (snapshot.empty) {
      return { success: false, message: "This email is not registered. Create a new account first." };
    }

    // User exists → proceed to sign in
    return { success: true, message: "Signed in successfully." };

  } catch (e: any) {
    console.log("Error signing in:", e);
    return { success: false, message: "Failed to sign in. Try again later." };
  }
}
