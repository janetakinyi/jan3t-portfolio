import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          );
        },
        deleting ? 40 : 90
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className="text-cyan-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080b14] px-6 pt-24"
    >
      {/* Background glows */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
      <div
        className="absolute bottom-10 right-1/4 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Hello, I'm Janet
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
            <Typewriter
              words={[
                "Web Developer",
                "UI/UX Designer",
                "Cybersecurity Enthusiast",
              ]}
            />
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            I design and build responsive digital experiences that combine
            thoughtful UI/UX, functional web development, and a
            security-minded approach to technology.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:border-cyan-400 hover:text-cyan-400"
            >
              Let's Connect
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/janetakinyi"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:scale-110 hover:text-cyan-400"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 transition hover:scale-110 hover:text-cyan-400"
            >
              <FiLinkedin size={22} />
            </a>
          </div>

          <div className="mt-12 border-l border-cyan-400/50 pl-5">
            <p className="text-sm text-gray-500">Creating with Purpose.</p>
            <p className="text-sm text-gray-500">Designing for People.</p>
            <p className="text-sm text-gray-500">Securing Technology.</p>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden justify-center lg:flex">
          <div className="relative flex h-[430px] w-[430px] items-center justify-center">
            {/* Rotating outer ring */}
            <div className="absolute h-[380px] w-[380px] animate-[spin_20s_linear_infinite] rounded-full border border-cyan-400/10" />
            <div className="absolute h-[280px] w-[280px] animate-[spin_15s_linear_infinite_reverse] rounded-full border border-cyan-400/20" />

            {/* Center glow */}
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/5 shadow-[0_0_80px_rgba(34,211,238,0.15)]">
              <span className="text-5xl font-bold tracking-wider text-white">
                Jan<span className="text-cyan-400">3</span>t
              </span>
            </div>

            {/* Floating labels with individual animations */}
            <div
              className="absolute left-2 top-16 animate-bounce rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur"
              style={{ animationDuration: "3s" }}
            >
              Web
            </div>
            <div
              className="absolute right-0 top-32 animate-bounce rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur"
              style={{ animationDuration: "4s", animationDelay: "0.5s" }}
            >
              UI/UX
            </div>
            <div
              className="absolute bottom-14 left-16 animate-bounce rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur"
              style={{ animationDuration: "3.5s", animationDelay: "1s" }}
            >
              Cybersecurity
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition hover:text-cyan-400 md:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <FiArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;
