'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Medical Director",
    clinic: "Bay Area Family Practice",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Novoflow’s 24/7 AI receptionist has streamlined our clinic’s operations. Calls are handled seamlessly, and staff workload has dropped by 50% with its intuitive system."
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Chief of Operations",
    clinic: "Wellness Medical Group",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "The 14+ language support has made patient communication effortless for our diverse community. Patient satisfaction has soared by 30% since adopting Novoflow."
  },
  {
    name: "Dr. Emily Thompson",
    role: "Practice Owner",
    clinic: "Thompson Family Medicine",
    image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=300",
    content: "Novoflow’s automated waitlist system filled our cancellations automatically, cutting no-shows by 40%. The ROI was clear within two months."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
            Loved by Clinics
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Clinics Trust Novoflow to Transform Patient Care
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Discover why clinics choose Novoflow to streamline patient communication
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name} 
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <CardHeader className="flex flex-col items-center text-center px-8 pt-8">
                <div className="relative mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full blur opacity-25"></div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="relative rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                
              </CardHeader>
              <CardContent className="text-center px-8 pb-8">
                <p className="text-gray-600 italic text-lg leading-7 mb-6 relative before:text-4xl before:text-gray-200 before:absolute before:-top-2 before:-left-2 before:font-serif before:leading-4  after:text-4xl after:text-gray-200 after:absolute after:-bottom-4 after:-right-2 after:font-serif after:leading-4">
                  {testimonial.content}
                </p>
                <div className="space-y-1">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-gray-600 text-md">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.clinic}</p>
                </div>
                
              </CardContent>
            </Card>
          ))}
          
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Average rating of <span className="font-bold text-gray-700">4.9/5</span> from 1,000+ medical clinics
          </p>
        </div>
      </div>
      
    </section>
  );
}