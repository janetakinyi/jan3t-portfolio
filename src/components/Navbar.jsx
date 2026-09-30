import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080b14]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-2xl font-bold tracking-wider text-white">
          JAN<span className="text-cyan-400">3</span>T
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              {name}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/50 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white md:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080b14] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
