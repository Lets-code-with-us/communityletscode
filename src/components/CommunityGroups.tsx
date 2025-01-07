import { Users, Code, Cloud, Github, Brain, Database, Shield, TestTube } from 'lucide-react';

const groups = [
  {
    name: "DSA Masters",
    icon: Code,
    description: "Master Data Structures & Algorithms with daily problems and discussions",
    link: "https://chat.whatsapp.com/JaI4QlRwXgrCIy7NuL5fuA"
  },
  {
    name: "Full Stack Hub",
    icon: Users,
    description: "Connect with full stack developers and learn modern web development",
    link: "https://chat.whatsapp.com/J2V4N5d4I8MKpPlEsdEN0A"
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    description: "Explore AWS, Azure, GCP and cloud-native technologies",
    link: "https://chat.whatsapp.com/FKDHUWJPjEyCoG0VLKRbEZ"
  },
  {
    name: "Open Source",
    icon: Github,
    description: "Contribute to open source projects and grow your portfolio",
    link: "https://chat.whatsapp.com/ELpn6eu6b1A0lPXZ9Fr8nO"
  },
  {
    name: "AI/ML Engineers",
    icon: Brain,
    description: "Discuss AI, Machine Learning, and Deep Learning concepts",
    link: "https://chat.whatsapp.com/HTDJ0DN54xj6RlyEb1sDUG"
  },
  {
    name: "Data Science",
    icon: Database,
    description: "Learn data analysis, visualization, and statistical modeling",
    link: "https://chat.whatsapp.com/KCW6HycyQd2KoAYlC7Obsx"
  },
  {
    name: "Cyber Security",
    icon: Shield,
    description: "Explore security concepts, ethical hacking, and best practices",
    link: "https://chat.whatsapp.com/Cgi0isWfQ6VE3UnxUNjUzj"
  },
  {
    name: "QA Community",
    icon: TestTube,
    description: "Connect with QA engineers and learn testing methodologies",
    link: "https://chat.whatsapp.com/KWJg9gsVfgDCOxmJ0qvhku"
  }
];

export default function CommunityGroups() {
  return (
    <section id="groups" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Tech Communities
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Connect with like-minded developers in your area of interest
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <Icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">{group.name}</h3>
                  <p className="mt-2 text-gray-600">{group.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <a 
                      href={group.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
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
