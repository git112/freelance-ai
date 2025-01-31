import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "../components/hero";
import AnaltyticsSection from "../components/analytics";
import HowitworksSection from "../components/howitworks";

import { features } from "../data/features";




export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-cyan-100">
          🚀 GigPilot Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 transition-colors transform  duration-500 shadow-lg rounded-2xl border-transparent hover:bg-transparent 
		hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400 hover:border-cyan-400"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2 text-cyan-100">{feature.title}</h3>
                    <p className="text-muted-foreground text-cyan-50">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
       
      {/* Stats Section */}
      <AnaltyticsSection />

      {/* How It Works Section */}
      <HowitworksSection />
   
      

      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
            Boost Your Freelance Career with AI!
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
            Join thousands of freelancers using AI-powered tools to find the best gigs, negotiate smartly, and optimize their profiles.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce bg-background text-cyan-400"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}