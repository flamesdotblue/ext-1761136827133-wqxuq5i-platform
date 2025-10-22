import React, { useMemo, useRef, useState } from 'react';
import { Upload, Wand2, Clipboard, Download, ThumbsUp, ThumbsDown } from 'lucide-react';

const sampleHTML = `<!-- Accessible navigation -->\n<nav aria-label=\"Primary\" class=\"nav\">\n  <a class=\"logo\" href=\"#\" aria-label=\"Open Design Home\">Open Design</a>\n  <ul class=\"nav-list\">\n    <li><a href=\"#features\">Features</a></li>\n    <li><a href=\"#code-assist\">Code Assist</a></li>\n    <li><a href=\"#templates\">Templates</a></li>\n  </ul>\n</nav>\n\n<header class=\"hero\">\n  <h1>Design collaboratively. Ship accessible code.</h1>\n  <p>Canvas, components, and AI design-to-code in your browser.</p>\n  <button class=\"btn primary\">Get started</button>\n</header>`;

const sampleCSS = `:root{--primary:#3b82f6;--secondary:#6b7280;--accent:#22c55e;--space:8px;}\n*{box-sizing:border-box} body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;color:#0b1220}\n.nav{display:flex;align-items:center;justify-content:space-between;padding:calc(var(--space)*2) calc(var(--space)*3);position:sticky;top:0;background:rgba(255,255,255,.6);backdrop-filter:saturate(1.8) blur(8px)}\n.nav a{color:#0b1220;text-decoration:none;font-weight:600}\n.nav-list{display:flex;gap:calc(var(--space)*3);list-style:none;margin:0;padding:0}\n.hero{padding:calc(var(--space)*12) calc(var(--space)*3);background:radial-gradient(1200px 400px at 10% -20%,rgba(59,130,246,.35),transparent 60%),#0b0b0b;color:white;text-align:center}\n.hero h1{font-size:clamp(28px,4vw,48px);line-height:1.1;margin:0 0 calc(var(--space)*2)}\n.hero p{color:rgba(255,255,255,.8);max-width:60ch;margin:0 auto calc(var(--space)*3)}\n.btn{border:0;border-radius:10px;padding:calc(var(--space)*2) calc(var(--space)*3);font-weight:600;cursor:pointer} .btn.primary{background:var(--primary);color:white}\n@media (max-width:768px){.nav-list{gap:calc(var(--space)*2)}.hero{padding:calc(var(--space)*10) calc(var(--space)*2)}}`;

const sampleJS = `document.querySelector('.btn.primary')?.addEventListener('click',()=>{\n  alert('Welcome to Open Design!');\n});`;

export default function CodeAssistPanel() {
  const [file, setFile] = useState(null);
  const [code, setCode] = useState({ html: '', css: '', js: '' });
  const [rating, setRating] = useState(null);
  const inputRef = useRef(null);

  const combined = useMemo(() => {
    const { html, css, js } = code;
    return `<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\"/>\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/>\n<title>Open Design Export</title>\n<style>\n${css}\n</style>\n</head>\n<body>\n${html}\n<script>\n${js}\n</script>\n</body>\n</html>`;
  }, [code]);

  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const handleFile = (f) => {
    setFile(f);
  };

  const onGenerate = () => {
    // Simulate AI generation using sample snippets
    setCode({ html: sampleHTML, css: sampleCSS, js: sampleJS });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(combined);
      alert('Code copied to clipboard');
    } catch (e) {
      console.error(e);
    }
  };

  const downloadZip = () => {
    // Offer single HTML for simplicity
    const blob = new Blob([combined], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'open-design-export.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="code-assist" className="relative py-16 sm:py-24 border-t border-white/10 bg-[#0b0b0b]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">AI Code Assist</h2>
          <p className="mt-3 text-white/70">Upload a screenshot, mockup, or short animation. Our AI analyzes patterns and generates accessible HTML, CSS, and JS. Provide feedback to improve results.</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <div
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
              className="relative rounded-xl border border-dashed border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition p-6"
              aria-label="Media uploader"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-500/20 ring-1 ring-blue-400/30">
                  <Upload className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Drag & drop image/video here</p>
                  <p className="text-sm text-white/70">PNG, JPG, GIF, MP4 up to 20MB</p>
                </div>
                <button
                  onClick={() => inputRef.current?.click()}
                  className="px-3 py-2 rounded-md border border-white/20 hover:border-white/40 text-sm"
                >
                  Browse
                </button>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(f);
                  }}
                />
              </div>
              {file && (
                <p className="mt-4 text-sm text-white/80">Selected: {file.name}</p>
              )}
              <div className="mt-6 flex gap-3">
                <button onClick={onGenerate} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white transition">
                  <Wand2 className="h-4 w-4" />
                  Generate code
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 p-4 bg-white/[0.02]">
              <p className="text-sm text-white/70">AI Feedback</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button
                  aria-pressed={rating === 'up'}
                  onClick={() => setRating('up')}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm transition ${rating === 'up' ? 'border-emerald-400 text-emerald-300' : 'border-white/20 hover:border-white/40'}`}
                >
                  <ThumbsUp className="h-4 w-4" /> Accurate
                </button>
                <button
                  aria-pressed={rating === 'down'}
                  onClick={() => setRating('down')}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm transition ${rating === 'down' ? 'border-rose-400 text-rose-300' : 'border-white/20 hover:border-white/40'}`}
                >
                  <ThumbsDown className="h-4 w-4" /> Needs work
                </button>
                <textarea
                  placeholder="Suggest improvements (ARIA roles, contrast, semantics, responsiveness, etc.)"
                  className="w-full mt-3 min-h-[96px] rounded-md bg-black/40 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="min-h-[420px] rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <p className="text-sm text-white/80">Generated Code Preview</p>
              <div className="flex items-center gap-2">
                <button onClick={copyToClipboard} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/20 hover:border-white/40 text-xs">
                  <Clipboard className="h-4 w-4" /> Copy
                </button>
                <button onClick={downloadZip} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  <Download className="h-4 w-4" /> Download
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              {code.html || code.css || code.js ? (
                <pre className="p-4 text-xs leading-relaxed text-white/90 whitespace-pre-wrap">
                  {combined}
                </pre>
              ) : (
                <div className="h-full w-full grid place-items-center p-8 text-center">
                  <div>
                    <p className="text-white/80">No code yet. Upload media and generate to preview.</p>
                    <p className="text-white/60 text-sm mt-1">AI will output semantic HTML, layered CSS (responsive, prefers-reduced-motion), and progressive enhancement JS.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
