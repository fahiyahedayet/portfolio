
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { projects } from "../lib/projects";

const skills = [
  { name: "HTML & CSS", group: "Frontend", level: "Comfortable building layouts" },
  { name: "JavaScript", group: "Frontend", level: "Core language & DOM" },
  { name: "TypeScript", group: "Frontend", level: "Typed application code" },
  { name: "React", group: "Frontend", level: "Components & hooks" },
  { name: "Next.js", group: "Frontend", level: "App Router & pages" },
  { name: "Tailwind CSS", group: "Design", level: "Responsive UI styling" },
  { name: "UI/UX Design", group: "Design", level: "User-focused interfaces" },
  { name: "Git & GitHub", group: "Tools", level: "Version control workflow" },
];

const experience = [
  {
    date: "2026 · Internship",
    title: "UI/UX & Software Design Intern",
    place: "mPair Technologies Ltd.",
    text: "Gaining practical exposure to user-focused digital products and interface design workflows. Update this with your exact responsibilities before publishing.",
  },
  {
    date: "2025 — Present · Learning",
    title: "Frontend Development Journey",
    place: "Independent projects & coursework",
    text: "Building responsive web interfaces and strengthening JavaScript, TypeScript, React, Next.js, accessibility, and API integration through hands-on projects.",
  },
];

export default function PortfolioHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState("All");
  const [formStatus, setFormStatus] = useState("");

  const categories = ["All", "Next.js", "React", "UI/UX"];

  const visibleProjects = projects.filter((project) => {
    if (filter === "All") return true;

    if (filter === "UI/UX") {
      return project.category.toLowerCase().includes("ui/ux");
    }

    return project.stack.includes(filter);
  });

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const shouldDark = saved === "dark";

    setDark(shouldDark);
    document.documentElement.dataset.theme = shouldDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const nextDark = !dark;

    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    window.localStorage.setItem(
      "portfolio-theme",
      nextDark ? "dark" : "light"
    );
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setFormStatus("Please complete all fields.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    setFormStatus("Opening your email app...");
    window.location.href = `mailto:fahiyahedayet@gmail.com?subject=${subject}&body=${body}`;
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="site-shell" id="home">
        {/* Navigation */}
        <header className="navbar">
          <Link
            className="brand"
            href="#home"
            onClick={closeMenu}
            aria-label="Portfolio home"
          >
            <span className="brand-mark">F.</span>
            <span>
              portfolio<span className="brand-dot">.</span>
            </span>
          </Link>

          <nav
            className={`nav-links ${menuOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {[
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Education",
              "Contact",
            ].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle light and dark theme"
            >
              {dark ? "☀" : "☾"}
            </button>

            <a
              className="button button-small button-primary resume-nav"
              href="/resume.pdf"
              download
            >
              Resume ↗
            </a>

            <button
              className="menu-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="hero section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              Open to opportunities
              <span className="availability-divider">·</span>
              Frontend & UI/UX
            </div>

            <p className="eyebrow hero-eyebrow">
              HELLO, I’M A DEVELOPER IN PROGRESS
            </p>

            <h1 id="hero-title">
              I build digital
              <br />
              experiences that
              <br />
              <span className="gradient-text">feel right.</span>
            </h1>

            <p className="hero-description">
              I’m a frontend developer focused on building clean, responsive,
              and thoughtful web experiences with React, Next.js, TypeScript,
              and a little design magic.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Let’s talk <span>↗</span>
              </a>
            </div>

            <div className="social-row">
              <a
                href="https://github.com/fahiyahedayet"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/fahiya-hedayet/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <span>·</span>
              <a
                href="https://www.behance.net/fahiyahedayet"
                target="_blank"
                rel="noreferrer"
              >
                Behance ↗
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Decorative developer code card">
            <div className="art-glow" />

            <div className="floating-chip chip-top">
              <span className="chip-pulse" />
              Available for collaboration
            </div>

            <div className="code-card">
              <div className="code-topbar">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>developer.tsx</span>
                <span className="code-lock">⌘ K</span>
              </div>

              <div className="code-body">
                <p>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </p>
                <p className="indent">
                  <span className="code-cyan">role</span>:{" "}
                  <span className="code-green">"Frontend Developer"</span>,
                </p>
                <p className="indent">
                  <span className="code-cyan">focus</span>: [
                </p>
                <p className="indent2">
                  <span className="code-green">"React"</span>,{" "}
                  <span className="code-green">"Next.js"</span>,
                </p>
                <p className="indent2">
                  <span className="code-green">"TypeScript"</span>,{" "}
                  <span className="code-green">"UI/UX"</span>
                </p>
                <p className="indent">],</p>
                <p className="indent">
                  <span className="code-cyan">mindset</span>:{" "}
                  <span className="code-green">"Always learning"</span>,
                </p>
                <p className="indent">
                  <span className="code-cyan">coffee</span>:{" "}
                  <span className="code-orange">true</span>
                </p>
                <p>{"}"};</p>
                <p className="code-comment">
                  // turning ideas into interfaces ✦
                </p>
              </div>

              <div className="code-footer">
                <span>
                  <i className="footer-status" /> All systems learning
                </span>
                <span>UTF-8&nbsp; · &nbsp;TypeScript</span>
              </div>
            </div>

            <div className="floating-chip chip-bottom">
              <span className="mini-spark">✳</span>
              <span>
                <b>Design-minded</b>
                <small>Code with intention</small>
              </span>
            </div>

            <div className="hero-orbit orbit-a" />
            <div className="hero-orbit orbit-b" />
            <div className="hero-star star-a">✳</div>
            <div className="hero-star star-b">✦</div>
          </div>

          <a className="scroll-cue" href="#about">
            <span className="scroll-line" />
            Scroll to explore
          </a>
        </section>

        {/* Toolkit */}
        <div className="tech-strip">
          <span className="eyebrow">MY TOOLKIT</span>
          <div className="tech-items">
            <span>◈ React</span>
            <span>⌘ TypeScript</span>
            <span>✳ Next.js</span>
            <span>▧ Tailwind CSS</span>
            <span>◉ Figma / UI/UX</span>
            <span>⌁ Git & GitHub</span>
          </div>
        </div>

        {/* About */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">
              A LITTLE ABOUT ME <span>01 / 06</span>
            </p>
            <h2>
              Curious by nature.
              <br />
              <span className="gradient-text">Builder by choice.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-note">
              <span className="note-symbol">“</span>
              <p>
                I believe great digital products live at the intersection of{" "}
                <strong>useful technology</strong> and{" "}
                <strong>thoughtful design.</strong>
              </p>
              <span className="note-signature">
                — My approach to every project
              </span>
            </div>

            <div className="about-copy">
              <p>
                I’m growing as a frontend developer by turning what I learn
                into real projects. I enjoy the process of taking an idea,
                breaking it into components, and shaping it into an interface
                that feels clear and easy to use.
              </p>
              <p>
                My interest in UI/UX helps me think beyond just making things
                work. I care about hierarchy, spacing, accessibility,
                responsive behavior, and the small details that make a product
                feel considered.
              </p>

              <div className="about-facts">
                <div>
                  <strong>01</strong>
                  <span>Keep learning</span>
                </div>
                <div>
                  <strong>02</strong>
                  <span>Build with purpose</span>
                </div>
                <div>
                  <strong>03</strong>
                  <span>Improve every day</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">
              WHAT I WORK WITH <span>02 / 06</span>
            </p>
            <h2>
              Tools for turning
              <br />
              <span className="gradient-text">ideas into reality.</span>
            </h2>
            <p className="section-subtitle">
              A growing toolkit for building modern interfaces and
              user-friendly experiences.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-card-top">
                  <span className={`skill-icon skill-icon-${index % 4}`}>
                    {["⌘", "JS", "TS", "⚛", "N", "✳", "✦", "⌁"][index]}
                  </span>
                  <span className="skill-group">{skill.group}</span>
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
                <span className="skill-arrow">↗</span>
              </article>
            ))}
          </div>

          <p className="honesty-note">
            Skill descriptions are intentionally qualitative. Keep them aligned
            with what you can confidently demonstrate.
          </p>
        </section>

        {/* Projects */}
        <section className="section projects-section" id="projects">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">
                SELECTED WORK <span>03 / 06</span>
              </p>
              <h2>
                Some things I’ve
                <br />
                <span className="gradient-text">made along the way.</span>
              </h2>
            </div>
            <p className="section-subtitle">
              A few projects where I’ve practiced building useful, responsive
              experiences.
            </p>
          </div>

          <div className="project-filters" role="group" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={filter === category ? "filter-active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>


          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.slug}>
                <Link
                  className={`project-visual visual-${project.gradient}`}
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.title} project details`}
                >
                  <span className="project-number">
                    {project.number} / FEATURED
                  </span>

                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="project-image"
                    loading="lazy"
                  />

                  <span className="visual-open">↗</span>
                </Link>

                <div className="project-card-body">
                  <div className="project-title-row">
                    <div>
                      <p className="eyebrow">{project.category}</p>

                      <h3>
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                    </div>

                    <Link
                      className="round-arrow"
                      href={`/projects/${project.slug}`}
                      aria-label={`View ${project.title} details`}
                    >
                      ↗
                    </Link>
                  </div>

                  <p>{project.summary}</p>

                  <div className="tag-list">
                    {project.stack.slice(0, 4).map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>


          <div className="projects-bottom">
            <span>More experiments are always in progress.</span>
            <a
              href="https://github.com/fahiyahedayet"
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub ↗
            </a>
          </div>
        </section>

        {/* Experience */}
        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">
              THE JOURNEY SO FAR <span>04 / 06</span>
            </p>
            <h2>
              Learning, doing,
              <br />
              <span className="gradient-text">getting better.</span>
            </h2>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker">0{index + 1}</div>
                <div className="timeline-content">
                  <p className="eyebrow">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p className="timeline-description">{item.text}</p>
                </div>
                <span className="timeline-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="section education-section" id="education">
          <div className="education-card">
            <div>
              <p className="eyebrow">
                ALWAYS A STUDENT <span>05 / 06</span>
              </p>
              <h2>
                Learning is part
                <br />
                of the <span className="gradient-text">process.</span>
              </h2>
              <p className="section-subtitle">
                I’m continuously strengthening my foundations through
                structured learning, practice assignments, and building
                projects. Add your exact degree, institution, dates, and
                certificates here.
              </p>
            </div>

            <div className="education-list">
              <div className="education-row">
                <span className="education-icon">✳</span>
                <div>
                  <h3>Frontend Development</h3>
                  <p>Hands-on practice · React, Next.js & TypeScript</p>
                </div>
              </div>

              <div className="education-row">
                <span className="education-icon">✦</span>
                <div>
                  <h3>UI/UX Design</h3>
                  <p>Interface design · Usability · Visual hierarchy</p>
                </div>
              </div>

              <div className="education-row">
                <span className="education-icon">⌁</span>
                <div>
                  <h3>Continuous Learning</h3>
                  <p>Projects, documentation, and coding challenges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">
                HAVE A PROJECT IN MIND? <span>06 / 06</span>
              </p>
              <h2>
                Let’s make
                <br />
                something <span className="gradient-text">meaningful.</span>
              </h2>
              <p>
                I’m always happy to connect, talk about frontend development,
                or hear about an interesting idea.
              </p>

              <a
                className="button button-primary"
                href="mailto:fahiyahedayet@gmail.com" 
              >
                Let's talk ↗
              </a>

              <div className="social-row">
                <a
                  href="https://github.com/fahiyahedayet"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <span>·</span>
                <a
                  href="https://www.linkedin.com/in/fahiya-hedayet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
                <span>·</span>
                <a
                  href="https://www.behance.net/fahiyahedayet"
                  target="_blank"
                  rel="noreferrer"
                >
                  Behance ↗
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                placeholder="What should I call you?"
                required
              />

              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="message">A little about your idea</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me what you’re thinking..."
                rows={4}
                required
              />

              <button
                className="button button-primary form-submit"
                type="submit"
              >
                Prepare message <span>↗</span>
              </button>

              {formStatus && (
                <p className="form-status" role="status">
                  {formStatus}
                </p>
              )}

              <p className="form-hint">
                This form opens your email app with your message prepared.
              </p>
            </form>
          </div>
        </section>

        

        {/* Footer */}
        <footer className="footer">
          <Link className="brand" href="#home">
            <span className="brand-mark">F.</span>
            <span>
              portfolio<span className="brand-dot">.</span>
            </span>
          </Link>

          <span>Designed with intention. Built with curiosity.</span>
          <a href="#home">Back to top ↑</a>
        
        </footer>
      </div>
    </main>
  );
}
