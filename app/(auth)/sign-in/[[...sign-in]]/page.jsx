import { SignIn, ClerkLoaded,ClerkLoading } from '@clerk/nextjs'
import { Loader2 } from "lucide-react";
import Image from 'next/image';
export default function Page() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background'>
  <div className='h-full lg:flex flex-col items-center justify-center px-4'>
    <div className='text-center space-y-2'>
      <h1 className='font-bold text-3xl text-cyan-200'>
        Welcome Back!
      </h1>
      <p className='text-base text-cyan-50'>
        Sign in to your account to continue 
        </p>

    </div>
    <div className='flex items-center justify-center mt-2'>
      <ClerkLoaded>
  <SignIn />
  </ClerkLoaded>
  <ClerkLoading>
    <Loader2 className='animate-spin text-muted-foreground' />
    
    </ClerkLoading>  </div>
  </div>
 
  </div>

);
}