export default function GigCard({ gig }) {
    return (
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-semibold">{gig.title}</h2>
        <p className="text-gray-500">{gig.price}</p>
        <p className="text-yellow-500">⭐ {gig.rating}</p>
      </div>
    );
  }
  