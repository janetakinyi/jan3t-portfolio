const experience = [
  {
    role: "ICT Intern",
    area: "The Nairobi Hospital · Current",
    description:
      "Currently interning in the ICT Department at The Nairobi Hospital — supporting day-to-day technology operations, system support, data handling, and ICT administration in a fast-paced healthcare environment.",
  },
  {
    role: "Web Development & UI/UX",
    area: "Personal Projects",
    description:
      "Designed and developed responsive web applications using React, Vite, and Tailwind CSS — including educational ordering systems and church web platforms.",
  },
  {
    role: "Cybersecurity & Ethical Hacking",
    area: "Academic Background · Security-Focused Development",
    description:
      "Background in cybersecurity and ethical hacking, with knowledge of network security, Linux, vulnerability analysis, and security fundamentals.",
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-[#0b0f1a] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Experience
        </p>
        <h2 className="mb-12 text-4xl font-bold text-white">
          Where I've <span className="text-cyan-400">worked</span>
        </h2>

        <div className="space-y-6">
          {experience.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50"
            >
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <span className="text-xs text-cyan-400">{item.area}</span>
              </div>
              <p className="leading-7 text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
