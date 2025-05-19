'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Practice",
    pricing: "On request",
    description: "For solo and small clinics to boost efficiency",
    buttonText: "JOIN FOUNDING PARTNERS",
    footerText: "Transform patient communication with Novoflow’s AI receptionist. Struggling with missed calls or no-shows? Our tailored solution guarantees ROI.",
    additionalInfo: "Only 5 Founding Partner slots left!",
    isPopular: true,
    features: [
      "24/7 AI Receptionist",
      "Multi-Language Support",
      "Appointment Scheduling",
      "HIPAA Compliance",
    ],
  },
  {
    name: "Enterprise",
    pricing: "On request",
    description: "Scalable AI solutions for large medical networks",
    buttonText: "CONTACT US",
    footerText: "Custom AI receptionist with full EHR integration and dedicated support. Perfect for large networks with complex workflows.",
    isPopular: false,
    features: [
      "Full EHR Integration",
      "Waitlist Automation",
      "Dedicated Onboarding Team",
      "Analytics Dashboard",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing Plans for Every Clinic
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Choose a plan to streamline patient communication.
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
              Only 5 Q2 2025 slots left!
            </span>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <Card
                className={`
                  flex flex-col bg-white rounded-2xl shadow-lg border
                  ${plan.isPopular ? 'border-blue-500 border-2' : 'border-gray-200'}
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                `}
              >
                {plan.isPopular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-bold rounded-full shadow-lg">
                      TOP CHOICE
                    </span>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl font-semibold text-gray-900">
                    {plan.pricing}
                  </CardTitle>
                  <p className="text-gray-600 text-base mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow py-6">
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 text-sm">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`
                      w-full py-3 text-lg font-medium rounded-lg hover:scale-[1.02]
                      ${
                        plan.isPopular
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                          : 'bg-transparent text-black border border-black hover:bg-gray-100'
                      }
                      transition-all duration-300
                    `}
                    asChild
                  >
                    <a href={plan.isPopular ? "mailto:founders@novoflow.com" : "/contact"}>{plan.buttonText}</a>
                  </Button>
                  <p className="mt-4 text-gray-600 text-sm">{plan.footerText}</p>
                  {plan.additionalInfo && (
                    <p className="mt-2 text-red-600 text-sm font-medium">{plan.additionalInfo}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}