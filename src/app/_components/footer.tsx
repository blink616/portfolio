import { Card, CardContent } from '@/components/ui/card';
import { EMAIL } from '@/lib/data-helper';
import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col space-y-2'>
      <p className='w-full text-start text-base font-bold md:text-lg'>
        Contact Me
      </p>
      <Card>
        <CardContent className='flex flex-col items-center justify-between space-y-2 p-4'>
          <a href={`mailto:${EMAIL}`} className='flex'>
            <p className='font-bold'>{EMAIL}</p>
          </a>
          <div className='text-center text-sm'>
            Copyright © 2024 Hamiz Ali | All rights reserved
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
