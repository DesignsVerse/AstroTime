export const blogData = [
  {
    id: 1,
    title: "The Complete Guide to Astrology",
    excerpt: "From ancient origins to modern interpretations - everything you need to understand astrological practice.",
    content: {
      sections: [
        {
          heading: "Babylonian Beginnings",
          description: "Astrology originated in Mesopotamia around 1800 BCE. Babylonian priests recorded celestial patterns on clay tablets, creating the first astrological systems that correlated planetary movements with earthly events."
        },
        {
          heading: "The Greek Synthesis",
          description: "Hellenistic astrologers in the 4th century BCE combined Babylonian astronomy with Egyptian temple wisdom. Ptolemy's Tetrabiblos (2nd century CE) became the foundation text for Western astrology."
        },
        {
          heading: "The Zodiac Wheel",
          description: "The ecliptic was divided into 12 equal 30° segments around 500 BCE. Each sign represents distinct archetypal energies: Aries (initiation), Taurus (stability), Gemini (communication) through Pisces (transcendence)."
        },
        {
          heading: "Planetary Symbolism",
          description: "In traditional astrology: Sun (self), Moon (emotions), Mercury (mind), Venus (values), Mars (action), Jupiter (expansion), Saturn (structure). Modern additions: Uranus (innovation), Neptune (intuition), Pluto (transformation)."
        }
      ],
      lists: [
        {
          title: "Major Astrological Traditions",
          items: [
            "Western/Tropical (Season-based)",
            "Vedic/Sidereal (Star-based)",
            "Chinese (Elemental animals)",
            "Mayan (Sacred calendar)",
            "Celtic (Tree zodiac)"
          ]
        },
        {
          title: "Birth Chart Components",
          items: [
            "Sun Sign: Ego & purpose",
            "Moon Sign: Emotional needs",
            "Ascendant: Physical appearance",
            "Houses: Life areas",
            "Aspects: Planetary angles",
            "Nodes: Karmic path"
          ]
        }
      ]
    },
    category: "Astrology Fundamentals",
    categoryColor: "#800000",
    tags: ["history", "zodiac", "planets", "chart-reading"],
    image: "/hero/1.png",
    slug: "complete-astrology-guide",
    featured: true,
    readTime: "10 min read",
    date: "July 1, 2024",
    author: {
      name: "Dr. Arjun Kapoor",
      avatar: "/hero/2.png",
      bio: "Professor of Comparative Cosmology at Delhi University. Author of 7 books on astrological history and practice."
    }
  },
  {
    id: 2,
    title: "Understanding Your Birth Chart",
    excerpt: "Learn how to read and interpret your natal chart to discover your true cosmic blueprint and life purpose.",
    content: {
      sections: [
        {
          heading: "What is a Birth Chart?",
          description: "Your birth chart is a snapshot of the sky at the exact moment you were born. It shows the positions of all planets, the Sun, Moon, and other celestial bodies in relation to the zodiac signs and houses."
        },
        {
          heading: "The Big Three",
          description: "Your Sun sign represents your core identity, Moon sign shows your emotional nature, and Ascendant reveals how you present yourself to the world. These three form the foundation of your personality."
        },
        {
          heading: "The Twelve Houses",
          description: "Each house represents a different area of life: 1st (self), 2nd (values), 3rd (communication), 4th (home), 5th (creativity), 6th (work), 7th (relationships), 8th (transformation), 9th (philosophy), 10th (career), 11th (friends), 12th (spirituality)."
        },
        {
          heading: "Planetary Aspects",
          description: "Aspects are the angles between planets that create harmonious or challenging energies. Conjunctions (0°), sextiles (60°), squares (90°), trines (120°), and oppositions (180°) each have unique meanings."
        }
      ],
      lists: [
        {
          title: "Chart Reading Steps",
          items: [
            "Identify your Sun, Moon, and Ascendant",
            "Note the house placements of planets",
            "Look for stelliums (3+ planets in one sign)",
            "Check for aspect patterns",
            "Consider the elements and modalities",
            "Read the North and South Nodes"
          ]
        },
        {
          title: "Common Chart Patterns",
          items: [
            "Grand Trine: Natural talent triangle",
            "T-Square: Dynamic tension pattern",
            "Yod: Finger of God configuration",
            "Stellium: Multiple planets in one sign",
            "Empty houses: Areas of life to develop"
          ]
        }
      ]
    },
    category: "Chart Reading",
    categoryColor: "#4A90E2",
    tags: ["birth-chart", "natal-chart", "houses", "aspects"],
    image: "/hero/3.png",
    slug: "understanding-birth-chart",
    featured: true,
    readTime: "8 min read",
    date: "July 15, 2024",
    author: {
      name: "Priya Sharma",
      avatar: "/hero/4.png",
      bio: "Certified Vedic Astrologer with 15 years of experience. Specializes in birth chart analysis and relationship compatibility."
    }
  },
  {
    id: 3,
    title: "Planetary Transits and Their Impact",
    excerpt: "Discover how current planetary movements affect your daily life and how to work with these cosmic energies.",
    content: {
      sections: [
        {
          heading: "What Are Transits?",
          description: "Transits occur when current planetary positions form aspects to planets in your birth chart. These create temporary influences that can trigger events, emotions, or opportunities in your life."
        },
        {
          heading: "Major Transit Periods",
          description: "Saturn returns (ages 29, 58, 87) bring maturity and responsibility. Jupiter returns (every 12 years) bring expansion and opportunity. Uranus opposition (age 42) brings midlife awakening and change."
        },
        {
          heading: "Retrograde Planets",
          description: "When planets appear to move backward, they create internal focus and review periods. Mercury retrograde affects communication, Venus retrograde affects relationships, and Mars retrograde affects action and energy."
        },
        {
          heading: "Working With Transits",
          description: "Transits don't control your life - they provide opportunities for growth. Understanding upcoming transits helps you prepare and make conscious choices rather than reacting unconsciously."
        }
      ],
      lists: [
        {
          title: "Key Transit Indicators",
          items: [
            "Planet transiting your Sun sign",
            "Transits to your Ascendant",
            "Planets entering new houses",
            "Aspects to natal planets",
            "Eclipses in your chart",
            "Saturn and Jupiter returns"
          ]
        },
        {
          title: "Transit Preparation",
          items: [
            "Check your birth chart for sensitive points",
            "Note upcoming planetary movements",
            "Set intentions before major transits",
            "Use retrograde periods for review",
            "Work with the energy, not against it",
            "Keep a transit journal"
          ]
        }
      ]
    },
    category: "Transits & Timing",
    categoryColor: "#FF6B6B",
    tags: ["transits", "timing", "retrograde", "planetary-movement"],
    image: "/hero/5.png",
    slug: "planetary-transits-impact",
    featured: false,
    readTime: "12 min read",
    date: "August 1, 2024",
    author: {
      name: "Rajesh Kumar",
      avatar: "/hero/6.png",
      bio: "Master Astrologer specializing in predictive astrology and transit analysis. Author of 'Cosmic Timing'."
    }
  }
];