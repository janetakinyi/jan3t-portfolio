function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080b14] px-6 py-10">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-2 text-2xl font-bold tracking-wider text-white">
          JAN<span className="text-cyan-400">3</span>T
        </p>
        <p className="mb-4 text-sm text-gray-500">
          Creating with Purpose. Designing for People. Securing Technology.
        </p>
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Janet Akinyi. Built with React, Vite
          & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
