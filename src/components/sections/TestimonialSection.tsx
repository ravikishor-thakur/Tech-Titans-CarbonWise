
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "CarbonWise has completely changed how I think about my daily choices. I've reduced my carbon footprint by 30% in just three months!",
    name: "Emma Rodriguez",
    title: "Marketing Director",
    initials: "ER"
  },
  {
    quote: "As a small business owner, I needed a simple way to track our company's environmental impact. CarbonWise made it easy and actionable.",
    name: "Michael Chang",
    title: "CEO, GreenTech Solutions",
    initials: "MC"
  },
  {
    quote: "The community challenges keep me motivated. It's inspiring to see how my individual actions combine with others to make a real difference.",
    name: "Sarah Johnson",
    title: "Environmental Scientist",
    initials: "SJ"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-carbon-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-carbon-800">Hear from our community</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of individuals and businesses making a positive impact on our planet.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 text-carbon-600 text-xl">"</div>
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-carbon-600 flex items-center justify-center text-white mr-3">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
