function About() {
  return (
    <section id="about" className="bg-[#080b14] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>
        <h2 className="mb-8 text-4xl font-bold text-white">
          Building with <span className="text-cyan-400">purpose</span>
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 leading-8 text-gray-400">
            <p>
              I'm a <span className="text-white">Web Developer and UI/UX Designer</span>{" "}
              with a background in{" "}
              <span className="text-white">
                Cybersecurity and Ethical Hacking
              </span>
              . I enjoy turning ideas into responsive, functional, and
              user-focused web experiences.
            </p>
            <p>
              I've built websites and web applications ranging from church
              platforms and interactive experiences to business-oriented
              ordering systems.
            </p>
            <p>
              My approach combines clean UI/UX design with security-minded
              development — building things that are not only beautiful but
              also safe and reliable.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">
                What I Do
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>✓ Frontend Development (React, Vite, Tailwind)</li>
                <li>✓ UI/UX Design</li>
                <li>✓ Responsive Web Applications</li>
                <li>✓ Security-Minded Development</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Currently
              </h3>
              <p className="text-gray-400">
                Open to frontend developer and UI/UX opportunities, as well as
                freelance projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
