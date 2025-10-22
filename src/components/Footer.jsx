import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold">Open Design</p>
          <p className="mt-2 text-white/70">Collaborative, accessible design with AI-powered code generation.</p>
        </div>
        <div>
          <p className="font-semibold">Product</p>
          <ul className="mt-2 space-y-1 text-white/70">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#code-assist" className="hover:text-white">Code Assist</a></li>
            <li><a href="#templates" className="hover:text-white">Templates</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Resources</p>
          <ul className="mt-2 space-y-1 text-white/70">
            <li><a href="#docs" className="hover:text-white">Docs</a></li>
            <li><a href="#repo" className="hover:text-white">Code Repository</a></li>
            <li><a href="#changelog" className="hover:text-white">Changelog</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Legal</p>
          <ul className="mt-2 space-y-1 text-white/70">
            <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
            <li><a href="#terms" className="hover:text-white">Terms</a></li>
            <li><a href="#security" className="hover:text-white">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-8 text-xs text-white/50">© {new Date().getFullYear()} Open Design. All rights reserved.</div>
    </footer>
  );
}
