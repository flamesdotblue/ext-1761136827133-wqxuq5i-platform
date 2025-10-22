import React from 'react';
import { MonitorSmartphone, LayoutGrid, Users, GitBranch, Accessibility, Shield, Code2, Rocket } from 'lucide-react';

const features = [
  {
    icon: MonitorSmartphone,
    title: 'Responsive Canvas',
    desc: 'Drag-and-drop canvas with desktop, tablet, and mobile breakpoints. Test with integrated responsive previews.',
  },
  {
    icon: LayoutGrid,
    title: 'Component Library',
    desc: 'Accessible UI components with WCAG 2.1 AA contrast, ARIA roles, 8px spacing, and consistent typography scales.',
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    desc: 'Multi-user cursors, comments, and presence. Design together without version conflicts.',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    desc: 'Branch, merge, and review design history. Safely explore ideas and roll back instantly.',
  },
  {
    icon: Code2,
    title: 'AI Design-to-Code',
    desc: 'Upload media or snippets. Generate clean HTML, CSS, and JS with copy and download options.',
  },
  {
    icon: Accessibility,
    title: 'Built-in Accessibility',
    desc: 'Guided checks for color contrast, focus order, semantics, and keyboard navigation.',
  },
  {
    icon: Shield,
    title: 'Security First',
    desc: 'Hardened app security with XSS and CSRF protection. Private projects and secure auth.',
  },
  {
    icon: Rocket,
    title: 'Easy Export',
    desc: 'Export HTML/CSS packages or handoff to WordPress and Webflow with production assets.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-16 sm:py-24 bg-gradient-to-b from-black to-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Everything you need to design and ship</h2>
          <p className="mt-3 text-white/70">
            A modern toolkit for component-driven design, collaboration, and AI-assisted front-end code generation.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-500/20 ring-1 ring-blue-400/30">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
