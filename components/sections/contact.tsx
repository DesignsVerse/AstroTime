"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, UserPlus, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactCard = ({ icon, title, content, delay }: { icon: React.ReactNode, title: string, content: string, delay: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-gradient-to-br from-[#F9FAFB] to-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="flex flex-row items-start gap-4">
          <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-100">
            {icon}
          </div>
          <div>
            <CardTitle className="text-gray-900">{title}</CardTitle>
            <CardContent className="text-gray-600 p-0 pt-2">
              {content}
            </CardContent>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: <Phone className="h-5 w-5 text-blue-600" />,
      title: "Call Us",
      content: "+1 (888) 555-7890",
      delay: 0.2
    },
    {
      icon: <UserPlus className="h-5 w-5 text-blue-600" />,
      title: "Join Founding Partners",
      content: "founders@novoflow.com",
      delay: 0.4
    },
    {
      icon: <Calendar className="h-5 w-5 text-blue-600" />,
      title: "Schedule a Demo",
      content: "Book a live demo to see our AI in action",
      delay: 0.6
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Connect with Novoflow Today
          </h2>
          <p className="mt-4 text-xl leading-8 text-gray-600">
            Join our Founding Partners Program or explore how our AI receptionist can transform your clinic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <ContactCard 
                key={index}
                icon={method.icon}
                title={method.title}
                content={method.content}
                delay={method.delay}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="bg-white border border-gray-100 shadow-lg overflow-hidden">
              <CardContent className="relative space-y-4 pt-8 pb-8 px-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="border-gray-200 focus:border-blue-300 focus:ring-blue-200 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="border-gray-200 focus:border-blue-300 focus:ring-blue-200 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input 
                    id="email" 
                    placeholder="you@example.com" 
                    type="email" 
                    className="border-gray-200 focus:border-blue-300 focus:ring-blue-200 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                  <Input 
                    id="phone" 
                    placeholder="+1 (555) 123-4567" 
                    type="tel" 
                    className="border-gray-200 focus:border-blue-300 focus:ring-blue-200 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">How can we help?</label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your clinic’s needs and how Novoflow can help…" 
                    className="min-h-[140px] border-gray-200 focus:border-blue-300 focus:ring-blue-200 transition-all"
                  />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Submit Inquiry
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}