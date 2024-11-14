import { Users, Code, Cloud, Github, Brain, Database, Shield, TestTube } from 'lucide-react';

const groups = [
  {
    name: "DSA Masters",
    icon: Code,
    description: "Master Data Structures & Algorithms with daily problems and discussions",
    members: "5.2k"
  },
  {
    name: "Full Stack Hub",
    icon: Users,
    description: "Connect with full stack developers and learn modern web development",
    members: "8.1k"
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    description: "Explore AWS, Azure, GCP and cloud-native technologies",
    members: "4.7k"
  },
  {
    name: "Open Source",
    icon: Github,
    description: "Contribute to open source projects and grow your portfolio",
    members: "6.3k"
  },
  {
    name: "AI/ML Engineers",
    icon: Brain,
    description: "Discuss AI, Machine Learning, and Deep Learning concepts",
    members: "7.4k"
  },
  {
    name: "Data Science",
    icon: Database,
    description: "Learn data analysis, visualization, and statistical modeling",
    members: "5.9k"
  },
  {
    name: "Cyber Security",
    icon: Shield,
    description: "Explore security concepts, ethical hacking, and best practices",
    members: "4.2k"
  },
  {
    name: "QA Community",
    icon: TestTube,
    description: "Connect with QA engineers and learn testing methodologies",
    members: "3.8k"
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
                    <span className="text-sm text-gray-500">{group.members} members</span>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      Join Group
                    </button>
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