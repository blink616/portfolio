'use client';
import React from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiCss3,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiMui,
  SiPrisma,
  SiTailwindcss,
  SiRadixui,
  SiNestjs,
  SiGraphql,
  SiTrpc,
  SiVisualstudiocode,
  SiPycharm,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { Button } from '@/components/ui/button';

export const skillList = [
  // Frontend
  {
    icon: SiTypescript,
    text: 'TypeScript',
  },
  {
    icon: SiJavascript,
    text: 'JavaScript',
  },
  {
    icon: SiReact,
    text: 'React',
  },
  {
    icon: SiNextdotjs,
    text: 'Next',
  },
  {
    icon: SiRedux,
    text: 'Redux',
  },
  {
    icon: SiTailwindcss,
    text: 'Tailwind',
  },
  {
    icon: SiCss3,
    text: 'CSS3',
  },

  {
    icon: SiRadixui,
    text: 'Radix UI',
  },
  {
    icon: SiMui,
    text: 'Material UI',
  },

  // Backend
  {
    icon: SiNodedotjs,
    text: 'Node',
  },
  {
    icon: SiExpress,
    text: 'Express',
  },
  {
    icon: SiNestjs,
    text: 'NestJs',
  },
  {
    icon: SiGraphql,
    text: 'GraphQl',
  },
  {
    icon: BiLogoPostgresql,
    text: 'PostgreSQL',
  },
  {
    icon: SiMongodb,
    text: 'MongoDB',
  },
  {
    icon: SiFirebase,
    text: 'Firebase',
  },
  {
    icon: SiTrpc,
    text: 'Trpc',
  },
  {
    icon: SiPrisma,
    text: 'Prisma',
  },
  {
    icon: SiPython,
    text: 'Python',
  },

  // DevOps
  {
    icon: SiGit,
    text: 'Git',
  },
  {
    icon: SiDocker,
    text: 'Docker',
  },

  // Tools
  {
    icon: SiVisualstudiocode,
    text: 'VS Code',
  },
  {
    icon: SiPycharm,
    text: 'PyCharm',
  },
];

const SkillPills = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <p className='w-full text-start text-base font-bold md:text-lg'>
        Tech Stack
      </p>
      <div className='grid grid-cols-4 gap-2'>
        {skillList.map((item, index) => (
          <Button className='col-span-2 text-xs sm:col-span-1' key={index}>
            <item.icon />
            <span className='ml-1'>{item.text}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SkillPills;
