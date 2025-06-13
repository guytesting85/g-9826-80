
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/lifeispranav", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/lifeispranav", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/lifeispranav", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@lifeispranav.me", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#profile" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy", href: "#privacy" }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container-section max-w-7xl mx-auto">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-3">
                <span className="text-2xl font-bold text-convrt-purple">Pranav</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">
                Full-stack developer passionate about creating innovative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex space-x-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-convrt-purple dark:hover:text-convrt-purple transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-convrt-purple dark:hover:text-convrt-purple hover:bg-convrt-purple/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                © {currentYear} Pranav. All rights reserved.
              </div>
              <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
