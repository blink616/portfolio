'use client';
import React from 'react';
import ProjectCard from './project-card';
import { ProjectList } from '@/lib/data-helper';

const Projects = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <p className='w-full text-start text-base font-bold md:text-lg'>
        Projects
      </p>
      <div className='flex flex-col space-y-4'>
        {ProjectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
