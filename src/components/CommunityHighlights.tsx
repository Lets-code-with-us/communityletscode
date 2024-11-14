import { Target, Users, Briefcase, BookOpen, MessageCircle } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: "Skill Development",
    description: "Access curated learning paths and resources to enhance your technical skills"
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with industry professionals and build meaningful relationships"
  },
  {
    icon: MessageCircle,
    title: "Doubt Resolution",
    description: "Get your technical doubts resolved by experienced developers"
  },
  {
    icon: Briefcase,
    title: "Job Updates",
    description: "Get exclusive job opportunities from top tech companies"
  },
  {
    icon: BookOpen,
    title: "Project Collaboration",
    description: "Work on real projects with other community members"
  }
];

export default function CommunityHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Join Our Community?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the power of collaborative learning and growth
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div key={highlight.title} className="text-center">
                <div className="flex items-center justify-center">
                  <Icon className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}