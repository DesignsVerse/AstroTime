// testimonialData.ts
export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company?: string;
    rating: number;
    text: string;
    avatarColor?: string;
    lifePathNumber?: number; // Adding numerology-specific field
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Saara Williams",
      role: "Marketing Manager",
      company: "Global Brands Inc.",
      rating: 5,
      text: "The numerology readings provided deep insights that helped realign our brand strategy. The accuracy was uncanny and the guidance proved invaluable for our campaigns.",
      avatarColor: "#9C27B0",
      lifePathNumber: 3
    },
    {
      id: "2",
      name: "Raj Patel",
      role: "CTO",
      company: "TechStart",
      rating: 5,
      text: "As a tech professional, I was skeptical at first. But the numerological analysis of our launch dates and product names matched perfectly with our actual outcomes.",
      avatarColor: "#3F51B5",
      lifePathNumber: 7
    },
    {
      id: "3",
      name: "Emily Chen",
      role: "Product Director",
      company: "InnovateCorp",
      rating: 5,
      text: "The life path number analysis helped me understand my career direction better. The guidance was so precise it felt like the reader knew me personally.",
      avatarColor: "#E91E63",
      lifePathNumber: 1
    },
    {
      id: "4",
      name: "Michael Johnson",
      role: "Founder & CEO",
      company: "NextGen Solutions",
      rating: 5,
      text: "We consulted for our company name numerology and the results were transformative. Our rebranding led to a 40% increase in customer engagement.",
      avatarColor: "#00BCD4",
      lifePathNumber: 8
    },
    {
      id: "5",
      name: "Priya Sharma",
      role: "Operations Head",
      company: "Efficiency Partners",
      rating: 5,
      text: "The compatibility reading for our leadership team helped resolve long-standing conflicts. The insights were practical and immediately applicable.",
      avatarColor: "#FF9800",
      lifePathNumber: 6
    },
    {
      id: "6",
      name: "David Kim",
      role: "Financial Advisor",
      company: "Wealth Management LLC",
      rating: 5,
      text: "The destiny number analysis provided clarity during a career crossroads. I've since made decisions with much more confidence and purpose.",
      avatarColor: "#4CAF50",
      lifePathNumber: 5
    }
  ];
  
  export const numerologyFacts = {
    title: "Transformations Through Numbers",
    subtitle: "Discover how numerology has guided our clients to clarity and success",
    tagline: "Client Experiences"
  };