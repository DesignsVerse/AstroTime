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
  metaKeywords: string[];
  featured?: boolean;
  image?: string; // Optional image property for service-specific images
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Janm Patrika Analysis',
    slug: 'janm-patrika-ujjain',
    description: 'Detailed Janm Patrika analysis by Astro Deepak Goutam in Ujjain with 10+ year predictions for life success.',
    longDescription: 'Experience a comprehensive Janm Patrika (birth chart) analysis by Astro Deepak Goutam, the best astrologer in Ujjain. AstroAnk’s premium astrology services in Ujjain provide accurate predictions for career, health, love, and marriage for the next decade. Our Vedic astrology expertise, combined with numerology insights, ensures personalized remedies tailored to your unique chart. Available through AstroAnk and Astro Time, this service is crafted to bring clarity and prosperity to your life journey.',
    icon: 'FaBook',
    benefits: [
      '10+ year life forecast by Astro Deepak Goutam',
      'Career and financial guidance in Ujjain',
      'Marriage and love predictions',
      'Health and wellness insights',
      'Personalized Vedic and numerology remedies'
    ],
    features: [
      '50+ page detailed report',
      'Vimshottari Dasa and transit analysis',
      'Yearly predictions by AstroAnk',
      'Gemstone and mantra recommendations',
      'Exclusive Ujjain-based Vedic remedies'
    ],
    price: 2999,
    duration: '10-year forecast',
    deliveryTime: '5 working days',
    process: [
      'Submit birth details (date, time, place)',
      'Astro Deepak Goutam creates your chart',
      'Analyze planetary and numerology influences',
      'Prepare detailed predictions for Ujjain clients',
      'Deliver PDF report via email'
    ],
    faqs: [
      {
        question: 'What if my birth time is unknown for Janm Patrika in Ujjain?',
        answer: 'Astro Deepak Goutam in Ujjain can work with approximate times or rectify your birth time for accurate Vedic astrology results.'
      },
      {
        question: 'How accurate is AstroAnk’s Janm Patrika analysis?',
        answer: 'With precise birth details, Astro Deepak Goutam’s Vedic astrology and numerology expertise ensures highly accurate predictions.'
      }
    ],
    metaKeywords: [
      'Janm Patrika Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Vedic Astrology Ujjain',
      'Numerology Ujjain'
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Kundli Ghar Tak',
    slug: 'kundli-ghar-tak-ujjain',
    description: 'Premium printed Janm Patrika delivered to your doorstep by Astro Deepak Goutam in Ujjain.',
    longDescription: 'Receive a beautifully printed Janm Patrika (birth chart) with Astro Deepak Goutam’s expert analysis, delivered to your doorstep from Ujjain. AstroAnk’s premium astrology services, also available through Astro Time, provide a detailed 10-year forecast for career, health, love, and marriage. This keepsake, crafted by the best astrologer in Ujjain, includes Vedic and numerology-based remedies, making it perfect for personal use or gifting.',
    icon: 'FaBook',
    benefits: [
      'Premium printed kundli delivered from Ujjain',
      '10-year life forecast by Astro Deepak Goutam',
      'Career and financial insights',
      'Marriage and health predictions',
      'Personalized Vedic remedies'
    ],
    features: [
      '50+ page printed report',
      'Dasa and transit analysis',
      'Yearly predictions by AstroAnk',
      'Gemstone and mantra recommendations',
      'Courier delivery from Ujjain'
    ],
    price: 3499,
    duration: '10-year forecast',
    deliveryTime: '5-7 working days via courier',
    process: [
      'Submit birth details (date, time, place)',
      'Astro Deepak Goutam creates your chart',
      'Analyze planetary influences in Ujjain',
      'Prepare premium printed kundli',
      'Deliver hard copy via courier'
    ],
    faqs: [
      {
        question: 'How is the printed kundli delivered in Ujjain?',
        answer: 'AstroAnk delivers your premium Janm Patrika to your address via courier or post from Ujjain.'
      },
      {
        question: 'Can I gift this kundli from Astro Deepak Goutam?',
        answer: 'Yes, Astro Deepak Goutam’s printed kundli is a perfect keepsake for gifting, crafted with care in Ujjain.'
      }
    ],
    metaKeywords: [
      'Kundli Ghar Tak Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Printed Janm Patrika Ujjain',
      'Best Astrologer in Ujjain'
    ],
    featured: true
  },
  {
    id: '3',
    title: 'Falit Jyotish Consultation',
    slug: 'falit-jyotish-ujjain',
    description: 'Expert predictive astrology by Astro Deepak Goutam in Ujjain for life’s challenges.',
    longDescription: 'Navigate life’s uncertainties with Astro Deepak Goutam’s Falit Jyotish consultation in Ujjain. AstroAnk’s premium Vedic astrology services, also accessible via Astro Time, offer precise predictions for career, relationships, and more. Our best astrologer in Ujjain combines Vedic astrology and numerology for personalized guidance and remedies.',
    icon: 'FaStar',
    benefits: [
      'Accurate predictions by Astro Deepak Goutam',
      'Career and financial advice in Ujjain',
      'Relationship and health insights',
      'Personalized Vedic remedies',
      'Numerology-based solutions'
    ],
    features: [
      '30/60 minute consultation in Hindi/English',
      'Video or audio call with AstroAnk',
      'Follow-up email summary',
      'Priority support for Ujjain clients',
      'Customized remedy suggestions'
    ],
    price: 1999,
    duration: '30/60 minutes',
    deliveryTime: 'Instant booking available',
    process: [
      'Book with Astro Deepak Goutam',
      'Select date/time slot',
      'Confirm booking with payment',
      'Receive Zoom link for consultation',
      'Join session with AstroAnk'
    ],
    faqs: [
      {
        question: 'What should I ask Astro Deepak Goutam during consultation?',
        answer: 'Prepare specific questions about career, relationships, or health for focused guidance from Ujjain’s best astrologer.'
      },
      {
        question: 'Can I reschedule my AstroAnk consultation?',
        answer: 'Yes, AstroAnk allows rescheduling with 24-hour notice, subject to availability.'
      }
    ],
    metaKeywords: [
      'Falit Jyotish Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Vedic Astrology Consultation'
    ],
    featured: true
  },
  {
    id: '4',
    title: 'Gemstone Astrology',
    slug: 'gemstone-astrology-ujjain',
    description: 'Personalized gemstone recommendations by Astro Deepak Goutam in Ujjain for planetary balance.',
    longDescription: 'Enhance your life with Astro Deepak Goutam’s gemstone astrology services in Ujjain. AstroAnk, also available through Astro Time, analyzes your birth chart to recommend gemstones that balance planetary energies and attract prosperity. As the best astrologer in Ujjain, Astro Deepak Goutam provides tailored guidance for health, wealth, and success.',
    icon: 'FaGem',
    benefits: [
      'Balance planetary energies in Ujjain',
      'Improve health and prosperity',
      'Enhance mental clarity with AstroAnk',
      'Attract opportunities with gemstones',
      'Personalized advice by Astro Deepak Goutam'
    ],
    features: [
      'Detailed gemstone report',
      'Planetary and numerology analysis',
      'Wearing instructions by AstroAnk',
      'Authenticity guidance for gemstones',
      '20-page premium report'
    ],
    price: 2499,
    duration: 'Lifetime guidance',
    deliveryTime: '48 hours',
    process: [
      'Submit birth details to AstroAnk',
      'Astro Deepak Goutam analyzes chart',
      'Recommend suitable gemstones',
      'Prepare detailed report in Ujjain',
      'Deliver PDF via email'
    ],
    faqs: [
      {
        question: 'How do I verify gemstone authenticity in Ujjain?',
        answer: 'Astro Deepak Goutam provides certification guidance and testing methods for authentic gemstones.'
      },
      {
        question: 'How soon will I see results with AstroAnk’s gemstones?',
        answer: 'Most clients notice positive changes within 2-3 weeks with Astro Deepak Goutam’s recommendations.'
      }
    ],
    metaKeywords: [
      'Gemstone Astrology Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Vedic Gemstone Recommendations'
    ]
  },
  {
    id: '5',
    title: 'Dosha and Yoga Analysis',
    slug: 'dosha-yoga-ujjain',
    description: 'Identify and remedy doshas with Astro Deepak Goutam’s expertise in Ujjain.',
    longDescription: 'Understand doshas (Manglik, Kaalsarp) and yogas (Raj Yoga) with Astro Deepak Goutam’s premium analysis in Ujjain. AstroAnk’s Vedic astrology services, also via Astro Time, offer remedies to mitigate negative doshas and enhance positive yogas for a prosperous life. Trust the best astrologer in Ujjain for transformative insights.',
    icon: 'FaBalanceScale',
    benefits: [
      'Identify key doshas with AstroAnk',
      'Enhance beneficial yogas in Ujjain',
      'Personalized remedies by Astro Deepak Goutam',
      'Improve life outcomes',
      'Long-term Vedic guidance'
    ],
    features: [
      '25-page detailed report',
      'Dosha-specific remedies by AstroAnk',
      'Yoga enhancement tips',
      'Planetary and numerology analysis',
      'Mantra recommendations from Ujjain'
    ],
    price: 2999,
    duration: 'Lifetime validity',
    deliveryTime: '72 hours',
    process: [
      'Submit birth details to AstroAnk',
      'Astro Deepak Goutam analyzes chart',
      'Identify doshas and yogas',
      'Prepare remedies in Ujjain',
      'Deliver comprehensive report'
    ],
    faqs: [
      {
        question: 'Can Astro Deepak Goutam address multiple doshas?',
        answer: 'Yes, AstroAnk provides holistic remedies for all doshas identified in your chart.'
      },
      {
        question: 'Are doshas removable with AstroAnk’s services?',
        answer: 'Astro Deepak Goutam’s remedies significantly reduce dosha effects for a balanced life.'
      }
    ],
    metaKeywords: [
      'Dosha Yoga Analysis Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Vedic Astrology Ujjain'
    ],
    featured: true
  },
  {
    id: '6',
    title: 'Vastu Consultation',
    slug: 'vastu-ujjain',
    description: 'Optimize your space with Astro Deepak Goutam’s Vastu expertise in Ujjain.',
    longDescription: 'Align your living or working space with Astro Deepak Goutam’s premium Vastu consultation in Ujjain. AstroAnk, also accessible via Astro Time, provides expert Vastu Shastra recommendations to enhance prosperity, health, and harmony. Trust the best astrologer in Ujjain for transformative Vastu solutions.',
    icon: 'FaHome',
    benefits: [
      'Harmonize spaces in Ujjain',
      'Improve prosperity with AstroAnk',
      'Enhance relationships and health',
      'Personalized Vastu advice',
      'Guidance by Astro Deepak Goutam'
    ],
    features: [
      'Custom Vastu layout suggestions',
      '30-minute consultation with AstroAnk',
      'Detailed PDF report from Ujjain',
      'Follow-up support',
      'Non-invasive solutions for rentals'
    ],
    price: 3499,
    duration: 'Lifetime guidance',
    deliveryTime: '5 working days',
    process: [
      'Submit property details to AstroAnk',
      'Astro Deepak Goutam analyzes layout',
      'Prepare Vastu recommendations',
      'Conduct video consultation',
      'Deliver detailed report'
    ],
    faqs: [
      {
        question: 'Can Astro Deepak Goutam provide Vastu for rented homes?',
        answer: 'Yes, AstroAnk offers non-invasive Vastu solutions perfect for rented spaces in Ujjain.'
      },
      {
        question: 'How soon will I see Vastu results with AstroAnk?',
        answer: 'Most clients notice positive changes within 3-4 weeks with Astro Deepak Goutam’s guidance.'
      }
    ],
    metaKeywords: [
      'Vastu Consultation Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Vastu Consultant Ujjain',
      'Vedic Vastu Ujjain'
    ]
  },
  {
    id: '7',
    title: 'Palmistry Analysis',
    slug: 'palmistry-ujjain',
    description: 'Unlock destiny insights with Astro Deepak Goutam’s palmistry in Ujjain.',
    longDescription: 'Discover your life’s path with Astro Deepak Goutam’s expert palmistry analysis in Ujjain. AstroAnk’s premium services, also via Astro Time, interpret your hand lines to provide insights into career, relationships, and destiny. Trust the best astrologer in Ujjain for personalized palmistry guidance.',
    icon: 'FaHandHoldingHeart',
    benefits: [
      'Understand your destiny in Ujjain',
      'Career and relationship insights',
      'Personalized palmistry advice',
      'Enhance life decisions with AstroAnk',
      'Guidance by Astro Deepak Goutam'
    ],
    features: [
      'Detailed palmistry report',
      '30-minute consultation with AstroAnk',
      'Line-by-line analysis',
      'Follow-up support from Ujjain',
      '15-page PDF report'
    ],
    price: 2499,
    duration: 'Lifetime guidance',
    deliveryTime: '5 working days',
    process: [
      'Submit clear hand photos to AstroAnk',
      'Astro Deepak Goutam analyzes lines',
      'Prepare detailed palmistry report',
      'Conduct video consultation',
      'Deliver report via email'
    ],
    faqs: [
      {
        question: 'Which hand should I send for AstroAnk’s palmistry?',
        answer: 'Astro Deepak Goutam recommends right hand for men, left for women, or both for best results.'
      },
      {
        question: 'How accurate is palmistry by Astro Deepak Goutam?',
        answer: 'With clear hand photos, AstroAnk’s palmistry analysis in Ujjain is highly accurate.'
      }
    ],
    metaKeywords: [
      'Palmistry Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Palmistry Analysis Ujjain'
    ]
  },
  {
    id: '8',
    title: 'Prashn Kundli',
    slug: 'prashn-kundli-ujjain',
    description: 'Instant answers with Astro Deepak Goutam’s Prashn Kundli in Ujjain.',
    longDescription: 'Get immediate answers to your questions with Astro Deepak Goutam’s Prashn Kundli (horary astrology) in Ujjain. AstroAnk’s premium astrology services, also via Astro Time, cast a chart based on your question’s timing for precise insights. Perfect for career, love, or decision-making queries.',
    icon: 'FaQuestionCircle',
    benefits: [
      'Quick answers without birth details',
      'Career and love insights by AstroAnk',
      'Decision-making support in Ujjain',
      'Personalized remedies',
      'Guidance by Astro Deepak Goutam'
    ],
    features: [
      'Instant chart casting by AstroAnk',
      '10-page detailed answer report',
      'Remedy suggestions from Ujjain',
      'Email delivery within 24 hours',
      'Follow-up support'
    ],
    price: 1499,
    duration: 'Instant access',
    deliveryTime: '24 hours',
    process: [
      'Submit your question to AstroAnk',
      'Astro Deepak Goutam casts Prashn Kundli',
      'Analyze planetary positions',
      'Prepare answer with remedies',
      'Deliver report via email'
    ],
    faqs: [
      {
        question: 'How specific should my question be for AstroAnk’s Prashn Kundli?',
        answer: 'Astro Deepak Goutam recommends specific questions for the most accurate answers in Ujjain.'
      },
      {
        question: 'Can I ask multiple questions with AstroAnk?',
        answer: 'Each Prashn Kundli by Astro Deepak Goutam focuses on one primary question for maximum clarity.'
      }
    ],
    metaKeywords: [
      'Prashn Kundli Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Horary Astrology Ujjain'
    ]
  },
  {
    id: '9',
    title: 'Kundli Milan',
    slug: 'kundli-milan-ujjain',
    description: 'Ensure marital harmony with Astro Deepak Goutam’s Kundli Milan in Ujjain.',
    longDescription: 'Astro Deepak Goutam’s premium Kundli Milan service in Ujjain, offered by AstroAnk and Astro Time, analyzes 36 gunas for marital compatibility. Ensure emotional, intellectual, and spiritual harmony with remedies for Manglik, Bhakoot, or Nadi dosha. Trust the best astrologer in Ujjain for a successful marriage.',
    icon: 'FaHandHoldingHeart',
    benefits: [
      '36-guna compatibility analysis by AstroAnk',
      'Manglik dosha remedies in Ujjain',
      'Emotional and financial harmony',
      'Personalized marriage advice',
      'Guidance by Astro Deepak Goutam'
    ],
    features: [
      'Detailed point-by-point matching',
      'Remedies for doshas by AstroAnk',
      'Compatibility beyond gunas',
      '25+ page report from Ujjain',
      'Follow-up consultation'
    ],
    price: 2999,
    duration: 'Lifetime validity',
    deliveryTime: '2 days',
    process: [
      'Submit birth details of both partners',
      'Astro Deepak Goutam analyzes compatibility',
      'Identify strengths and challenges',
      'Prepare detailed report with remedies',
      'Deliver PDF via email'
    ],
    faqs: [
      {
        question: 'What if we have low guna matching in Ujjain?',
        answer: 'Astro Deepak Goutam provides remedies to strengthen weak areas for marital harmony.'
      },
      {
        question: 'Is AstroAnk’s Kundli Milan suitable for same-sex couples?',
        answer: 'Yes, Astro Deepak Goutam’s compatibility analysis is universal across genders.'
      }
    ],
    metaKeywords: [
      'Kundli Milan Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Marriage Compatibility Ujjain'
    ],
    featured: true
  },
  {
    id: '10',
    title: 'Krishnamurti Paddhati',
    slug: 'kp-astrology-ujjain',
    description: 'Precise predictions with Astro Deepak Goutam’s KP astrology in Ujjain.',
    longDescription: 'Experience Astro Deepak Goutam’s Krishnamurti Paddhati (KP) astrology in Ujjain for precise event timing. AstroAnk’s premium services, also via Astro Time, use stellar and sub-lord techniques for accurate predictions on career, marriage, and more. Trust the best astrologer in Ujjain for transformative insights.',
    icon: 'FaClock',
    benefits: [
      'Accurate event timing by AstroAnk',
      'Career and marriage predictions',
      'Personalized remedies in Ujjain',
      'Numerology-based insights',
      'Guidance by Astro Deepak Goutam'
    ],
    features: [
      'Sub-lord and cusp analysis',
      '20-page detailed report',
      'Remedy suggestions by AstroAnk',
      'Event timing predictions',
      'Consultation option in Ujjain'
    ],
    price: 2999,
    duration: '3-month forecast',
    deliveryTime: '72 hours',
    process: [
      'Submit birth details and questions',
      'Astro Deepak Goutam prepares KP chart',
      'Analyze sub-lords and cusps',
      'Prepare detailed predictions',
      'Deliver comprehensive report'
    ],
    faqs: [
      {
        question: 'How is KP astrology different at AstroAnk?',
        answer: 'Astro Deepak Goutam’s KP astrology in Ujjain uses stellar subdivisions for precise event timing.'
      },
      {
        question: 'Can AstroAnk predict exact dates with KP?',
        answer: 'Astro Deepak Goutam’s KP analysis predicts time periods within weeks/months for key events.'
      }
    ],
    metaKeywords: [
      'KP Astrology Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Krishnamurti Paddhati Ujjain'
    ]
  },
  {
    id: '11',
    title: 'Sadesati Report',
    slug: 'sadesati-ujjain',
    description: 'Mitigate Saturn’s Sadesati with Astro Deepak Goutam in Ujjain.',
    longDescription: 'Understand Saturn’s 7.5-year Sadesati cycle with Astro Deepak Goutam’s expert analysis in Ujjain. AstroAnk’s premium astrology services, also via Astro Time, provide a detailed report on Sadesati phases and remedies to reduce challenges and enhance benefits. Trust the best astrologer in Ujjain.',
    icon: 'FaMoon',
    benefits: [
      'Understand Sadesati phases with AstroAnk',
      'Reduce negative impacts in Ujjain',
      'Enhance positive outcomes',
      'Personalized remedies by Astro Deepak Goutam',
      'Long-term Vedic guidance'
    ],
    features: [
      'Detailed phase report by AstroAnk',
      'Mantra and charity remedies',
      '15-page analysis from Ujjain',
      'Gemstone suggestions',
      'Follow-up support'
    ],
    price: 1999,
    duration: 'Lifetime',
    deliveryTime: '48 hours',
    process: [
      'Submit birth details to AstroAnk',
      'Astro Deepak Goutam analyzes Saturn’s position',
      'Identify current phase',
      'Prepare phase-specific remedies',
      'Deliver detailed report'
    ],
    faqs: [
      {
        question: 'Is Sadesati always negative with AstroAnk?',
        answer: 'Astro Deepak Goutam’s analysis in Ujjain shows each phase’s effects, with remedies to balance challenges.'
      },
      {
        question: 'What if I’m not in Sadesati per AstroAnk?',
        answer: 'Astro Deepak Goutam will analyze Saturn’s general influence in your chart for comprehensive guidance.'
      }
    ],
    metaKeywords: [
      'Sadesati Report Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Saturn Sadesati Ujjain'
    ]
  },
  {
    id: '12',
    title: 'Manglik Dosha Report',
    slug: 'manglik-dosha-ujjain',
    description: 'Neutralize Manglik dosha with Astro Deepak Goutam in Ujjain.',
    longDescription: 'Astro Deepak Goutam’s Manglik dosha analysis in Ujjain, offered by AstroAnk and Astro Time, examines Mars-related doshas affecting marriage. Our premium report provides specific remedies to ensure marital harmony. Trust the best astrologer in Ujjain for expert guidance.',
    icon: 'FaFire',
    benefits: [
      'Identify Manglik dosha with AstroAnk',
      'Marital harmony solutions in Ujjain',
      'Personalized remedies by Astro Deepak Goutam',
      'Compatibility guidance',
      'Long-term benefits'
    ],
    features: [
      'Detailed dosha analysis',
      'Remedy recommendations by AstroAnk',
      '10-page report from Ujjain',
      'Mantra and puja suggestions',
      'Consultation option'
    ],
    price: 1499,
    duration: 'Lifetime',
    deliveryTime: '24 hours',
    process: [
      'Submit birth details to AstroAnk',
      'Astro Deepak Goutam analyzes Mars position',
      'Determine dosha severity',
      'Prepare customized remedies',
      'Deliver comprehensive report'
    ],
    faqs: [
      {
        question: 'Can Astro Deepak Goutam cancel Manglik dosha?',
        answer: 'AstroAnk’s remedies by Astro Deepak Goutam in Ujjain significantly reduce Manglik dosha effects.'
      },
      {
        question: 'What if only one partner is Manglik per AstroAnk?',
        answer: 'Astro Deepak Goutam provides remedies to balance energies for harmonious relationships.'
      }
    ],
    metaKeywords: [
      'Manglik Dosha Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Manglik Remedies Ujjain'
    ]
  },
  {
    id: '13',
    title: 'Kaalsarp Dosha Analysis',
    slug: 'kaalsarp-dosha-ujjain',
    description: 'Overcome Kaalsarp dosha with Astro Deepak Goutam in Ujjain.',
    longDescription: 'Astro Deepak Goutam’s Kaalsarp dosha analysis in Ujjain, offered by AstroAnk and Astro Time, identifies the type of Kaalsarp dosha in your chart and provides remedies to overcome obstacles. As the best astrologer in Ujjain, Astro Deepak Goutam ensures spiritual and material success.',
    icon: 'FaGlobeAsia',
    benefits: [
      'Identify Kaalsarp dosha with AstroAnk',
      'Overcome obstacles in Ujjain',
      'Personalized remedies by Astro Deepak Goutam',
      'Enhance prosperity and spirituality',
      'Long-term Vedic guidance'
    ],
    features: [
      'Detailed dosha report by AstroAnk',
      'Puja and mantra remedies',
      '15-page analysis from Ujjain',
      'Follow-up guidance',
      'Consultation option'
    ],
    price: 2499,
    duration: 'Lifetime',
    deliveryTime: '48 hours',
    process: [
      'Submit birth details to AstroAnk',
      'Astro Deepak Goutam analyzes planets',
      'Identify Kaalsarp type',
      'Prepare specific remedies',
      'Deliver detailed report'
    ],
    faqs: [
      {
        question: 'How severe is my Kaalsarp dosha per AstroAnk?',
        answer: 'Astro Deepak Goutam’s analysis in Ujjain details the type and strength of your dosha.'
      },
      {
        question: 'Can AstroAnk remove Kaalsarp dosha?',
        answer: 'Astro Deepak Goutam’s remedies significantly reduce Kaalsarp dosha’s effects for success.'
      }
    ],
    metaKeywords: [
      'Kaalsarp Dosha Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Kaalsarp Remedies Ujjain'
    ]
  },
  {
    id: '14',
    title: 'Numerology Analysis',
    slug: 'numerology-ujjain',
    description: 'Unlock your destiny with Astro Deepak Goutam’s numerology in Ujjain.',
    longDescription: 'Discover how numbers shape your life with Astro Deepak Goutam’s premium numerology analysis in Ujjain. AstroAnk, also via Astro Time, provides insights into your life path, destiny number, and success strategies. Trust the best astrologer in Ujjain for transformative numerology guidance.',
    icon: 'FaHashtag',
    benefits: [
      'Understand core numbers with AstroAnk',
      'Improve decision-making in Ujjain',
      'Choose auspicious numbers',
      'Enhance relationships and career',
      'Guidance by Astro Deepak Goutam'
    ],
    features: [
      '20-page numerology report',
      'Life path and destiny number analysis',
      'Name correction advice by AstroAnk',
      'Personalized tips from Ujjain',
      'Follow-up consultation'
    ],
    price: 2999,
    duration: 'Lifetime',
    deliveryTime: '24 hours',
    process: [
      'Submit full name and birthdate to AstroAnk',
      'Astro Deepak Goutam calculates core numbers',
      'Analyze number influences',
      'Prepare recommendations in Ujjain',
      'Deliver detailed report'
    ],
    faqs: [
      {
        question: 'Should I change my name per AstroAnk’s numerology?',
        answer: 'Astro Deepak Goutam provides balanced advice for name corrections in Ujjain.'
      },
      {
        question: 'How do I use lucky numbers with AstroAnk?',
        answer: 'Astro Deepak Goutam’s report guides you on incorporating lucky numbers for success.'
      }
    ],
    metaKeywords: [
      'Numerology Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Numerology Analysis Ujjain'
    ],
    featured: true
  },
  {
    id: '15',
    title: 'Shubh Muhurat',
    slug: 'shubh-muhurat-ujjain',
    description: 'Find auspicious timings with Astro Deepak Goutam in Ujjain.',
    longDescription: 'Ensure success for weddings, business openings, or other events with Astro Deepak Goutam’s Shubh Muhurat service in Ujjain. AstroAnk’s premium astrology services, also via Astro Time, analyze planetary positions for the perfect timing. Trust the best astrologer in Ujjain for auspicious results.',
    icon: 'FaClock',
    benefits: [
      'Success in events with AstroAnk',
      'Avoid negative influences in Ujjain',
      'Personalized muhurat by Astro Deepak Goutam',
      'Vedic astrology expertise',
      'Peace of mind for occasions'
    ],
    features: [
      'Personalized muhurat calculation',
      'Covers marriage, griha pravesh, and more',
      'Detailed report with do’s & don’ts',
      'Remedy suggestions by AstroAnk',
      'Consultation option in Ujjain'
    ],
    price: 2499,
    duration: 'Lifetime',
    deliveryTime: '24 hours',
    process: [
      'Submit event details to AstroAnk',
      'Astro Deepak Goutam analyzes panchang',
      'Select auspicious muhurat',
      'Prepare detailed report in Ujjain',
      'Deliver via email or WhatsApp'
    ],
    faqs: [
      {
        question: 'Which events does AstroAnk cover for Shubh Muhurat?',
        answer: 'Astro Deepak Goutam provides muhurat for marriage, griha pravesh, business, and more in Ujjain.'
      },
      {
        question: 'What if no ideal muhurat is available per AstroAnk?',
        answer: 'Astro Deepak Goutam suggests the best option with remedies to minimize negative effects.'
      }
    ],
    metaKeywords: [
      'Shubh Muhurat Ujjain',
      'Astro Deepak Goutam',
      'Astrology Ujjain',
      'AstroAnk',
      'Astro Time',
      'Best Astrologer in Ujjain',
      'Auspicious Timing Ujjain'
    ],
    featured: true
  }
];