
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "TechFlow Inc.",
      image: "/lovable-uploads/8324ce9d-a25b-4480-beb0-990b38071d97.png",
      quote: "Convrt.ai has completely transformed our outreach strategy. We're seeing 3x higher response rates and building genuine relationships with prospects.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Development Manager",
      company: "Growth Solutions",
      image: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png",
      quote: "The AI insights are incredible. It's like having a research team that never sleeps, finding the perfect conversation starters for every prospect.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Marketing",
      company: "Innovation Labs",
      image: "/lovable-uploads/ceb0d5d2-2d83-407f-bb1e-8f6959b93eb9.png",
      quote: "Our conversion rates have skyrocketed since using Convrt.ai. The personalized touchpoints make all the difference in building trust.",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="testimonials">
      <div className="container-section max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-purple/10 text-convrt-purple mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium tracking-wide">Customer Success</span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-convrt-dark-blue dark:text-white mb-6 tracking-tight transition-colors duration-300"
          >
            Trusted by Sales Teams <span className="text-convrt-purple">Worldwide</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
          >
            See how leading companies are transforming their outreach and building meaningful relationships with Convrt.ai
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-700/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-convrt-purple" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-convrt-dark-blue dark:text-white transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
