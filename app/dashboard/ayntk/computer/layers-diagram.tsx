'use client';

import { useState } from 'react';
import { ConceptTooltip } from '@/app/ui/concept-tooltip';

const LAYERS = [
  {
    id: 'application',
    number: 1,
    name: 'Application',
    summaryJsx: <>— Browser, IDE, games, your app</>,
    definition: 'The layer you see and use: browsers, editors, games, and the apps you build. These programs run on top of a platform (e.g. Node, the browser) and the OS; they get memory, files, and network through those layers.',
    className: 'bg-platinum/80 rounded-t-xl',
  },
  {
    id: 'platform',
    number: 2,
    name: 'Platform / Runtime',
    summaryJsx: (
      <>
        — <ConceptTooltip term="Runtime" definition="Software that runs your high-level code: Node.js, JVM, .NET, browser JS engine. Compiles or interprets your code and talks to the OS." /> (e.g. Node, JVM, browser engine)
      </>
    ),
    definition: 'You write in a language like JavaScript or Java. A runtime runs that code — Node, the browser, or the JVM. This layer is that runtime: it executes your code and talks to the OS for files, network, and memory so your app does not have to.',
    className: 'bg-platinum/60',
  },
  {
    id: 'os',
    number: 3,
    name: 'Operating system (OS)',
    summaryJsx: (
      <>
        — <ConceptTooltip term="Kernel" definition="The core of the OS: manages CPU, memory, processes, and hardware access. Your program asks the kernel for resources." />, <ConceptTooltip term="drivers" definition="Code that lets the OS talk to specific hardware (GPU, disk, USB). Usually provided by the OS or by the company that makes the hardware." />, scheduling
      </>
    ),
    definition: 'The layer that manages the machine: CPU scheduling, memory, processes, and hardware via drivers. Applications and runtimes ask the OS for resources; it hides raw hardware.',
    className: 'bg-platinum/40',
  },
  {
    id: 'assembly',
    number: 4,
    name: 'Assembly / machine code',
    summaryJsx: <>— Instructions the CPU executes directly (binary)</>,
    definition: 'The layer the CPU actually runs: low-level instructions (add, load, store). Compilers turn your code into this, then into binary. No more abstraction below: this is what runs on the chip.',
    className: 'bg-graphite/10',
  },
  {
    id: 'hardware',
    number: 5,
    name: 'Hardware',
    summaryJsx: <>— CPU, RAM, storage, I/O devices</>,
    definition: 'The bottom layer: physical CPU, RAM, storage, and I/O devices. Machine code runs here. Everything above exists to use this in a manageable way.',
    className: 'bg-graphite/20',
  },
] as const;

export function LayersDiagram() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="rounded-xl border border-grey/30 bg-white/50 overflow-hidden">
      {LAYERS.map((layer) => {
        const isOpen = openId === layer.id;
        return (
          <div key={layer.id} className="border-b border-grey/20 last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : layer.id)}
              className={`flex w-full items-center gap-4 px-4 py-3 text-left ${layer.className}`}
              aria-expanded={isOpen}
              aria-controls={`layer-drawer-${layer.id}`}
              id={`layer-trigger-${layer.id}`}
            >
              <span className="text-grey/70 text-sm font-mono w-5 flex-shrink-0">{layer.number}</span>
              <div className="flex-1 min-w-0">
                <span className={`font-semibold text-pitch-black ${isOpen ? 'underline decoration-graphite/50' : ''}`}>
                  {layer.name}
                </span>
                <span className="text-grey text-sm ml-2">{layer.summaryJsx}</span>
              </div>
            </button>
            <div
              id={`layer-drawer-${layer.id}`}
              role="region"
              aria-labelledby={`layer-trigger-${layer.id}`}
              className="grid transition-[grid-template-rows] duration-200 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-grey/20 bg-graphite/5 px-4 py-3 pl-12 text-sm text-grey leading-relaxed">
                  {layer.definition}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
