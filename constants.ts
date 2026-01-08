
import { Project, Experience, Award, JournalEntry } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'quiet-shift',
    title: 'Dalla',
    code: 'GP01',
    date: '2025',
    client: 'Marco Silva',
    image: 'https://framerusercontent.com/images/rDINKmSPnGS9zrLNClOVfXxQ.jpeg'
  },
  {
    id: '2',
    slug: 'lotus-diesel-rain',
    title: 'Lotus',
    code: 'GP02',
    date: '2024',
    client: 'Minh Nguyen',
    image: 'https://framerusercontent.com/images/l0F97ljlGcSaiGIYGCs2d3wRk.jpg'
  },
  {
    id: '3',
    slug: 'echoes-of-concrete',
    title: 'Echoes',
    code: 'GP09',
    date: '2024',
    client: 'Nia Okoye',
    image: 'https://framerusercontent.com/images/cQylW9E4DloDyHvH6mZ97FCDkE.jpeg'
  },
  {
    id: '4',
    slug: 'glass-skin',
    title: 'Glass Skin',
    code: 'GP10',
    date: '2024',
    client: 'Elodie Marchand',
    image: 'https://framerusercontent.com/images/GzJtbzr20p8nphYOmBKDCvYM.jpg'
  },
  {
    id: '5',
    slug: 'blue-hour-bazaar',
    title: 'Blue Hour',
    code: 'TK31',
    date: '2024',
    client: 'Kenji Morita',
    image: 'https://framerusercontent.com/images/hKZ8vSxdL9Y9maD6tu5ij3lRWD4.jpeg'
  },
  {
    id: '6',
    slug: 'utima',
    title: 'Utima',
    code: 'DB54',
    date: '2023',
    client: 'Arjun Das',
    image: 'https://framerusercontent.com/images/dpjuKZG4Fud3MsXjysviAJ6puE.jpeg'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Creative Director',
    company: 'Nike',
    description: 'At Nike, Kaito Ayaka infused a Tokyo-based perspective into global campaigns, merging athletic legacy with modern aesthetics. She focused on culturally relevant storytelling for product launches.',
    year: '2025'
  },
  {
    id: '2',
    role: 'Art Director',
    company: 'Apple',
    description: 'Instrumental in shaping the brand\'s visual identity. She led design projects that focused on minimalist aesthetics and intuitive user experiences.',
    year: '2024'
  },
  {
    id: '3',
    role: 'Senior Designer',
    company: 'Freelance',
    description: 'After a successful period as a freelance designer, Kaito Ayaka cultivated a diverse portfolio and established her reputation for innovative branding and web design.',
    year: '2023'
  }
];

export const AWARDS: Award[] = [
  {
    id: '1',
    organization: 'Webby',
    year: '2025',
    details: ['1x Webby nominee']
  },
  {
    id: '2',
    organization: 'The FWA',
    year: '2025',
    details: ['8x FWA of the Day']
  },
  {
    id: '3',
    organization: 'Awwwards',
    year: '2025',
    details: [
      '1x Studio of the Year Nominee',
      '2x E-commerce of the Year Nominee',
      '9x Site of the Day'
    ]
  },
  {
    id: '4',
    organization: 'CSS Design',
    year: '2025',
    details: ['1x Website of the Year Nominee', '13x Innovation', '13x UX Design']
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: '1',
    title: 'COLOR THEORY',
    date: '2025',
    image: 'https://framerusercontent.com/images/W0KetY6ykgDRiOCbaeuBcXISBG8.jpg',
    slug: 'color-theory'
  },
  {
    id: '2',
    title: 'CONTENT FIRST',
    date: '2025',
    image: 'https://framerusercontent.com/images/GzJtbzr20p8nphYOmBKDCvYM.jpg',
    slug: 'content-first'
  },
  {
    id: '3',
    title: 'MICRO INTERACTIONS',
    date: '2024',
    image: 'https://framerusercontent.com/images/H0868SgvAgiItkfKnWBImKq0LI.jpg',
    slug: 'micro-interactions'
  }
];
