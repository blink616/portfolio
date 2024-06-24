'use client';
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  BriefcaseBusinessIcon,
  Code,
  Home,
  Mail,
  Presentation,
} from 'lucide-react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
interface NavBarItemProps {
  title: string;
  href: string;
  icon: (props: React.HTMLAttributes<SVGElement>) => React.ReactNode;
}
const components: NavBarItemProps[] = [
  {
    title: 'Home',
    href: '#home',
    icon: (props) => <Home {...props} />,
  },
  {
    title: 'Projects',
    href: '#projects',
    icon: (props) => <Presentation {...props} />,
  },
  {
    title: 'Experience',
    href: '#companies',
    icon: (props) => <BriefcaseBusinessIcon {...props} />,
  },
  {
    title: 'Tech Stack',
    href: '#tech-stack',
    icon: (props) => <Code {...props} />,
  },
  {
    title: 'Contact Me',
    href: '#contact-me',
    icon: (props) => <Mail {...props} />,
  },
];

export function NavBar() {
  const { setTheme } = useTheme();
  return (
    <NavigationMenu className='mx-auto w-full'>
      <NavigationMenuList className='flex space-x-2'>
        {components.map(({ href, title, icon: Icon }, index) => (
          <NavigationMenuItem key={index} className='rounded-md border'>
            <Link href={href} legacyBehavior passHref className='px-0'>
              <NavigationMenuLink
                className={cn(
                  'flex items-center justify-center space-x-1',
                  navigationMenuTriggerStyle(),
                  'px-2 sm:px-4'
                )}
              >
                <Icon className='h-5 w-5' />
                <p className='hidden text-xs font-normal sm:block'>{title}</p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
