export interface Service {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    longDescription: string;
    benefits: string[];
    features?: string[];
    price: number;
    duration: string;
    deliveryTime?: string;
    process?: string[];
    faqs?: { question: string; answer: string }[];
    featured?: boolean;
  }
  
  export const services: Service[] = [
    {
      id: '1',
      title: 'Lal Kitab Report',
      slug: 'lal-kitab-report',
      description: 'Unlock success, prosperity, and positivity with tailored Lal Kitab remedies.',
      longDescription: 'Our comprehensive Lal Kitab report provides personalized remedies based on your birth chart to help you overcome obstacles and attract positive energy. The report includes specific upayas (remedies) for planetary positions affecting your life, career, health, and relationships.',
      icon: 'FaBook',
      benefits: [
        'Personalized remedies for planetary issues',
        'Improve financial prosperity',
        'Enhance relationships',
        'Remove negative energies',
        'Balance planetary influences'
      ],
      features: [
        'Detailed analysis of your birth chart',
        'Specific upayas for each planet',
        'Remedies using common household items',
        'Personalized mantras and rituals',
        '30-page comprehensive report'
      ],
      price: 1999,
      duration: 'Instant Access',
      deliveryTime: '48 hours after receiving details',
      process: [
        'Share your birth details (date, time, place)',
        'Our astrologer analyzes your chart',
        'Prepare personalized Lal Kitab remedies',
        'Deliver detailed PDF report via email'
      ],
      faqs: [
        {
          question: 'How accurate is Lal Kitab astrology?',
          answer: 'Lal Kitab is renowned for its practical and effective remedies that have helped thousands. While no astrology is 100% accurate, Lal Kitab has shown remarkable results when remedies are followed sincerely.'
        },
        {
          question: 'What if I don\'t know my exact birth time?',
          answer: 'We can work with approximate time, but exact time gives most accurate results. If unsure, we can help you rectify your birth time.'
        }
      ]
    },
    {
      id: '2',
      title: 'Book Consultation Call',
      slug: 'consultation-call',
      description: 'Receive personalized guidance on life, love, career, business, and finances.',
      longDescription: 'Get direct access to our expert astrologers for a one-on-one consultation. Discuss your specific concerns and receive guidance tailored to your unique birth chart and current planetary transits. Our astrologers have 15+ years experience in Vedic astrology, numerology, and Lal Kitab remedies.',
      icon: 'FaPhoneAlt',
      benefits: [
        'Personalized life guidance',
        'Career and financial advice',
        'Relationship compatibility analysis',
        'Remedies for current challenges',
        'Yearly forecast insights'
      ],
      features: [
        '30/60 minute personal session',
        'Available in Hindi/English',
        'Video or audio call options',
        'Follow-up email summary',
        'Priority support for 7 days'
      ],
      price: 1499,
      duration: '30/60 minutes',
      deliveryTime: 'Instant booking available',
      process: [
        'Select your preferred astrologer',
        'Choose date/time from calendar',
        'Make payment to confirm booking',
        'Receive Zoom link via email',
        'Attend session at scheduled time'
      ],
      faqs: [
        {
          question: 'What should I prepare for the call?',
          answer: 'Have your birth details ready (date, time, place) and specific questions you want answered for maximum benefit.'
        },
        {
          question: 'Can I record the session?',
          answer: 'Yes, you may record the session for personal reference with prior notice to the astrologer.'
        }
      ]
    },
    {
      id: '3',
      title: 'Couple Kundali',
      slug: 'couple-kundali',
      description: 'Ensure marital harmony with precise Kundali Milan horoscope matching.',
      longDescription: 'Our detailed couple kundali analysis examines 36 gunas for compatibility, helping you understand emotional, intellectual, and spiritual alignment between partners. We provide remedies for any doshas like Manglik, Bhakoot, or Nadi dosha that might affect marital harmony.',
      icon: 'FaHeart',
      benefits: [
        'Comprehensive 36 guna analysis',
        'Manglik dosha check & remedies',
        'Emotional & sexual compatibility',
        'Financial harmony assessment',
        'Long-term marriage prospects'
      ],
      features: [
        'Detailed point-by-point matching',
        'Remedies for any doshas found',
        'Compatibility beyond just gunas',
        'Personalized marriage advice',
        '25+ page detailed report'
      ],
      price: 2499,
      duration: 'Lifetime validity',
      deliveryTime: '72 hours after receiving details',
      process: [
        'Provide both partners\' birth details',
        'Our astrologer analyzes compatibility',
        'Identify strengths and challenges',
        'Prepare detailed report with remedies',
        'Deliver PDF via email'
      ],
      faqs: [
        {
          question: 'What if we have low guna matching?',
          answer: 'Low guna matching doesn\'t necessarily mean incompatibility. We provide specific remedies to strengthen weak areas and enhance compatibility.'
        },
        {
          question: 'Can this be done for same-sex couples?',
          answer: 'Absolutely! Astrological compatibility works the same way regardless of gender.'
        }
      ]
    },
    {
      id: '4',
      title: 'Personalized Kundali',
      slug: 'personalized-kundali',
      description: 'Comprehensive 10+ year predictions for career, health, love, and marriage.',
      longDescription: 'Get your complete birth chart analysis with detailed predictions for all aspects of life. Our expert astrologers analyze your planetary positions, dasas, and transits to provide accurate forecasts and remedies for the next 10+ years. Includes career guidance, health warnings, marriage timing, and financial prospects.',
      icon: 'FaUserAlt',
      benefits: [
        '10-year life forecast',
        'Career growth opportunities',
        'Ideal marriage timing',
        'Health precautions',
        'Financial planning guidance'
      ],
      features: [
        '50+ page detailed report',
        'Planetary period (dasa) analysis',
        'Yearly/monthly predictions',
        'Gemstone recommendations',
        'Personalized remedies'
      ],
      price: 2999,
      duration: '10-year forecast',
      deliveryTime: '5 working days',
      process: [
        'Provide accurate birth details',
        'Our astrologer creates your chart',
        'Analyze planetary positions',
        'Prepare detailed predictions',
        'Deliver comprehensive report'
      ]
    },
    {
      id: '5',
      title: 'Mega Numerology Webinar',
      slug: 'numerology-webinar',
      description: 'Join our 2-day live numerology webinar on Zoom for deep insights.',
      longDescription: 'Learn how numbers influence your life in this intensive 2-day webinar. Discover your life path number, destiny number, and how to use numerology for success in career, relationships, and personal growth. Includes live Q&A, personalized number analysis, and practical applications.',
      icon: 'FaVideo',
      benefits: [
        'Understand your core numbers',
        'Improve decision making',
        'Choose auspicious dates',
        'Select beneficial names',
        'Enhance relationships'
      ],
      features: [
        '6 hours of live training',
        'Interactive exercises',
        'Personalized number analysis',
        'Recording access for 30 days',
        'Bonus numerology guide'
      ],
      price: 3499,
      duration: '2 days (3 hours/day)',
      deliveryTime: 'Instant access after booking'
    },
    // Add all remaining services with similar detailed structure...
    {
      id: '6',
      title: 'Buy Rudraksha',
      slug: 'buy-rudraksha',
      description: 'Explore our authentic Rudraksha collection for spiritual growth.',
      longDescription: 'Genuine, energized Rudraksha beads sourced directly from Nepal and Indonesia. Each bead is tested for authenticity and energized with Vedic mantras. Choose from 1 to 21 mukhi Rudraksha beads with detailed guidance on wearing and maintaining them for maximum spiritual benefits.',
      icon: 'FaPrayingHands',
      benefits: [
        'Enhance spiritual growth',
        'Reduce stress and anxiety',
        'Improve concentration',
        'Balance chakras',
        'Attract positive energy'
      ],
      features: [
        '100% authentic beads',
        'Mantra energized',
        'Certified quality',
        'Silver/gold casing options',
        'Wearing guidance included'
      ],
      price: 999,
      duration: 'Lifetime product',
      deliveryTime: '3-5 working days'
    }
  ];