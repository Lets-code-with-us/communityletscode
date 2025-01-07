import { Building,Castle, MapPin,Warehouse, Landmark, Globe,Store ,Hotel} from 'lucide-react';

const locations = [
  {
    name: "Bangalore",
    icon: Building,
    description: "India's Silicon Valley with a vibrant startup culture and tech innovation.",
  },
  {
    name: "Hyderabad",
    icon: Castle,
    description: "Known for its thriving IT and biotech ecosystems.",
  },
  {
    name: "Chennai",
    icon: MapPin,
    description: "The hub for automobile, SaaS, and industrial development.",
  },
  {
    name: "Pune",
    icon: Landmark,
    description: "A growing tech hub with expertise in engineering and software.",
  },
  {
    name: "Mumbai",
    icon: Warehouse,
    description: "India's financial capital with a strong fintech and media presence.",
  },
  {
    name: "Noida,Gurgaon & Delhi",
    icon: Store,
    description: "A vibrant hub of tech, startups, e-commerce, and cultural diversity in India's NCR.",
  },
  {
    name: "Kolkata",
    icon: Hotel,
    description: "A historic city with emerging tech and creative industries.",
  },
  {
    name: "USA, UK (Global)",
    icon: Globe,
    description: "Connect with a global community of tech enthusiasts, innovators, and professionals shaping the future.",
}
];

export default function LocationBasedCommunities() {
  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Location Based Community for Employee's
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Expand your network and explore opportunities and connect with professionals in your area.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {locations.map((location) => {
            const Icon = location.icon;
            return (
              <div
                key={location.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <Icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {location.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{location.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSe_Odq8UCrQ1Q3rLwLMT9S3TrEqPaQGlEEPxe4w4FaxNhLIvQ/viewform' className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      Join Group
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
