'use client';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import React from 'react';

interface ScrollAblePillsProps {
  techStack: string[];
}
const ScrollAblePills = ({ techStack }: ScrollAblePillsProps) => {
  return (
    <ScrollArea className='w-full touch-auto overflow-x-auto whitespace-nowrap'>
      <div className='mb-3 flex space-x-2'>
        {techStack.map((item, index) => (
          <button
            key={index}
            className={
              'flex items-center !text-nowrap rounded-full bg-primary px-3 py-1 text-xs text-secondary focus:outline-none md:text-sm'
            }
            style={{
              minWidth: 'fit-content',
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
};

export default ScrollAblePills;
