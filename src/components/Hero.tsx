import { Users, Code, BookOpen, Target, Building2, MessageSquare } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { label: 'Active Members', value: '10,000+' },
    { label: 'Learning Resources', value: '500+' },
    { label: 'Tech Topics', value: '50+' },
    { label: 'Success Stories', value: '1,000+' }
  ];

  const values = [
    {
      icon: <Users className="w-6 h-6 text-black" />,
      title: 'Community First',
      description: 'We foster an inclusive environment where every member\'s journey matters.'
    },
    {
      icon: <Code className="w-6 h-6 text-black" />,
      title: 'Quality Education',
      description: 'Providing access to premium tech education and resources for everyone.'
    },
    {
      icon: <Target className="w-6 h-6 text-black" />,
      title: 'Innovation Focus',
      description: 'Staying ahead with cutting-edge technologies and industry trends.'
    }
  ];

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-black" />,
      title: 'Learning Resources',
      description: 'Access curated study materials, tutorials, and guides across various tech domains.'
    },
    {
      icon: <Building2 className="w-6 h-6 text-black" />,
      title: 'Career Opportunities',
      description: 'Connect with leading tech companies and explore job opportunities.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-black" />,
      title: 'Expert Networking',
      description: 'Engage with industry professionals and build valuable connections.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-6">
            Welcome to Let&apos;s Code
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            We are more than just a community; we are a thriving tech ecosystem designed to empower individuals on their journey through the ever-evolving world of technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-black">{stat.value}</p>
                <p className="text-gray-800 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{value.title}</h3>
                <p className="text-gray-800">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-black ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-800">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Whether you&apos;re a student, a developer, or someone passionate about tech, join us to build, learn, and grow in a supportive community that&apos;s dedicated to your success.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
