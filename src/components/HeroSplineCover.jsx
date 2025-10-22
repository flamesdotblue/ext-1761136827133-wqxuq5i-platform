import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Code, Users } from 'lucide-react';

export default function HeroSplineCover() {
  return (
    <section aria-label="Open Design hero" className="relative h-[78vh] min-h-[540px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g2cnMT7B1IgkJ7Ie/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

      <div className="relative z-10 mx-auto h-full max-w-7xl px-6 flex items-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Design collaboratively. Ship accessible, responsive code.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
            Open Design is a browser-first, collaborative website design platform with AI-powered design-to-code conversion. Create, iterate, and export production-ready HTML, CSS, and JS.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#code-assist" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition">
              <Code className="h-5 w-5" />
              Try Code Assist
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-white/20 hover:border-white/40 transition">
              <Play className="h-5 w-5" />
              Explore Features
            </a>
            <a href="#collab" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-500/90 hover:bg-emerald-600 text-white transition">
              <Users className="h-5 w-5" />
              Start collaborating
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
