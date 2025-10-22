import React from 'react';
import { Rocket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 flex items-center justify-center rounded-md bg-blue-500/20 ring-1 ring-blue-400/40">
            <Rocket className="h-5 w-5 text-blue-400" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Open Design</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#code-assist" className="hover:text-white transition">Code Assist</a>
          <a href="#templates" className="hover:text-white transition">Templates</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-white/15 hover:border-white/30 transition">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
