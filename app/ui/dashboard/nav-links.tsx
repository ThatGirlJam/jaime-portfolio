'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Jobs',
    href: '/dashboard/jobs',
    icon: BriefcaseIcon,
  },
  {
    name: 'Projects',
    href: '/dashboard/projects',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Experiences', href: '/dashboard/experiences', icon: UserGroupIcon },
  { name: 'Skills', href: '/dashboard/skills', icon: AcademicCapIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            //When the link.href aka link of the nav option matches the curr path name, turn blue to show user is on that page
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white border border-grey/20 p-3 text-sm font-medium hover:bg-platinum hover:border-grey/40 transition-all md:flex-none md:justify-start md:p-2 md:px-3 relative',
              {
                'border-r-4 border-r-pale-oak': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6 text-pitch-black" />
            <p className="hidden md:block text-pitch-black">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
