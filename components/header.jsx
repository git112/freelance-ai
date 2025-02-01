"use client"; 

import React from 'react';
import { useUser , SignInButton, UserButton } from "@clerk/nextjs";
// import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

function Header() {
  const { isSignedIn } = useUser ();

  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
    <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="GigPilot"
          width={200}
          height={50}
          className='h-20 py-1 w-auto object-contain'
        />
      </Link>
  
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
    </nav>
  </header>
  );
}

export default Header;