
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#product" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Case Studies", href: "#testimonials" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "Help Center", href: "#help" },
        { name: "Community", href: "#community" },
        { name: "API", href: "#api" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "Security", href: "#security" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-purple-50/40 to-blue-50/40 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container-section max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 py-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/ce207080-f6c2-430d-9621-79d32ab08655.png" 
                alt="Convrt.ai Logo" 
                className="h-8"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              The first AI organic outbound platform that helps you build trust and engage prospects before you reach out.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-convrt-purple dark:hover:text-convrt-purple hover:bg-convrt-purple/10 transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-convrt-purple dark:hover:text-convrt-purple transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span>© {currentYear} Convrt.ai. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by</span>
              <a 
                href="https://github.com/lifeispranav" 
                className="text-convrt-purple hover:text-convrt-purple-hover font-medium transition-colors"
              >
                @lifeispranav
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
