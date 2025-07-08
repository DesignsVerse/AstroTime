export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  categoryColor: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  relatedPosts?: number[];
  tags?: string[];
  featured?: boolean;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    slug: "understanding-your-birth-chart",
    title: "Understanding Your Birth Chart: A Cosmic Blueprint",
    date: "Jul 27, 2023",
    category: "Birth Chart",
    categoryColor: "#800000",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    excerpt: "A comprehensive guide to interpreting your natal chart and understanding how planetary positions influence your life path.",
    content: `
      <h2>The Cosmic Blueprint of Your Life</h2>
      <p>Your birth chart, also known as a natal chart, is a snapshot of the sky at the exact moment you were born. It reveals the positions of the planets, the Sun, and the Moon in relation to the 12 houses and zodiac signs.</p>
      
      <h3>Key Components of a Birth Chart</h3>
      <ul>
        <li><strong>Planets:</strong> Each represents different aspects of your personality and life</li>
        <li><strong>Zodiac Signs:</strong> The 12 signs modify how planetary energies express themselves</li>
        <li><strong>Houses:</strong> The 12 areas of life where planetary energies manifest</li>
        <li><strong>Aspects:</strong> Angular relationships between planets that create harmony or tension</li>
      </ul>
      
      <figure class="image-with-caption">
        <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1611&q=80" alt="Cosmic sky with stars" />
        <figcaption>The cosmic sky at your moment of birth holds the keys to your personality and life path</figcaption>
      </figure>
      
      <h2>How to Read Your Chart</h2>
      <p>Begin by identifying your "Big Three" - your Sun, Moon, and Rising signs. These form the foundation of your astrological profile...</p>
    `,
    author: {
      name: "Dr. Celeste Orion",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Master astrologer with 20 years of experience in natal chart interpretation"
    },
    tags: ["natal chart", "zodiac", "planets", "astrology basics"],
    featured: true,
    relatedPosts: [2, 3]
  },
  {
    id: 2,
    slug: "power-of-crystals-in-astrology",
    title: "The Power of Crystals in Astrology: Amplify Your Cosmic Energy",
    date: "Jul 25, 2023",
    category: "Crystals",
    categoryColor: "#4169E1",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    excerpt: "Discover how different crystals can enhance your astrological practice and amplify your spiritual energy.",
    content: `<p>Detailed content for crystals article...</p>`,
    author: {
      name: "Luna Starlight",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Crystal healing expert and astrological practitioner"
    },
    tags: ["crystals", "healing", "energy work"],
    relatedPosts: [1, 4]
  },
  // Add more posts with complete data
];