import Link from 'next/link';
import { CpuChipIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { ConceptTooltip } from '@/app/ui/concept-tooltip';
import { LayersDiagram } from './layers-diagram';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
        <Link
          href="/dashboard/ayntk"
          className="inline-flex items-center gap-2 text-grey hover:text-pitch-black mb-8 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to AYNTK
        </Link>
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-graphite mb-6">
            <CpuChipIcon className="h-8 w-8 text-platinum" />
          </div>
          <h1 className={`${lusitana.className} text-4xl md:text-5xl font-bold text-pitch-black mb-4`}>
            All About the Computer
          </h1>
          <p className="text-xl text-grey">
            What a computer is, how it works, and why it matters for software engineers.
          </p>
        </div>
        <article className="rounded-2xl bg-platinum border border-grey/20 p-8 md:p-10 space-y-10">
          {/* Overview */}
          <section className="space-y-6">
            <h2 className={`${lusitana.className} text-2xl font-bold text-pitch-black mb-4`}>
              What is a computer?
            </h2>
            <p className="text-grey leading-relaxed">
              A computer is a machine that takes <ConceptTooltip term="input" definition="Data or signals sent into the system (keyboard, mouse, network packets, files)." />, follows
              stored <ConceptTooltip term="instructions" definition="Programs: sequences of steps the CPU executes, often written in high-level languages and translated to machine code." />, and produces <ConceptTooltip term="output" definition="Results or side effects: what you see on screen, saved files, network responses, etc." />.
              At its core, it does three things: it stores data (<ConceptTooltip term="memory" definition="RAM (random access memory): fast, temporary storage the CPU uses for running programs. Data is lost when power is off." />), processes it (<ConceptTooltip term="CPU" definition="Central Processing Unit: the chip that executes instructions, does math, and coordinates the rest of the machine." />), and moves it in and out (<ConceptTooltip term="I/O" definition="Input/Output: reading and writing to disk, network, keyboard, display, and other peripherals." />).
            </p>
            <p className="text-grey leading-relaxed">
              The <ConceptTooltip term="hardware" definition="Physical parts: CPU, RAM, storage drives, motherboard, peripherals. The stuff you can touch." /> (processor, memory, storage, peripherals) runs the <ConceptTooltip term="software" definition="Programs and data: operating system, applications, and your code. Instructions that tell hardware what to do." /> (programs and operating system).
              As a software engineer, you write instructions that the computer executes; understanding the layers and parts below helps you write faster, more reliable code.
            </p>

            {/* Layers diagram */}
            <div className="mt-8">
              <h3 className={`${lusitana.className} text-lg font-bold text-pitch-black mb-3`}>
                Layers of a computer (top to bottom)
              </h3>
              <p className="text-grey text-sm leading-relaxed mb-4">
                Your code runs at the top; each layer sits on the one below. <span className="font-bold italic">Click a layer</span> to open its explanation.
              </p>
              <LayersDiagram />
              <p className="text-grey text-sm mt-3">
                <strong className="text-pitch-black">Learn more:</strong>{' '}
                <a href="https://en.wikipedia.org/wiki/Abstraction_layer" target="_blank" rel="noopener noreferrer" className="text-graphite underline hover:text-pitch-black">Abstraction layer (Wikipedia)</a>
                {' · '}
                <a href="https://www.explainthatstuff.com/howcomputerswork.html" target="_blank" rel="noopener noreferrer" className="text-graphite underline hover:text-pitch-black">How computers work (Explain That Stuff)</a>
              </p>
            </div>

            {/* Important parts */}
            <div className="mt-8">
              <h3 className={`${lusitana.className} text-lg font-bold text-pitch-black mb-3`}>
                Important parts of the computer
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-grey/20 p-4 bg-white/50">
                  <h4 className="font-semibold text-pitch-black mb-1 flex items-center gap-2">
                    <span className="text-graphite">●</span> <ConceptTooltip term="CPU" definition="Central Processing Unit: executes instructions, does arithmetic and logic, runs your programs. Speed measured in GHz; multiple cores let it run many tasks in parallel." />
                  </h4>
                  <p className="text-grey text-sm leading-relaxed">Executes instructions and does the math. The “brain” that runs your code.</p>
                </div>
                <div className="rounded-lg border border-grey/20 p-4 bg-white/50">
                  <h4 className="font-semibold text-pitch-black mb-1 flex items-center gap-2">
                    <span className="text-graphite">●</span> <ConceptTooltip term="RAM" definition="Random Access Memory: fast, volatile storage for running programs and data. Much faster than disk; contents are lost when the machine powers off." />
                  </h4>
                  <p className="text-grey text-sm leading-relaxed">Fast, temporary storage for running programs. More RAM usually means more apps open at once.</p>
                </div>
                <div className="rounded-lg border border-grey/20 p-4 bg-white/50">
                  <h4 className="font-semibold text-pitch-black mb-1 flex items-center gap-2">
                    <span className="text-graphite">●</span> <ConceptTooltip term="Storage" definition="Persistent storage: SSD or HDD. Keeps data when power is off. Slower than RAM but much larger. Your files and installed programs live here." />
                  </h4>
                  <p className="text-grey text-sm leading-relaxed">Disk (SSD/HDD): keeps data when the power is off. Where your files and OS live.</p>
                </div>
                <div className="rounded-lg border border-grey/20 p-4 bg-white/50">
                  <h4 className="font-semibold text-pitch-black mb-1 flex items-center gap-2">
                    <span className="text-graphite">●</span> <ConceptTooltip term="I/O" definition="Input/Output: everything that moves data in or out—keyboard, mouse, display, network, USB, disk reads/writes. Often a bottleneck." />
                  </h4>
                  <p className="text-grey text-sm leading-relaxed">Input/output: keyboard, screen, network, USB. How data gets in and out of the machine.</p>
                </div>
              </div>
            </div>
          </section>

          {/* History */}
          <section>
            <h2 className={`${lusitana.className} text-2xl font-bold text-pitch-black mb-4`}>
              A short history
            </h2>
            <p className="text-grey leading-relaxed mb-6">
              From room-sized machines to the device in your pocket. It's the same idea (input, process, output), just ever smaller and more connected.
            </p>
            <ul className="relative flex flex-col gap-6 border-l-2 border-graphite/30 pl-6">
              <li className="relative pl-1">
                <span className="absolute -left-[1.875rem] top-0 flex h-3 w-3 items-center justify-center rounded-full bg-graphite ring-4 ring-platinum" aria-hidden  />
                <span className="text-sm font-semibold text-graphite">1800s–1940s</span>
                <p className="mt-0.5 mb-0 text-grey leading-relaxed">Mechanical and electromechanical machines (Babbage, Turing’s Bombe). First electronic general-purpose computer: ENIAC, with vacuum tubes.</p>
              </li>
              <li className="relative pl-1">
                <span className="absolute -left-[1.875rem] top-0 flex h-3 w-3 items-center justify-center rounded-full bg-graphite ring-4 ring-platinum" aria-hidden  />
                <span className="text-sm font-semibold text-graphite">1950s–60s</span>
                <p className="mt-0.5 mb-0 text-grey leading-relaxed">Transistors and integrated circuits replace vacuum tubes. Machines get smaller, faster, and cheaper; mainframes and minicomputers spread through industry and research.</p>
              </li>
              <li className="relative pl-1">
                <span className="absolute -left-[1.875rem] top-0 flex h-3 w-3 items-center justify-center rounded-full bg-graphite ring-4 ring-platinum" aria-hidden  />
                <span className="text-sm font-semibold text-graphite">1970s–80s</span>
                <p className="mt-0.5 mb-0 text-grey leading-relaxed">Microprocessors and the personal computer. Computing moves from labs and offices into homes; the desktop becomes a standard tool for work and play.</p>
              </li>
              <li className="relative pl-1">
                <span className="absolute -left-[1.875rem] top-0 flex h-3 w-3 items-center justify-center rounded-full bg-graphite ring-4 ring-platinum" aria-hidden  />
                <span className="text-sm font-semibold text-graphite">1990s–2000s</span>
                <p className="mt-0.5 mb-0 text-grey leading-relaxed">The internet and the web; then mobile and smartphones. Computers become the network — always on, always connected, and part of daily life.</p>
              </li>
              <li className="relative pl-1">
                <span className="absolute -left-[1.875rem] top-0 flex h-3 w-3 items-center justify-center rounded-full bg-graphite ring-4 ring-platinum" aria-hidden  />
                <span className="text-sm font-semibold text-graphite">Today</span>
                <p className="mt-0.5 mb-0 text-grey leading-relaxed">Cloud, GPUs for AI, and billions of connected devices. The same layers (application → runtime → OS → hardware) run everything you build, from a script on your laptop to services at global scale.</p>
              </li>
            </ul>
            <p className="mt-6 text-grey leading-relaxed">
              <strong className="text-pitch-black">What's next? :</strong> AI is already in your phone, your search, and your IDE. It's suggesting code, answering questions, and helping you ship faster — this is just the start. The same machine you’re learning about is the one powering the next wave of tools and products. What you build on it can shape how people work and live.
            </p>
          </section>

          {/* Relevance to software engineers */}
          <section>
            <h2 className={`${lusitana.className} text-2xl font-bold text-pitch-black mb-4`}>
              Why it matters for software engineers
            </h2>
            <ul className="space-y-3 text-grey leading-relaxed list-disc list-inside marker:text-graphite">
              <li>
                <strong className="text-pitch-black">Performance:</strong> Knowing about CPU caches, memory hierarchy,
                and I/O helps you avoid bottlenecks and choose the right data structures and algorithms.
              </li>
              <li>
                <strong className="text-pitch-black">Debugging:</strong> When something goes wrong, understanding
                processes, threads, and how the OS manages resources makes it easier to track down bugs.
              </li>
              <li>
                <strong className="text-pitch-black">Systems design:</strong> Distributed systems, databases, and
                networks are built on top of many computers working together; a solid mental model of “one computer”
                scales to “many computers.”
              </li>
              <li>
                <strong className="text-pitch-black">Career clarity:</strong> Whether you work on frontend, backend,
                infra, or embedded systems, the machine is the thing that runs your code — understanding it gives you
                a shared foundation with the rest of the industry.
              </li>
            </ul>
          </section>
        </article>
    </div>
  );
}
