'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, X, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Our Mission", href: "/about" },
      { name: "Join Our Team", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
    support: [
      { name: "Support Center", href: "/help" },
      { name: "FAQ", href: "/faq" },
      { name: "Integration Guides", href: "/docs" },
    ],
  };

  const socialLinks = [
    { name: "X", href: "https://x.com/novoflow", icon: X },
    { name: "LinkedIn", href: "https://linkedin.com/company/novoflow", icon: Linkedin },
    { name: "Email", href: "mailto:founders@novoflow.com", icon: Mail },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-12 md:grid-cols-4"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Novoflow</h3>
            <p className="text-gray-600 text-sm leading-6">
              Streamlining patient communication with AI-powered clinic solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h4 className="text-lg font-semibold text-gray-900">
                Join Our Community
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Get updates on Novoflow’s AI solutions and Founding Partners Program.
              </p>
            </div>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full sm:w-64 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors duration-300">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            © {currentYear} Demo Novoflow. Design By DesignsVerse.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}