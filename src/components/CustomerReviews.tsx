
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "VP of Sales",
      company: "TechFlow Inc.",
      rating: 5,
      review: "ConvrtAI transformed our outbound completely. We went from 2% to 15% response rates in just 3 months. The AI insights are incredible.",
      avatar: "SM"
    },
    {
      id: 2,
      name: "Marcus Chen",
      title: "Head of Business Development",
      company: "GrowthLabs",
      rating: 5,
      review: "The relationship-building aspect is game-changing. Our prospects actually look forward to our messages now. ROI increased by 400%.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      title: "Sales Director",
      company: "Scale Ventures",
      rating: 5,
      review: "Finally, a solution that makes outbound feel human again. The AI understands context better than most of our sales reps did.",
      avatar: "LR"
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Founder & CEO",
      company: "InnovateCorp",
      rating: 5,
      review: "ConvrtAI didn't just improve our conversion rates - it completely changed how we think about sales outreach. Remarkable results.",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Emma Wilson",
      title: "Chief Revenue Officer",
      company: "NextGen Solutions",
      rating: 5,
      review: "The platform pays for itself within weeks. Our team is more efficient, prospects are more engaged, and deals close faster.",
      avatar: "EW"
    },
    {
      id: 6,
      name: "Alex Kumar",
      title: "Sales Manager",
      company: "CloudTech Pro",
      rating: 5,
      review: "Best investment we've made in sales technology. The AI agents work 24/7 while maintaining genuine, personalized interactions.",
      avatar: "AK"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of sales professionals who've transformed their outreach with ConvrtAI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-convrt-purple/30" />
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.review}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-convrt-purple/20 flex items-center justify-center font-bold text-convrt-purple">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.title}</p>
                  <p className="text-sm text-convrt-purple font-medium">{review.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to join these successful companies?
          </p>
          <a href="#cta" className="button-primary inline-flex items-center">
            Start Your Transformation Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;
