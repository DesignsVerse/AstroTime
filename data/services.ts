// Service type definition
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  features: string[];
  price: number;
  duration: string;
  deliveryTime: string;
  process: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Janm Patrika Analysis',
    slug: 'janm-patrika-analysis',
    description: 'Detailed birth chart analysis with 10+ year predictions.',
    longDescription: 'Get a comprehensive analysis of your birth chart (Janm Patrika) with predictions for career, health, love, and marriage. Our expert astrologers analyze planetary positions, dasas, and transits to provide accurate forecasts and remedies for the next decade.',
    icon: 'FaChartLine',
    benefits: [
      '10-year life forecast',
      'Career and financial guidance',
      'Marriage timing predictions',
      'Health and wellness insights',
      'Personalized remedies'
    ],
    features: [
      '50+ page detailed report',
      'Dasa and transit analysis',
      'Yearly predictions',
      'Gemstone recommendations',
      'Vedic remedies'
    ],
    price: 2999,
    duration: '10-year forecast',
    deliveryTime: '5 working days',
    process: [
      'Submit birth details (date, time, place)',
      'Astrologer creates your chart',
      'Analyze planetary influences',
      'Prepare detailed predictions',
      'Deliver PDF report via email'
    ],
    faqs: [
      {
        question: 'What if my birth time is unknown?',
        answer: 'We can work with approximate times or help rectify your birth time for accurate results.'
      },
      {
        question: 'How accurate are the predictions?',
        answer: 'Our predictions are based on Vedic astrology principles and are highly accurate when birth details are precise.'
      }
    ],
    featured: true
  },
  {
    id: '1',
    title: 'Physical Kundli',
    slug: 'physical-kundli',
    description: 'Get your Janm Patrika as a beautifully printed, physical kundli delivered to your address.',
    longDescription: 'Receive a high-quality, printed copy of your Janm Patrika (birth chart) with detailed analysis and predictions for career, health, love, and marriage. Our expert astrologers prepare your kundli and send the hard copy to your doorstep via courier or post. Perfect for gifting or personal keepsake.',
    icon: 'FaChartLine',
    benefits: [
      'Beautifully printed kundli delivered to your address',
      '10-year life forecast',
      'Career and financial guidance',
      'Marriage timing predictions',
      'Health and wellness insights',
      'Personalized remedies'
    ],
    features: [
      '50+ page detailed printed report',
      'Dasa and transit analysis',
      'Yearly predictions',
      'Gemstone recommendations',
      'Vedic remedies',
      'Courier/post delivery of hard copy'
    ],
    price: 2999,
    duration: '10-year forecast',
    deliveryTime: 'Printed copy delivered by courier/post in 5-7 working days',
    process: [
      'Submit birth details (date, time, place)',
      'Astrologer creates your chart',
      'Analyze planetary influences',
      'Prepare detailed printed kundli',
      'Deliver hard copy via courier/post'
    ],
    faqs: [
      {
        question: 'What if my birth time is unknown?',
        answer: 'We can work with approximate times or help rectify your birth time for accurate results.'
      },
      {
        question: 'How will I receive my physical kundli?',
        answer: 'Your printed kundli will be delivered to your provided address via courier or post.'
      }
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Falit Jyotish Consultation',
    slug: 'falit-jyotish-consultation',
    description: 'Predictive astrology guidance for life\'s challenges.',
    longDescription: 'Receive expert guidance through Falit Jyotish (predictive astrology) to navigate life\'s uncertainties. Our astrologers interpret your birth chart and current transits to provide insights into future events and practical remedies.',
    icon: 'FaStar',
    benefits: [
      'Accurate future predictions',
      'Career and financial advice',
      'Relationship insights',
      'Remedies for challenges',
      'Personalized forecasts'
    ],
    features: [
      '30/60 minute consultation',
      'Hindi/English sessions',
      'Video or audio call',
      'Follow-up email summary',
      '7-day priority support'
    ],
    price: 1499,
    duration: '30/60 minutes',
    deliveryTime: 'Instant booking available',
    process: [
      'Choose an astrologer',
      'Select date/time slot',
      'Confirm booking with payment',
      'Receive Zoom link',
      'Join session'
    ],
    faqs: [
      {
        question: 'What should I ask during the consultation?',
        answer: 'Prepare specific questions about your life, career, or relationships for focused guidance.'
      },
      {
        question: 'Can I reschedule my session?',
        answer: 'Yes, rescheduling is possible with 24-hour notice, subject to availability.'
      }
    ],
    featured: true
  },
  {
    id: '3',
    title: 'Gemstone Astrology',
    slug: 'gemstone-astrology',
    description: 'Personalized gemstone recommendations for planetary balance.',
    longDescription: 'Enhance your life\'s positivity with gemstones tailored to your birth chart. Our astrologers analyze your planetary positions to recommend gemstones that strengthen beneficial planets and mitigate negative influences.',
    icon: 'FaGem',
    benefits: [
      'Balance planetary energies',
      'Improve health and wealth',
      'Enhance mental clarity',
      'Attract positive opportunities',
      'Personalized gemstone advice'
    ],
    features: [
      'Detailed gemstone report',
      'Planetary analysis',
      'Wearing instructions',
      'Authenticity guidance',
      '15-page report'
    ],
    price: 1999,
    duration: 'Lifetime guidance',
    deliveryTime: '48 hours',
    process: [
      'Provide birth details',
      'Astrologer analyzes chart',
      'Recommend suitable gemstones',
      'Prepare detailed report',
      'Deliver PDF via email'
    ],
    faqs: [
      {
        question: 'How do I know if a gemstone is authentic?',
        answer: 'We provide certification and testing methods to verify gemstone authenticity.'
      },
      {
        question: 'How long until I see results?',
        answer: 'Most clients report positive changes within 2-3 weeks of proper gemstone usage.'
      }
    ]
  },
  {
    id: '4',
    title: 'Dosha and Yoga Analysis',
    slug: 'dosha-yoga-analysis',
    description: 'Identify and remedy doshas and yogas in your chart.',
    longDescription: 'Understand the doshas (e.g., Manglik, Kaalsarp) and yogas (e.g., Raj Yoga) in your birth chart. Our detailed analysis provides remedies to mitigate negative doshas and enhance positive yogas for a balanced life.',
    icon: 'FaBalanceScale',
    benefits: [
      'Identify key doshas',
      'Enhance beneficial yogas',
      'Improve life outcomes',
      'Personalized remedies',
      'Long-term guidance'
    ],
    features: [
      '20-page detailed report',
      'Dosha-specific remedies',
      'Yoga enhancement tips',
      'Planetary analysis',
      'Mantra recommendations'
    ],
    price: 2499,
    duration: 'Lifetime validity',
    deliveryTime: '72 hours',
    process: [
      'Submit birth details',
      'Complete chart analysis',
      'Identify doshas/yogas',
      'Prepare remedies',
      'Deliver comprehensive report'
    ],
    faqs: [
      {
        question: 'What if I have multiple doshas?',
        answer: 'We provide combined remedies that address all doshas in your chart holistically.'
      },
      {
        question: 'Can doshas be completely removed?',
        answer: 'While doshas cannot be removed, their negative effects can be significantly reduced.'
      }
    ],
    featured: true
  },
  {
    id: '5',
    title: 'Vastu',
    slug: 'vastu',
    description: 'Optimize your space and destiny with Vastu and palmistry.',
    longDescription: 'Combine the power of Vastu Shastra and palmistry to align your living space and understand your destiny. Our experts provide Vastu recommendations for your home and palmistry insights based on your hand lines.',
    icon: 'FaHome',
    benefits: [
      'Harmonize living spaces',
      'Understand life path',
      'Improve prosperity',
      'Enhance relationships',
      'Personalized advice'
    ],
    features: [
      'Vastu layout suggestions',
      'Palmistry report',
      '30-minute consultation',
      'Follow-up support',
      'Detailed PDF report'
    ],
    price: 2999,
    duration: 'Lifetime guidance',
    deliveryTime: '5 working days',
    process: [
      'Submit property details/hand photos',
      'Expert analysis',
      'Prepare recommendations',
      'Video consultation',
      'Deliver final report'
    ],
    faqs: [
      {
        question: 'Can Vastu changes be made in rented homes?',
        answer: 'Yes, we provide non-invasive Vastu solutions perfect for rented spaces.'
      },
      {
        question: 'Which hand should I send for palmistry?',
        answer: 'For men - right hand, for women - left hand (both if possible).'
      }
    ]
  },
  {
    id: '5',
    title: 'Palmistry',
    slug: 'vastu',
    description: 'Optimize your space and destiny with Vastu and palmistry.',
    longDescription: 'Combine the power of Vastu Shastra and palmistry to align your living space and understand your destiny. Our experts provide Vastu recommendations for your home and palmistry insights based on your hand lines.',
    icon: 'FaHome',
    benefits: [
      'Harmonize living spaces',
      'Understand life path',
      'Improve prosperity',
      'Enhance relationships',
      'Personalized advice'
    ],
    features: [
      'Vastu layout suggestions',
      'Palmistry report',
      '30-minute consultation',
      'Follow-up support',
      'Detailed PDF report'
    ],
    price: 2999,
    duration: 'Lifetime guidance',
    deliveryTime: '5 working days',
    process: [
      'Submit property details/hand photos',
      'Expert analysis',
      'Prepare recommendations',
      'Video consultation',
      'Deliver final report'
    ],
    faqs: [
      {
        question: 'Can Vastu changes be made in rented homes?',
        answer: 'Yes, we provide non-invasive Vastu solutions perfect for rented spaces.'
      },
      {
        question: 'Which hand should I send for palmistry?',
        answer: 'For men - right hand, for women - left hand (both if possible).'
      }
    ]
  },
  {
    id: '6',
    title: 'Prashn Kundli',
    slug: 'prashn-kundli',
    description: 'Instant answers to specific questions via Prashn Kundli.',
    longDescription: 'Get immediate insights into specific questions without a birth chart using Prashn Kundli (horary astrology). Our astrologers cast a chart based on the moment of your question to provide accurate answers.',
    icon: 'FaQuestionCircle',
    benefits: [
      'Quick answers to queries',
      'No birth details needed',
      'Career and love insights',
      'Decision-making support',
      'Remedies for challenges'
    ],
    features: [
      'Instant chart casting',
      'Detailed answer report',
      'Remedy suggestions',
      '10-page report',
      'Email delivery'
    ],
    price: 999,
    duration: 'Instant access',
    deliveryTime: '24 hours',
    process: [
      'Submit your question',
      'Astrologer casts Prashn Kundli',
      'Analyze planetary positions',
      'Prepare answer with remedies',
      'Deliver report via email'
    ],
    faqs: [
      {
        question: 'How specific should my question be?',
        answer: 'The more specific your question, the more precise the answer will be.'
      },
      {
        question: 'Can I ask multiple questions?',
        answer: 'Each report covers one primary question for maximum accuracy.'
      }
    ]
  },
  {
    id: '7',
    title: 'Kundli Milan / Matchmaking',
    slug: 'kundli-milan',
    description: 'Ensure marital harmony with precise Kundali matching.',
    longDescription: 'Our detailed Kundali Milan analysis examines 36 gunas for compatibility, helping you understand emotional, intellectual, and spiritual alignment between partners. Includes remedies for Manglik, Bhakoot, or Nadi dosha.',
    icon: 'FaHandHoldingHeart',
    benefits: [
      'Comprehensive 36-guna analysis',
      'Manglik dosha check & remedies',
      'Emotional & sexual compatibility',
      'Financial harmony assessment',
      'Long-term marriage prospects'
    ],
    features: [
      'Detailed point-by-point matching',
      'Remedies for any doshas found',
      'Compatibility beyond just gunas',
      'Individualized marriage advice',
      '25+ page detailed report'
    ],
    price: 2499,
    duration: 'Lifetime validity',
    deliveryTime: '2 days after receiving details',
    process: [
      'Provide birth details of both partners',
      'Astrologer analyzes compatibility',
      'Identify strengths and challenges',
      'Prepare detailed report with remedies',
      'Deliver PDF via email'
    ],
    faqs: [
      {
        question: 'What if we have low guna matching?',
        answer: 'Low guna matching doesn\'t mean incompatibility. We provide specific remedies to strengthen weak areas.'
      },
      {
        question: 'Can this be done for same-sex couples?',
        answer: 'Yes, astrological compatibility is universal across genders.'
      }
    ],
    featured: true
  },
  {
    id: '8',
    title: 'Krishnamurti Paddhati (K.P.)',
    slug: 'kp-astrology',
    description: 'Precise predictions using K.P. astrology system.',
    longDescription: 'Experience the precision of Krishnamurti Paddhati (K.P.) astrology, which uses stellar and sub-lord techniques for accurate predictions. Ideal for specific questions about career, or marriage timing.',
    icon: 'FaClock',
    benefits: [
      'Highly accurate predictions',
      'Timing of key life events',
      'Career and financial guidance',
      'Relationship insights',
      'Remedial solutions'
    ],
    features: [
      'Sub-lord analysis',
      'Event timing predictions',
      '20-page detailed report',
      'Remedy suggestions',
      'Personalized consultation option'
    ],
    price: 2499,
    duration: '3-month forecast',
    deliveryTime: '72 hours',
    process: [
      'Submit birth details and questions',
      'Astrologer prepares KP chart',
      'Analyze sub-lords and cusps',
      'Prepare detailed predictions',
      'Deliver comprehensive report'
    ],
    faqs: [
      {
        question: 'How is KP different from Vedic astrology?',
        answer: 'KP uses stellar subdivisions for more precise timing of events compared to traditional Vedic methods.'
      },
      {
        question: 'Can KP predict exact dates?',
        answer: 'KP can predict time periods (within weeks/months) when events are likely to occur.'
      }
    ]
  },
  {
    id: '9',
    title: 'Sadesati Report',
    slug: 'sadesati-report',
    description: 'Understand and mitigate Saturn\'s Sadesati effects.',
    longDescription: 'Analyze the impact of Saturn\'s 7.5-year Sadesati cycle on your life. Our report explains the three phases of Sadesati and provides remedies to reduce its challenges and harness its benefits.',
    icon: 'FaMoon',
    benefits: [
      'Understand Sadesati phases',
      'Reduce negative impacts',
      'Enhance positive outcomes',
      'Personalized remedies',
      'Long-term guidance'
    ],
    features: [
      'Detailed phase report',
      'Mantra and charity remedies',
      '15-page analysis',
      'Gemstone suggestions',
      'Follow-up support'
    ],
    price: 1499,
    duration: 'Lifetime',
    deliveryTime: '48 hours',
    process: [
      'Submit birth details',
      'Analyze Saturn\'s position',
      'Identify current phase',
      'Prepare phase-specific remedies',
      'Deliver detailed report'
    ],
    faqs: [
      {
        question: 'Is Sadesati always bad?',
        answer: 'No, each phase has different effects - some challenging, some beneficial. We help you navigate all.'
      },
      {
        question: 'What if I am not in Sadesati?',
        answer: 'The report will confirm this and analyze Saturn\'s general influence in your chart.'
      }
    ]
  },
  {
    id: '10',
    title: 'Manglik Dosha Report',
    slug: 'manglik-dosha',
    description: 'Identify and remedy Manglik dosha for marital harmony.',
    longDescription: 'Our Manglik dosha report analyzes your chart for Mars-related doshas affecting marriage. We provide specific remedies to neutralize its effects and ensure a successful marital life.',
    icon: 'FaFire',
    benefits: [
      'Identify Manglik dosha',
      'Marital harmony solutions',
      'Personalized remedies',
      'Compatibility guidance',
      'Long-term benefits'
    ],
    features: [
      'Detailed dosha analysis',
      'Remedy recommendations',
      '10-page report',
      'Mantra suggestions',
      'Consultation option'
    ],
    price: 999,
    duration: 'Lifetime',
    deliveryTime: '24 hours',
    process: [
      'Submit birth details',
      'Analyze Mars position',
      'Determine dosha severity',
      'Prepare customized remedies',
      'Deliver comprehensive report'
    ],
    faqs: [
      {
        question: 'Can Manglik dosha be cancelled?',
        answer: 'Yes, through proper remedies and by matching with another Manglik partner.'
      },
      {
        question: 'What if only one partner is Manglik?',
        answer: 'We provide specific remedies to balance the energies between partners.'
      }
    ]
  },
  {
    id: '11',
    title: 'Kaalsarp Dosha Analysis',
    slug: 'kaalsarp-dosha',
    description: 'Mitigate Kaalsarp dosha for life success.',
    longDescription: 'Understand the effects of Kaalsarp dosha in your chart and receive remedies to reduce its obstacles. Our report identifies the type of Kaalsarp dosha and tailored solutions for success.',
    icon: 'FaGlobeAsia',
    benefits: [
      'Identify Kaalsarp dosha',
      'Overcome life obstacles',
      'Personalized remedies',
      'Improve prosperity',
      'Spiritual growth'
    ],
    features: [
      'Detailed dosha report',
      'Puja and mantra remedies',
      '15-page analysis',
      'Follow-up guidance',
      'Consultation option'
    ],
    price: 1999,
    duration: 'Lifetime',
    deliveryTime: '48 hours',
    process: [
      'Submit birth details',
      'Analyze planetary positions',
      'Identify Kaalsarp type',
      'Prepare specific remedies',
      'Deliver detailed report'
    ],
    faqs: [
      {
        question: 'How severe is my Kaalsarp dosha?',
        answer: 'The report will analyze the specific type and strength of your dosha.'
      },
      {
        question: 'Can Kaalsarp dosha be removed?',
        answer: 'While the dosha remains, its negative effects can be significantly reduced with proper remedies.'
      }
    ]
  },
  {
    id: '12',
    title: 'Numerology Analysis',
    slug: 'numerology-analysis',
    description: 'Unlock insights with personalized numerology report.',
    longDescription: 'Discover how numbers shape your life with a detailed numerology report. Learn your life path, destiny number, and how to use numerology for success in relationships, career, and personal growth.',
    icon: 'FaHashtag',
    benefits: [
      'Understand core numbers',
      'Improve decision-making',
      'Choose auspicious numbers',
      'Enhance relationships',
      'Career guidance'
    ],
    features: [
      '20-page report',
      'Life path analysis',
      'Destiny number insights',
      'Name correction advice',
      'Personalized tips'
    ],
    price: 1999,
    duration: 'Lifetime',
    deliveryTime: '24 hours',
    process: [
      'Submit full name and birthdate',
      'Numerologist calculates core numbers',
      'Analyze number influences',
      'Prepare recommendations',
      'Deliver detailed report'
    ],
    faqs: [
      {
        question: 'Should I change my name based on numerology?',
        answer: 'We provide balanced advice - sometimes minor adjustments are sufficient rather than full name changes.'
      },
      {
        question: 'How do I use my lucky numbers?',
        answer: 'The report will guide you on incorporating lucky numbers into daily life for maximum benefit.'
      }
    ],
    featured: true
  }
];