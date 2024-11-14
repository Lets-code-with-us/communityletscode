const testimonials = [
  {
    content: "Being part of Let's Code has transformed my career. The community support and learning resources are invaluable.",
    author: "Sarah Chen",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The collaborative environment and project opportunities have helped me grow both technically and professionally.",
    author: "Michael Rodriguez",
    role: "Cloud Architect",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "I found my dream job through the Let's Code community. The network here is simply amazing!",
    author: "Emily Watson",
    role: "ML Engineer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Members Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Success stories from our community members
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              <div className="mt-6 flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}