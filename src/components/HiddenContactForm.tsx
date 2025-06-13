
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Mail, User, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HiddenContactForm = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsRevealed(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-convrt-purple/10 to-convrt-purple/5 relative overflow-hidden">
      <div className="container-section max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-convrt-dark-blue">Ready to Transform Your Outreach?</h2>
          <p className="text-xl text-convrt-dark-blue/80 mb-8">
            Let's discuss how our AI can help you build meaningful relationships with your prospects
          </p>
        </motion.div>

        {/* Hidden Contact Trigger */}
        <AnimatePresence>
          {!isRevealed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsRevealed(true)}
                className="relative cursor-pointer group"
              >
                {/* Mysterious Box */}
                <div className="relative bg-gradient-to-r from-convrt-purple to-convrt-purple-hover p-8 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 text-center text-white">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block mb-4"
                    >
                      <Sparkles className="w-12 h-12 mx-auto" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Something Special Awaits</h3>
                    <p className="text-white/90 mb-4">Click to reveal your personalized contact experience</p>
                    <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full">
                      <span className="text-sm font-medium">Tap to unlock</span>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Revealed Contact Form */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Close button */}
                <button
                  onClick={() => setIsRevealed(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>

                {/* Form header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                  >
                    <Mail className="w-16 h-16 mx-auto text-convrt-purple mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-convrt-dark-blue mb-2">Let's Connect</h3>
                  <p className="text-gray-600">Tell us about your outreach goals and challenges</p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                  >
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-convrt-purple/20 focus:border-convrt-purple transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="relative"
                  >
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-convrt-purple/20 focus:border-convrt-purple transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="relative"
                  >
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your outreach goals..."
                      required
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-convrt-purple/20 focus:border-convrt-purple transition-colors resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring", bounce: 0.3 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-convrt-purple hover:bg-convrt-purple-hover text-white py-3 rounded-xl font-medium flex items-center justify-center group"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HiddenContactForm;
