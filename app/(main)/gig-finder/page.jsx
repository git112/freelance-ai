// "use client"; // Required for useState

// import { useState } from "react";
// import Filters from "./_components/filters";
// import GigCard from "./_components/gig-card";

// export default async function GigFinder() {
//   const [gigs, setGigs] = useState([
//     { id: 1, title: "Web Developer", price: "$500" },
//     { id: 2, title: "Graphic Designer", price: "$300" },
//   ]);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Find Gigs</h1>
//       <Filters />
//       <div className="grid gap-4 mt-4">
//         {gigs.map((gig) => (
//           <GigCard key={gig.id} gig={gig} />
//         ))}
//       </div>
//     </div>
//   );
// }
