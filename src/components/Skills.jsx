import { useScrollReveal } from "../hooks/useScrollReveal";

const skillGroups = [
  {
    title: "Web Development",
    items: ["React", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Vite"],
  },
  {
    title: "UI/UX Design",
    items: ["UI Design", "UX Design", "Responsive Layouts", "Prototyping"],
  },
  {
    title: "Cybersecurity",
    items: [
      "Ethical Hacking",
      "Network Security",
      "Linux",
      "Vulnerability Analysis",
    ],
  },
  {
    title: "Development Tools",
    items: ["Git", "GitHub", "VS Code", "Render", "npm"],
  },
];

function SkillCard({ group, index }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`transform rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      } hover:border-cyan-400/50 hover:bg-white/10`}
    >
      <h3 className="mb-4 text-lg font-semibold text-cyan-400">
        {group.title}
      </h3>
      <ul className="space-y-2 text-gray-300">
        {group.items.map((item, i) => (
          <li
            key={item}
            style={{ transitionDelay: `${index * 120 + i * 60}ms` }}
            className={`transform transition-all duration-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="skills" className="bg-[#0b0f1a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>
          <h2 className="mb-12 text-4xl font-bold text-white">
            What I <span className="text-cyan-400">work with</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
