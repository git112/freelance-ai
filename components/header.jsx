import React from 'react';
import { useUser , SignInButton, UserButton } from "@clerk/nextjs";
// import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { checkUser } from '../lib/checkUser';
import AuthStatus from './auth-status';

const Header = async () => {
   await checkUser();
  
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
  
        <AuthStatus />
      </nav>
    </header>
  );
}

export default Header;