import { Users, Code, Target, BookOpen, Building2, MessageSquare } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Community First',
      description: 'We foster an inclusive environment where every members journey matters.'
    },
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: 'Quality Education',
      description: 'Providing access to premium tech education and resources for everyone.'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: 'Innovation Focus',
      description: 'Staying ahead with cutting-edge technologies and industry trends.'
    }
  ];

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: 'Learning Resources',
      description: 'Access curated study materials, tutorials, and guides across various tech domains.'
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: 'Career Opportunities',
      description: 'Connect with leading tech companies and explore job opportunities.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: 'Expert Networking',
      description: 'Engage with industry professionals and build valuable connections.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Welcome to Let&apos;s Code
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are more than just a community; we are a thriving tech ecosystem designed to empower individuals on their journey through the ever-evolving world of technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-lg">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-800">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you&apos;re a student, a developer, or someone passionate about tech, join us to build, learn, and grow in a supportive community that&apos;s dedicated to your success.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
