import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="bg-[#080b14] px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>
        <h2 className="mb-6 text-4xl font-bold text-white">
          Let's build something{" "}
          <span className="text-cyan-400">meaningful</span>
        </h2>
        <p className="mb-12 text-gray-400">
          Have a project in mind, or just want to say hello? I'd love to hear
          from you.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:janetakinyi387@gmail.com"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FiMail /> janetakinyi387@gmail.com
          </a>

          <a
            href="tel:+254727960670"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FiPhone /> +254 727 960 670
          </a>

          <a
            href="https://github.com/janetakinyi"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FiGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/janet-akinyi-29498b245"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>

        <form className="mx-auto max-w-xl space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder-gray-500 outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black hover:bg-cyan-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
