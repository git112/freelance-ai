export default function Filters({ onFilterChange }) {
    const categories = ["All", "Web Developer", "Graphic Designer", "SEO Specialist"];
  
    return (
      <div className="flex space-x-3 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
  