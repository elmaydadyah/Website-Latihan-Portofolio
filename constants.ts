
import { Project, Experience, Award, JournalEntry } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'pwd',
    title: 'Basic Web Programming',
    code: 'Website',
    date: '2023',
    client: 'CinéMystique',
    image: '/images/pwd.png',
    description: 'The CinéMystique website was developed as an online movie ticket booking platform to help users browse available movies, select showtimes, choose seats, and complete ticket purchases in a simple and efficient manner.',
    scope: 'The scope of this project includes the design and development of a static movie ticket booking website using HTML, CSS, and basic JavaScript. The system simulates the booking flow from movie selection to booking information display, focusing on front-end fundamentals, user flow, and basic usability.',
    collaborators: ['Ahmad Gusnaedi', 'Salsabil Amatin Fauzia'],
    extraImages: ['/images/pwd.png']
  },
  {
    id: '2',
    slug: 'lotus-diesel-rain',
    title: 'Advanced Web Programming',
    code: 'Website',
    date: '2024',
    client: 'Kosan Ibu Endi',
    image: '/images/lotus.png',
    description: 'This website was developed as an online boarding house rental system to facilitate room listing, booking, and payment record management. Designed with a simple and user-friendly interface, the system can be easily used by both boarding house owners and tenants without requiring technical expertise.',
    scope: 'The scope of this project covers the development of a web-based boarding house rental system using HTML, CSS, PHP, and MySQL, featuring user authentication, room listings, booking forms, and an admin dashboard for managing tenant, room, and payment data.',
    collaborators: ['Ahmad Gusnaedi', 'Puja Vita Maharani'],
    extraImages: ['/images/lotus.png']
  },
  {
    id: '3',
    slug: 'echoes-of-concrete',
    title: 'Internet of Things',
    code: 'Basics',
    date: '2024',
    client: 'Smart Trash Bin 1.0',
    image: '/images/echoes.png',
    description: 'Smart Trash Bin 1.0 is an IoT-based automatic trash bin that uses an ultrasonic sensor to detect nearby objects and automatically open the lid. The system is designed as a prototype to demonstrate the application of embedded systems and automation in smart waste management.',
    scope: 'The scope of this project includes the development of an Arduino-based system using an HC-SR04 ultrasonic sensor, a servo motor for lid control, and LED indicators to display bin status. The project was completed collaboratively, covering hardware design, programming, and system testing to ensure proper functionality.',
    collaborators: ['Atha Zainum mutaqqin', 'Ilham Avin Pratama', 'Muhammad Arkaan Zain', 'Rifqi Yovila Candra'],
    extraImages: ['/images/echoes.png']
  },
  {
    id: '4',
    slug: 'glass-skin',
    title: 'Internet of Things 2',
    code: 'Connect Telegram',
    date: '2025',
    client: 'Smart Trash Bin 2.0',
    image: '/images/glass-skin.png',
    description: 'Smart Trash Bin 2.0 is an IoT-based project designed to automate trash bin operations with remote control and real-time notifications. The system allows automatic lid control and sends alerts via Telegram when the bin is full or when hazardous gas is detected.',
    scope: 'The scope of this project includes the development of an ESP32-based system using ultrasonic sensors and a servo motor for lid control, with real-time monitoring and notifications integrated through Blynk and Telegram. I served as the team leader, contributing to system flow design and ensuring sensor accuracy and system stability through collaborative development and testing.',
    collaborators: ['Atha Zainum mutaqqin', 'Ilham Avin Pratama', 'Muhammad Arkaan Zain', 'Rifqi Yovila Candra'],
    extraImages: ['/images/glass-skin.png']
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'UI Designer (Intern)',
    company: 'Kretya Studio',
    description: 'Developed user-centric interfaces and refined user experiences for various digital products, collaborating with the design team to maintain high visual and functional standards.',
    year: 'Oct 2025 - Jan 2026'
  }
];

export const ACADEMIC_DATA: Award[] = [
  {
    id: '1',
    organization: 'SMAN 2 Cileungsi',
    year: '2018-2021',
    details: ['Natural Sciences']
  },
  {
    id: '2',
    organization: 'Bina Insani University',
    year: '2022-Present',
    details: ['Informatics Engineering']
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
    title: 'SMART TRASH BIN 1.0',
    date: '2025',
    image: '/images/journal-smart-trash-bin.png',
    slug: 'content-first',
    link: 'https://drive.google.com/file/d/1cZ8GvhlEk4l2dVoehSbKeHn_dADQoOyw/view'
  },
  {
    id: '3',
    title: 'MICRO INTERACTIONS',
    date: '2024',
    image: 'https://framerusercontent.com/images/H0868SgvAgiItkfKnWBImKq0LI.jpg',
    slug: 'micro-interactions'
  }
];
