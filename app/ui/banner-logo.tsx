import { lusitana } from '@/app/ui/fonts';

export default function BannerLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-2xl md:text-4xl font-bold text-pale-oak leading-tight">
        Ideate, Innovate, Iterate.
      </p>
    </div>
  );
}
