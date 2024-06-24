import React from 'react';
import { WorkExperienceItem } from '@/@types';
import { format } from 'date-fns';

interface WorkCardProps extends WorkExperienceItem {
  isLast: boolean;
}
const WorkCard = ({
  company,
  title,
  startDate,
  endDate,
  description,
  isLast,
}: WorkCardProps) => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-col justify-between space-y-1 sm:flex-row sm:space-y-0'>
        <div className='flex items-center space-x-4'>
          <h3 className='text-sm font-medium leading-none md:text-base'>
            {company} -{' '}
            <span className='text-xs font-normal text-muted-foreground md:text-sm'>
              {title}
            </span>
          </h3>
        </div>
        <p className='self-end text-xs text-muted-foreground md:text-sm'>
          {format(new Date(startDate), 'MMM, yyyy')} -{' '}
          {endDate ? format(new Date(endDate), 'MMM, yyyy') : 'Present'}
        </p>
      </div>
      <p className='text-xs text-muted-foreground md:text-sm'>
        <span className='font-bold text-primary'>Description: </span>
        {description}
      </p>
      {isLast ? (
        <></>
      ) : (
        <hr className='mx-auto w-[70%] border-t border-neutral-200' />
      )}
    </div>
  );
};

export default WorkCard;
