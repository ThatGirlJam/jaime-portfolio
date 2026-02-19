import { LightBulbIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      <div className="mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
          <LightBulbIcon className="h-8 w-8 text-platinum" />
        </div>
        <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
          All You Need To Know (AYNTK)
        </h1>
        <p className="text-xl text-grey">
          Features, projects, and important things to know when starting a career as a software engineer.
        </p>
      </div>

      {/* Features */}
      <section className="mb-12">
        <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black mb-6`}>
          Features
        </h2>
        <div className="rounded-2xl bg-platinum border border-grey/20 p-8">
          <p className="text-grey">Add features and key highlights here.</p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black mb-6`}>
          Projects
        </h2>
        <div className="rounded-2xl bg-platinum border border-grey/20 p-8">
          <p className="text-grey">Add projects that matter for early-career software engineers here.</p>
        </div>
      </section>

      {/* Career essentials */}
      <section className="mb-12">
        <h2 className={`${lusitana.className} text-3xl md:text-4xl font-bold text-pitch-black mb-6`}>
          Important Things To Know
        </h2>
        <div className="space-y-4">
          <div className="rounded-2xl bg-platinum border border-grey/20 p-8">
            <p className="text-grey">Add tips, resources, and important things to know when starting out as a software engineer.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
