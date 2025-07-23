import { isAuthenticated } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const Authlayout =async ({children} :{children :ReactNode}) => {
  // checking if the user is authenticated so directly navigate to the home screen   
  // basically dont need to login again
   const isUserAuthenticated =await isAuthenticated();
    if(isUserAuthenticated) redirect('/')
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default Authlayout