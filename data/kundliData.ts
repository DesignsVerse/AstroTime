export type KundliDetails = {
  name: string;
  image: string;
  description: string;
  birthPlace: string;
  birthTime: string;
  birthDate: string;
  specialTraits: string[];
};

export const kundliData: Record<string, KundliDetails> = {
  ram: {
    name: 'Lord Ram',
    image: '/ram/kundali.jpeg',
    description: 'Maryada Purushottam Ram, the seventh avatar of Vishnu, known for his righteousness and virtue.',
    birthPlace: 'Ayodhya',
    birthTime: '12:00 PM',
    birthDate: 'Chaitra Shukla Navami',
    specialTraits: [
      'Embodiment of Dharma',
      'Ideal King',
      'Virtuous and Compassionate',
      'Defeated Ravan in battle',
    ],
  },
  ravan: {
    name: 'Ravan',
    image: '/ram/kundali.jpeg',
    description: 'Ravan, the king of Lanka, a great scholar and devotee of Shiva, known for his intellect and power.',
    birthPlace: 'Lanka',
    birthTime: '6:00 AM',
    birthDate: 'Unknown (Treta Yuga)',
    specialTraits: [
      'Master of 10 heads (Dashanana)',
      'Great Scholar',
      'Devotee of Shiva',
      'Powerful King',
    ],
  },
}; 