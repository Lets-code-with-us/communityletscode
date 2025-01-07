import React from 'react';
import { Building2, MapPin, Globe, Rocket, Code, Building, Landmark } from 'lucide-react';

// Step 1: Define the Category type
type Category = {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
  link: string;
  color: string;
};

// Step 2: Define the StartupCategories component
const StartupCategories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      title: "Bangalore",
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      description: "India's Silicon Valley - Hub for tech startups, AI companies, and leading unicorns. Home to 5000+ active startups.",
      link: "https://topmate.io/letscode/1020156",
      color: "blue",
    },
    {
      id: 2,
      title: "Hyderabad",
      icon: <Landmark className="w-12 h-12 text-purple-600" />,
      description: "HITEC City's flourishing startup ecosystem with focus on IT, biotech, and deep tech innovations.",
      link: "https://topmate.io/letscode/1021879",
      color: "purple",
    },
    {
      id: 3,
      title: "Gurgaon",
      icon: <Building className="w-12 h-12 text-yellow-600" />,
      description: "NCR's startup powerhouse with diverse sectors from e-commerce to foodtech. Home to multiple unicorns.",
      link: "https://topmate.io/letscode/1049450",
      color: "yellow",
    },
    {
      id: 4,
      title: "Pune",
      icon: <Building2 className="w-12 h-12 text-green-600" />,
      description: "Growing tech hub with focus on SaaS, automotive tech, and engineering innovations.",
      link: "https://topmate.io/letscode/1072429",
      color: "green",
    },
    {
      id: 5,
      title: "Mumbai",
      icon: <MapPin className="w-12 h-12 text-red-600" />,
      description: "Financial capital's startup ecosystem with fintech, media, and D2C startups leading innovation.",
      link: "https://topmate.io/letscode/1061831",
      color: "red",
    },
    {
      id: 6,
      title: "Product Based",
      icon: <Code className="w-12 h-12 text-emerald-600" />,
      description: "Join companies building innovative products. Focus on engineering excellence and cutting-edge tech.",
      link: "https://topmate.io/letscode/1313312",
      color: "emerald",
    },
    {
      id: 7,
      title: "100% Remote",
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      description: "Work from anywhere opportunities with India's top startups. Flexible work culture and global exposure.",
      link: "https://topmate.io/letscode/1171184",
      color: "indigo",
    },
    {
      id: 8,
      title: "Unicorn Startups",
      icon: <Rocket className="w-12 h-12 text-pink-600" />,
      description: "Join India's billion-dollar club. Work with companies that are revolutionizing their industries.",
      link: "https://topmate.io/letscode/1375073",
      color: "pink",
    },
  ];

  // Step 3: Create the CategoryCard component
  const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-center justify-center bg-gray-50 w-16 h-16 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {category.title}
        </h3>
        <p className="text-gray-600 mb-6 min-h-[80px]">
          {category.description}
        </p>
        <a
          href={category.link}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
        >
          Explore opportunities
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Startups by Location
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover opportunities in India's top startup hubs and join the next generation of innovators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupCategories;
