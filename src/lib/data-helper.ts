import { ProjectItem, WorkExperienceItem } from '@/@types';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { FileText, Linkedin } from 'lucide-react';

// About Section Data
export const ABOUT = {
  description: `Click on the links for some fun enjoy wink wink`,
  experience: '5 Years',
  city: 'Berlin',
  country: 'Germany 🇩🇪',
  designation: 'Senior Developer',
  socialLinks: [
    {
      href: 'https://www.youtube.com/watch?v=GPXkjtpGCFI',
      text: 'LinkedIn',
      icon: Linkedin,
    },
    {
      href: 'https://www.youtube.com/watch?v=I8zF7WSzuiE',
      text: 'GitHub',
      icon: GitHubLogoIcon,
    },
    {
      href: 'https://www.youtube.com/watch?v=KbXmr6v0wh0',
      text: 'Resume',
      icon: FileText,
    },
  ],
};

// Project List
export const ProjectList: ProjectItem[] = [
  {
    name: 'SocialConnect',
    description:
      'SocialConnect is an innovative social media platform designed to bring people closer together. Users can create personal profiles, follow other users, and stay updated with their activities. The platform allows users to share posts, conduct polls, express opinions, and engage in discussions on various topics.',
    url: 'https://www.youtube.com/shorts/sgg3mbR1jIs',
    video: 'https://www.youtube.com/shorts/sgg3mbR1jIs',
    techStack: [
      'React',
      'Next.js',
      'NextSeo',
      'Redux',
      'Redux-toolkit',
      'React-Query',
      'TypeScript',
      'TailwindCSS',
      'Shadcn',
      'NestJs',
      'Prisma',
      'PostgreSQL',
    ],
  },
  {
    name: 'FoodieApp',
    description:
      'FoodieApp revolutionizes restaurant management with an innovative solution. Customers can order food online effortlessly by scanning a QR code or place an order for delivery. Elevate the dining experience with ease and convenience!',
    url: 'https://www.youtube.com/watch?v=X00djifIj9s',
    video: 'https://www.youtube.com/watch?v=X00djifIj9s',
    techStack: [
      'React',
      'Next.js',
      'NextSeo',
      'TanStack',
      'TypeScript',
      'TailwindCSS',
      'Shadcn',
      'Trpc',
      'Prisma',
      'PostgreSQL',
    ],
  },
  {
    name: 'EduPrep',
    description:
      'EduPrep is an educational website tailored for SAT exam preparation, providing a comprehensive platform to enhance learning and maximize student potential. With a robust notification system for updates and deadlines, along with personalized email reminders, students can stay on track with their study schedules and be well-prepared for the exam.',
    url: 'https://www.youtube.com/watch?v=F2YpXC1itEE',
    video: 'https://www.youtube.com/watch?v=F2YpXC1itEE',
    techStack: [
      'React',
      'Next.js',
      'Next-Auth',
      'Redux',
      'Codegen',
      'TypeScript',
      'TailwindCSS',
      'Flowbite-React',
      'NestJs',
      'GraphQL',
      'Apollo',
      'Prisma',
    ],
  },
  {
    name: 'ARtShare',
    description:
      'ARtShare allows users to share Augmented Reality experiences with the world. Users can create drawings, upload them, and showcase them to friends and other users in the Explore tab. Each drawing is geotagged on maps, allowing others to pinpoint its location.',
    url: 'https://www.youtube.com/watch?v=F2YpXC1itEE',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    techStack: [
      'Flutter',
      'Unity',
      'ARCore',
      'ARKit',
      'Firebase',
      'Google Maps API',
      'Geocoding API',
      'Geolocation API',
    ],
  },
];

// Companies List

export const workExperiences: WorkExperienceItem[] = [
  {
    company: 'Freelance Platform',
    title: 'Freelance Developer',
    description:
      'As a top-rated freelancer, I have successfully earned over $20,000 and garnered the satisfaction of more than 30 clients worldwide. My extensive experience and commitment to excellence have allowed me to deliver high-quality solutions and maintain strong, long-term relationships with clients.',
    startDate: new Date('2021-09-01').toISOString(),
    endDate: new Date('2023-05-20').toISOString(),
  },
  {
    company: 'Tech Innovations Inc.',
    title: 'Software Engineer',
    description:
      'I was responsible for developing and maintaining the Project Management System (PMS) application. This involved creating a responsive frontend using React and TypeScript, integrating with a GraphQL backend, managing PostgreSQL database operations via APIs, and ensuring smooth application performance through rigorous issue resolution.',
    startDate: new Date('2020-06-01').toISOString(),
    endDate: new Date('2022-03-01').toISOString(),
  },
  {
    company: 'FinanceCorp',
    title: 'Android Developer',
    description:
      "During my time at FinanceCorp, I honed my skills in enterprise-level software development and deployment practices, gaining invaluable experience in the dynamic FinTech industry. I played a key role in developing new anti-fraud measures, crucial for ensuring the security of transactions handling millions in value. I also deepened my expertise by learning and applying technologies like the Java Spring Framework, contributing to the platform's robustness and scalability.",
    startDate: new Date('2019-06-01').toISOString(),
    endDate: new Date('2019-09-30').toISOString(),
  },
];

export const EMAIL = 'john.doe@example.com';
