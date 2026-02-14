import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import BannerLogo from '@/app/ui/banner-logo';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-platinum border-r border-grey/20">
      <Link
        className="h-25 mb-2 flex items-end justify-start rounded-md bg-graphite p-4 md:h-40 transition-all hover:bg-pitch-black"
        href="/"
      >
        <div className="w-32 text-platinum md:w-40">
          <BannerLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <Link href="/">
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-white border border-grey/20 p-3 text-sm font-medium text-pitch-black hover:bg-platinum hover:border-grey/40 transition-all md:flex-none md:justify-start md:p-2 md:px-3">
            <ArrowUturnLeftIcon className="w-6" />
            <div className="hidden md:block">Go Back</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
