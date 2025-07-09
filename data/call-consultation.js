const consultations = [
  {
      id: "1",
      title: "Health Consultation",
      slug: "health",
      icon: "FaHeartbeat",
      shortDescription: "Astrological insights into health matters and wellbeing",
      description: "Our Health consultation analyzes planetary positions affecting your physical and mental health. We identify potential health risks and provide astrological remedies to improve wellbeing.",
      benefits: [
        "Identify planetary influences on health",
        "Preventive measures for potential health issues",
        "Remedies for chronic conditions",
        "Guidance for overall wellbeing",
        "Understanding of favorable periods for treatments"
      ],
      whatYouGet: [
        "Analysis of 6th and 8th houses",
        "Planetary remedies for health issues",
        "Diet and lifestyle suggestions",
        "Favorable timing for medical procedures",
        "30-minute consultation",
        "Follow-up guidance"
      ],
      price: 1500,
      duration: "30 minutes",
      process: [
        "Book your slot",
        "Share birth details",
        "Receive call at scheduled time",
        "Discuss health concerns",
        "Receive remedies via email"
      ],
      faqs: [
        {
          question: "Can astrology predict specific diseases?",
          answer: "Astrology can indicate vulnerable areas and potential health challenges, but not specific medical diagnoses."
        }
      ],
      featured: true
  },
  {
      id: "2",
      title: "Child Consultation",
      slug: "child",
      icon: "FaChild",
      shortDescription: "Guidance for child-related matters and parenthood",
      description: "This consultation provides insights into your child's future, parenting challenges, and remedies for child-related planetary influences.",
      benefits: [
        "Understand your child's potential",
        "Remedies for child health issues",
        "Guidance on education and career",
        "Solutions for conception challenges",
        "Parent-child relationship analysis"
      ],
      whatYouGet: [
        "Analysis of 5th house",
        "Planetary remedies",
        "Education guidance",
        "30-minute consultation",
        "Follow-up support"
      ],
      price: 1800,
      duration: "30 minutes",
      process: [
        "Book consultation",
        "Provide birth details",
        "Consult with astrologer",
        "Receive guidance"
      ],
      faqs: [
        {
          question: "Can this help with conception issues?",
          answer: "Yes, we can analyze favorable periods and suggest remedies."
        }
      ],
      featured: false
  },
  {
      id: "3",
      title: "Education Consultation",
      slug: "education",
      icon: "FaGraduationCap",
      shortDescription: "Guidance for academic success and career path",
      description: "This consultation helps identify ideal education paths, timing for studies, and remedies for academic challenges.",
      benefits: [
        "Identify ideal field of study",
        "Overcome learning challenges",
        "Favorable timing for exams",
        "Remedies for academic success",
        "Career path guidance"
      ],
      whatYouGet: [
        "Analysis of 4th and 5th houses",
        "Education horoscope",
        "Remedies for concentration",
        "30-minute consultation",
        "Personalized guidance"
      ],
      price: 1200,
      duration: "30 minutes",
      process: [
        "Book slot",
        "Provide details",
        "Consultation call",
        "Receive report"
      ],
      faqs: [
        {
          question: "Can this help with competitive exams?",
          answer: "Yes, we can analyze favorable periods and suggest preparation strategies."
        }
      ],
      featured: true
  },
  {
      id: "4",
      title: "Marriage Consultation",
      slug: "marriage",
      icon: "FaRing",
      shortDescription: "Comprehensive analysis for marital harmony",
      description: "Detailed analysis of marriage prospects, timing, compatibility and solutions for marital challenges.",
      benefits: [
        "Marriage timing prediction",
        "Spouse characteristics",
        "Marital harmony remedies",
        "Compatibility analysis",
        "Post-marriage guidance"
      ],
      whatYouGet: [
        "7th house analysis",
        "Dosha analysis",
        "Remedies for delays",
        "Compatibility report",
        "30-minute consultation"
      ],
      price: 2000,
      duration: "45 minutes",
      process: [
        "Book consultation",
        "Share birth details",
        "Detailed analysis",
        "Consultation session",
        "Remedies report"
      ],
      faqs: [
        {
          question: "Can this help with delayed marriage?",
          answer: "Yes, we identify causes and provide effective remedies."
        }
      ],
      featured: true
  },
  {
      id: "5",
      title: "Career Consultation",
      slug: "career",
      icon: "FaBriefcase",
      shortDescription: "Professional guidance for career growth",
      description: "Astrological analysis of your career potential, ideal professions, and timing for career changes.",
      benefits: [
        "Identify ideal career path",
        "Timing for job changes",
        "Remedies for career obstacles",
        "Business success strategies",
        "Professional growth guidance"
      ],
      whatYouGet: [
        "10th house analysis",
        "Dasha period analysis",
        "Career horoscope",
        "30-minute consultation",
        "Remedies report"
      ],
      price: 1800,
      duration: "30 minutes",
      process: [
        "Book session",
        "Provide details",
        "Consultation call",
        "Receive guidance"
      ],
      faqs: [
        {
          question: "Can this help with government jobs?",
          answer: "Yes, we can analyze favorable periods and suggest strategies."
        }
      ],
      featured: true
  },
  {
      id: "6",
      title: "Love & Relationship Consultation",
      slug: "love-relationship",
      icon: "FaHeart",
      shortDescription: "Expert guidance for love life, compatibility and relationship issues",
      description: "Our Love & Relationship consultation provides deep insights into your romantic life, partner compatibility, and solutions to relationship challenges. Our astrologers analyze your birth chart to understand planetary influences affecting your love life and provide personalized remedies and guidance.",
      benefits: [
        "Understand relationship compatibility with partners",
        "Identify ideal timing for marriage/relationship",
        "Solutions for love problems and breakups",
        "Remedies for planetary afflictions affecting relationships",
        "Guidance for happy married life"
      ],
      whatYouGet: [
        "Detailed analysis of 7th house and Venus position",
        "Compatibility assessment with your partner",
        "Personalized mantras and remedies",
        "Guidance on favorable periods for relationships",
        "30-minute one-on-one phone consultation",
        "Follow-up remedies via email"
      ],
      price: 1500,
      duration: "30 minutes",
      process: [
        "Book your consultation slot",
        "Share your birth details (and partner's if available)",
        "Receive call from our astrologer at scheduled time",
        "Discuss your concerns and get guidance",
        "Receive follow-up remedies via email"
      ],
      faqs: [
        {
          question: "Can this consultation help if I'm single?",
          answer: "Yes, we can analyze when you're likely to meet a partner and what kind of partner would be most compatible with you."
        },
        {
          question: "Do I need my partner's birth details?",
          answer: "While partner's details help with precise compatibility analysis, we can provide valuable guidance with just your details."
        }
      ],
      featured: true
  },
  {
      id: "7",
      title: "Business Consultation",
      slug: "business",
      icon: "FaChartLine",
      shortDescription: "Astrological guidance for business success",
      description: "Analysis of business prospects, timing for ventures, and remedies for business growth and stability.",
      benefits: [
        "Ideal business timing",
        "Partnership compatibility",
        "Financial growth strategies",
        "Obstacle removal remedies",
        "Business stability guidance"
      ],
      whatYouGet: [
        "10th and 11th house analysis",
        "Business horoscope",
        "Remedies for success",
        "45-minute consultation",
        "Detailed report"
      ],
      price: 2500,
      duration: "45 minutes",
      process: [
        "Book consultation",
        "Provide details",
        "In-depth analysis",
        "Consultation session",
        "Receive remedies"
      ],
      faqs: [
        {
          question: "Can this help choose business partners?",
          answer: "Yes, we can analyze compatibility with potential partners."
        }
      ],
      featured: false
  },
  {
      id: "8",
      title: "Travel Consultation",
      slug: "travel",
      icon: "FaPlane",
      shortDescription: "Astrological guidance for travel and migration",
      description: "Analysis of favorable travel periods, migration prospects, and remedies for travel-related challenges.",
      benefits: [
        "Identify favorable travel periods",
        "Foreign settlement analysis",
        "Remedies for travel obstacles",
        "Visa approval guidance",
        "Safe travel measures"
      ],
      whatYouGet: [
        "12th and 9th house analysis",
        "Travel horoscope",
        "Remedies for obstacles",
        "30-minute consultation",
        "Personalized guidance"
      ],
      price: 1200,
      duration: "30 minutes",
      process: [
        "Book session",
        "Provide details",
        "Consultation call",
        "Receive report"
      ],
      faqs: [
        {
          question: "Can this predict foreign settlement?",
          answer: "Yes, we can analyze planetary positions for migration potential."
        }
      ],
      featured: false
  },
  {
      id: "9",
      title: "Finance Consultation",
      slug: "finance",
      icon: "FaRupeeSign",
      shortDescription: "Wealth and financial prosperity guidance",
      description: "Astrological analysis of wealth potential, financial growth periods, and remedies for money matters.",
      benefits: [
        "Wealth potential analysis",
        "Favorable investment periods",
        "Debt reduction remedies",
        "Financial stability guidance",
        "Prosperity enhancement"
      ],
      whatYouGet: [
        "2nd and 11th house analysis",
        "Dasha period analysis",
        "Wealth remedies",
        "30-minute consultation",
        "Personalized report"
      ],
      price: 1800,
      duration: "30 minutes",
      process: [
        "Book consultation",
        "Provide details",
        "Analysis session",
        "Receive guidance"
      ],
      faqs: [
        {
          question: "Can this help with investments?",
          answer: "Yes, we can identify favorable periods for investments."
        }
      ],
      featured: true
  },
  {
      id: "10",
      title: "Politic/Rajyog Consultation",
      slug: "politic-rajyog",
      icon: "FaLandmark",
      shortDescription: "Analysis of political career and raj yogas",
      description: "Identification of raj yogas in your chart and guidance for political or leadership success.",
      benefits: [
        "Political career potential",
        "Leadership qualities analysis",
        "Election timing guidance",
        "Raj yoga identification",
        "Public success remedies"
      ],
      whatYouGet: [
        "Full chart analysis",
        "Raj yoga report",
        "Remedies for success",
        "45-minute consultation",
        "Detailed guidance"
      ],
      price: 3000,
      duration: "45 minutes",
      process: [
        "Book session",
        "Provide details",
        "In-depth analysis",
        "Consultation session",
        "Receive report"
      ],
      faqs: [
        {
          question: "Can this predict election success?",
          answer: "We can analyze favorable periods and suggest strategies."
        }
      ],
      featured: false
  },
  {
      id: "11",
      title: "Buy/Sell Consultation",
      slug: "buy-sell",
      icon: "FaHome",
      shortDescription: "Astrological guidance for property matters",
      description: "Analysis of favorable timings for property transactions and remedies for property-related issues.",
      benefits: [
        "Ideal timing for buying/selling",
        "Property selection guidance",
        "Legal issue remedies",
        "Vastu compatibility",
        "Investment potential"
      ],
      whatYouGet: [
        "4th house analysis",
        "Property horoscope",
        "Remedies for obstacles",
        "30-minute consultation",
        "Guidance report"
      ],
      price: 1500,
      duration: "30 minutes",
      process: [
        "Book consultation",
        "Provide details",
        "Analysis session",
        "Receive guidance"
      ],
      faqs: [
        {
          question: "Can this help choose a property?",
          answer: "Yes, we can analyze compatibility with your chart."
        }
      ],
      featured: false
  }
];

export default consultations;