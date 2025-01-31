import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from '../components/header';
import { ThemeProvider } from "../components/theme-provider";
import { dark } from "@clerk/themes";
import { Facebook, Twitter, Instagram, Linkedin } from "react-feather";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GigPilot",
  description: "Let AI Pilot Your Freelance Career",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="text-cyan-400 py-8">
              <div className="container mx-auto px-6">
                {/* Top Section */}
                <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
                  {/* Logo & Tagline */}
                  <div>
                  <Link href="/">
          <Image
            src="/logo.png"
            alt="GigPilot"
            width={200}
            height={50}
            className='h-20 py-1 w-auto object-contain'
          />
        </Link>
                    <p className="text-cyan-50 mt-2">Your AI-powered freelancing assistant.</p>
                  </div>

                  {/* Quick Links */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                      <ul className="space-y-2">
                        <li><Link href="/" className="text-cyan-50 hover:text-cyan-400">🏠 Home</Link></li>
                        <li><Link href="/gigs" className="text-cyan-50 hover:text-cyan-400">🔍 Find Gigs</Link></li>
                        <li><Link href="/analytics" className="text-cyan-50 hover:text-cyan-400">📊 Analytics</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">More Links</h3>
                      <ul className="space-y-2">
                        <li><Link href="/blog" className="text-cyan-50 hover:text-cyan-400">📖 Blog</Link></li>
                        <li><Link href="/contact" className="text-cyan-50 hover:text-cyan-400">📩 Contact</Link></li>
                      </ul>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                      <Link href="#" className="text-cyan-50 hover:text-cyan-400"><Facebook /></Link>
                      <Link href="#" className="text-cyan-50 hover:text-cyan-400"><Twitter /></Link>
                      <Link href="#" className="text-cyan-50 hover:text-cyan-400"><Instagram /></Link>
                      <Link href="#" className="text-cyan-50 hover:text-cyan-400"><Linkedin /></Link>
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">📬 Stay Updated</h3>
                    <p className="text-cyan-50">Get the best freelancing gigs in your inbox.</p>
                    <div className="mt-3 flex">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 w-full rounded-l-lg bg-gray-800 border border-gray-700 text-white"
                      />
                      <button className="bg-cyan-500 px-4 py-2 rounded-r-lg text-white hover:bg-cyan-600">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-gray-500 text-sm mt-5 border-t border-gray-800 pt-4">
                  &copy; 2025 GigPilot. All rights reserved. 💡
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}