'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ABOUT } from '@/lib/data-helper';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { FileText, Linkedin } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <div className='w-full flex-col space-y-2'>
      <p className='w-full text-start text-base font-bold md:text-lg'>
        About Me
      </p>
      <Card className='mt-2'>
        <CardContent className='flex w-full p-4'>
          <div className='flex w-full flex-col items-center space-y-3'>
            <p className='text-xs text-muted-foreground md:text-sm'>
              {ABOUT.description}
            </p>
            <div className='grid w-full grid-cols-3 gap-2'>
              <div className='flex w-full flex-col space-y-1 text-sm'>
                <p className='text-xs font-medium md:text-sm md:font-semibold'>
                  {ABOUT.experience}
                </p>
                <p className='text-xs text-muted-foreground'>Experience</p>
              </div>
              <div className='flex w-full flex-col space-y-1 text-sm'>
                <p className='text-xs font-medium md:text-sm md:font-semibold'>
                  {ABOUT.city}
                </p>
                <p className='text-xs text-muted-foreground sm:block'>
                  {ABOUT.country}
                </p>
              </div>
              <div className='flex w-full flex-col space-y-1 text-sm'>
                <p className='text-xs font-medium md:text-sm md:font-semibold'>
                  {ABOUT.designation}
                </p>
                <p className='text-xs text-muted-foreground'>Designation</p>
              </div>
            </div>
            <div className='grid w-full grid-cols-3 gap-2'>
              {ABOUT.socialLinks.map(({ href, text, icon: Icon }, index) => (
                <a href={href} target='_blank' key={index}>
                  <Button className='w-full text-xs sm:text-sm'>
                    <Icon className='mr-2 h-4 w-4' /> {text}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
