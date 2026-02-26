'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Projects',
    href: '/dashboard/projects',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Jobs',
    href: '/dashboard/jobs',
    icon: BriefcaseIcon,
  },
  { name: 'Experiences', href: '/dashboard/experiences', icon: UserGroupIcon },
  { name: 'Skills', href: '/dashboard/skills', icon: AcademicCapIcon },
  { name: 'AYNTK', href: '/dashboard/ayntk', icon: LightBulbIcon },
  { name: 'Feedback', href: '/dashboard/feedback', icon: ChatBubbleLeftRightIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row flex-nowrap gap-2 md:flex-col md:flex-nowrap md:gap-0 md:space-y-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            //When the link.href aka link of the nav option matches the curr path name, turn blue to show user is on that page
            className={clsx(
              'flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-md bg-white border border-grey/20 p-2 text-sm font-medium hover:bg-platinum hover:border-grey/40 transition-all md:h-[48px] md:w-full md:grow md:flex-none md:justify-start md:p-2 md:px-3 md:py-3 relative',
              {
                'border-r-4 border-r-pale-oak': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="h-5 w-5 shrink-0 text-pitch-black md:h-6 md:w-6" />
            <p className="hidden md:block text-pitch-black">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
