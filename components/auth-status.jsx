"use client";

import Link from 'next/link';
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from './ui/button';


export default function AuthStatus() {
  const { isSignedIn, isLoaded } = useUser();

  // Don't render anything until the auth state is loaded
  if (!isLoaded) {
    return null;
  }

  return (
    <>
     

      <div className="flex-grow flex justify-center">
        {isSignedIn ? (
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 items-center justify-between">
            <li><Link href="/main/gig-finder" className="hover:text-cyan-200">Find Gigs</Link></li>
            <li><Link href="/negotiator" className="hover:text-cyan-200">Contract Negotiator</Link></li>
            <li><Link href="/profile-optimizer" className="hover:text-cyan-200">Profile Optimizer</Link></li>
            <li><Link href="/dashboard" className="hover:text-cyan-200">Dashboard</Link></li>
          </ul>
        ) : (
          <></>
        )}
      </div>
  
      <div className="flex justify-end">
        {isSignedIn ? (
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
                userButtonPopoverCard: "shadow-xl",
                userPreviewMainIdentifier: "font-semibold",
              },
            }}
            afterSignOutUrl="/"
          />
        ) : (
          <SignInButton>
            <Button variant="outline">Sign In</Button>
          </SignInButton>
        )}
      </div>
    </>
  );
} 