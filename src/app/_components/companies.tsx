'use client';
import React from 'react';
import WorkCard from './work-card';
import { workExperiences } from '@/lib/data-helper';

const Companies = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <p className='w-full text-start text-base font-bold md:text-lg'>
        Companies
      </p>
      <div className='mt-5 rounded-xl border bg-card text-card-foreground shadow'>
        <div className='flex flex-col space-y-4 p-4'>
          {workExperiences.map((work, index: number) => (
            <WorkCard
              key={index}
              {...work}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
