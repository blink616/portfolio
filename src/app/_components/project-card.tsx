'use client';
import React from 'react';
import { type ProjectItem } from '@/@types';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, MonitorPlay } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollAblePills from './scrollable-pills';

import { PopoverClose } from '@radix-ui/react-popover';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import PlayerDialog from './player-dialog';

const ProjectCard = ({
  name,
  description,
  url,
  video,
  techStack,
}: ProjectItem) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <Card className='relative'>
      <CardContent className='flex w-full flex-col items-center space-y-2 px-4 py-2'>
        <div className='relative flex w-full items-center justify-between'>
          <div className='flex items-center justify-center'>
            <p>
              <a
                href={url}
                target='_blank'
                className='text-sm font-bold md:text-base'
              >
                {name}
              </a>
            </p>
            <ExternalLink className='ml-2 h-4 w-4' />
          </div>
          <Button size={'icon'} className='flex md:hidden' onClick={handlePlay}>
            <MonitorPlay className='h-4 w-4' />
          </Button>
          <div className='hidden md:block'>
            <Popover modal>
              <PopoverTrigger asChild>
                <Button size={'icon'}>
                  <MonitorPlay className='h-4 w-4' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='absolute right-[-14px] hidden w-max bg-white p-0 md:block'>
                <PopoverClose className='focus:none focus-visible:none flex border-none p-0 outline-none'>
                  <div className='-left-20 top-0 h-[400px] w-max rounded-md bg-black bg-opacity-70 transition-opacity duration-300'>
                    <video
                      src={video}
                      autoPlay
                      muted
                      loop
                      className='h-full w-auto rounded-md object-contain'
                    />
                  </div>
                </PopoverClose>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <p className='text-xs text-muted-foreground md:text-sm'>
          <span className='font-bold text-primary'>Description: </span>
          {description}
        </p>
        <ScrollAblePills techStack={techStack} />
      </CardContent>
      {isPlaying && (
        <div className='block'>
          <PlayerDialog
            open={isPlaying}
            handleClose={handlePause}
            url={video}
          />
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
