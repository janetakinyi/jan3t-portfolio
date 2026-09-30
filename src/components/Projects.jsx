const projects = [
  {
    number: "01",
    title: "OUP Online Order",
    subtitle: "Educational Book Ordering System",
    description:
      "A responsive web application for selecting educational books, creating orders, and generating professional quotations with PDF and Excel export.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    role: "UI/UX Design · Frontend Development",
    demo: "https://online-order-1.onrender.com",
    github: "https://github.com/janetakinyi/online-order",
  },
  {
    number: "02",
    title: "Word Temple Church",
    subtitle: "Church Web Platform",
    description:
      "A responsive church web platform featuring membership applications, event registration, gallery management, and an administrative dashboard.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "UI/UX Design · Frontend Development",
    demo: "https://wordtemple-website-aoc4.onrender.com",
    github: "https://github.com/janetakinyi/wordtemple-website",
  },
  {
    number: "03",
    title: "Echo Gift",
    subtitle: "Interactive Digital Gift Experience",
    description:
      "A personalized interactive web experience combining multimedia, animation, and custom content to create a memorable digital celebration.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "UI/UX Design · Frontend Development",
    demo: "https://abigail-graduation.onrender.com",
    github: "https://github.com/janetakinyi/echo-gift",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-[#080b14] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>
        <h2 className="mb-12 text-4xl font-bold text-white">
          Selected <span className="text-cyan-400">work</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/50"
            >
              <span className="mb-3 text-sm font-bold text-cyan-400">
                {project.number}
              </span>
              <h3 className="mb-1 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mb-3 text-sm text-cyan-300">{project.subtitle}</p>
              <p className="mb-4 text-sm italic text-gray-500">
                {project.role}
              </p>
              <p className="mb-6 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black hover:bg-cyan-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
