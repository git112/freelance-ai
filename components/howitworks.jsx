import React from 'react'
import Link from 'next/link'

function HowitworksSection() {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center -mx-5">
            <div className="w-full lg:w-1/4 px-2 mb-20 lg:mb-0">
              <div className="max-w-md">
                <span className="text-lg font-bold dark:text-cyan-400">Getting Started</span>
                <h2 className="mt-12 mb-10 text-3xl font-extrabold leading-tight text-cyan-50">To accelerate your freelancing career with <span className='text-cyan-500'>Gig</span>Pilot</h2>
                <p className="mb-16 text-lg text-cyan-50">Follow these Steps!</p>
                <Link className="inline-block px-12 py-4 text-white font-bold bg-cyan-600 hover:bg-cyan-700 rounded-full shadow-lg transition duration-200" href="#">Get Started</Link>
              </div>
            </div>
            <div className="w-full lg:w-3/4 px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <Card>
                  {/* <div className="flex justify-center items-center w-14 h-14 "></div> */}
                  <h3 className="mb-2 text-lg font-bold text-cyan-100">📝Create Your Profile</h3>
                  <p className="text-lg text-cyan-50">Fill in your skills, experience, and preferences to start finding the best gigs.</p>
                </Card>
                <Card>
                  {/* <div className="flex justify-center items-center w-14 h-14 "></div> */}
                  <h3 className="mb-2 text-lg font-bold text-cyan-100">🔍Find Relevant Gigs</h3>
                  <p className="text-lg text-cyan-50">Let AI search for high-paying gigs based on your skillset and preferences.</p>
                </Card>
                <Card>
                  {/* <div className="flex justify-center items-center w-14 h-14 "></div> */}
                  <h3 className="mb-2 text-lg font-bold text-cyan-100">🤖Smart Negotiation</h3>
                  <p className="text-lg text-cyan-50">Use AI to suggest better pay rates and contract terms.</p>
                </Card>
                <Card>
                  {/* <div className="flex justify-center items-center w-14 h-14 "></div> */}
                  <h3 className="mb-2 text-lg font-bold text-cyan-100">🏆Profile Optimization</h3>
                  <p className="text-lg text-cyan-50"> Improve your profile’s appeal to clients with AI-powered suggestions.</p>
                </Card>
                <Card>
                  {/* <div className="flex justify-center items-center w-14 h-14 "></div> */}
                  <h3 className="mb-2 text-lg font-bold text-cyan-100">📊Track Your Success</h3>
                  <p className="text-lg text-cyan-50">Measure your career growth with detailed analytics and insights.</p>
                </Card>
                <Card>
                  {/* <div className="flex justify-center items-center w-14 h-14 "></div> */}
                  <h3 className="mb-2 text-lg font-bold text-cyan-100">🔔Get Alerts</h3>
                  <p className="text-lg text-cyan-50">Receive instant notifications about the best-paying gigs available.</p>
                </Card>
              </ div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Card = ({ children }) => {
  return (
    <div className="shadow-lg p-8 rounded-2xl transform hover:scale-105 transition-transform hover:shadow-xl border-2 border-dashed border-cyan-400">
      {children}
    </div>
  );
};

export default HowitworksSection;