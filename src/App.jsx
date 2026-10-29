import { useEffect, useState } from "react";
import "./App.css";

const CV_URL = "/Debasis_Kayal_CV.pdf";
const EMAIL = "debasiskayal1993@gmail.com";
const PHONES = ["9674570862", "6290254046"];
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = CURRENT_YEAR - 2019;

const navItems = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const projects = [
  {
    name: "Portolo",
    category: "Web Application",
    tech: ["React", "Redux"],
    description:"React/TypeScript web application; add your specific modules, responsibilities, and outcomes",
    status: "Ongoing",
  },
  {
    name: "GetFound",
    category: "Web Application",
    tech: ["React", "Redux"],
    description:"Add a concise description of the product and your contribution",
    status: "Ongoing",
  },
  {
    name: "Helopoto",
    category: "Web Application",
    tech: ["React", "Redux"],
    description:"Add your role, technology stack, and key features delivered",
    status: "Ongoing",
  },
  {
    name: "Hordanso",
    category: "Web · Micro-frontends",
    tech: ["React", "Redux", "Webpack"],
    description:
      "Micro-frontend based platform with separate Admin and Customer portals. Responsible for design and development.",
    status: "Ongoing",
  },
  {
    name: "AME Electrical Solutions Inc.",
    category: "Web Application",
    tech: ["React", "Redux"],
    description:
      "Admin and Customer portals for an electrical solutions company. Responsible for design and development.",
    status: "Ongoing",
    links: [{ label: "portal.mtechpower.com", href: "https://portal.mtechpower.com" }],
  },
  {
    name: "Clock Me Now",
    category: "Web Application",
    tech: ["React", "Redux"],
    description:
      "Online time tracking web application with an Admin portal. Responsible for design and development.",
    status: "Ongoing",
    links: [{ label: "dev.clockmenow.com", href: "https://dev.clockmenow.com" }],
  },
  {
    name: "Crestest",
    category: "Web · Learning Platform",
    tech: ["React", "Redux"],
    description:
      "Online learning platform with Admin, Customer and DAM portals. Responsible for design and development.",
    status: "Ongoing",
    links: [
      { label: "LMS", href: "https://lms.crestest.com" },
      { label: "Admin", href: "https://admin.crestest.com" },
      { label: "DAM", href: "https://dam.crestest.com" },
    ],
  },
  {
    name: "Goalgetter",
    category: "Mobile Application",
    tech: ["React Native", "Redux"],
    description:
      "Mobile application companion for the AME Electrical Solutions platform. Responsible for design and development.",
    status: "Ongoing",
  },
  {
    name: "AME Electrical Solutions Inc.",
    category: "Mobile Application",
    tech: ["React Native", "Redux"],
    description:
      "Mobile application companion for the AME Electrical Solutions platform. Responsible for design and development.",
    status: "Ongoing",
  },
  {
    name: "Medsolu",
    category: "Mobile Application",
    tech: ["React Native", "JavaScript", "RN Paper"],
    description:
      "Online medicine mobile application built with a themed React Native Paper UI. Responsible for design and development.",
    status: "Mar 2022 – Dec 2022",
  },
  {
    name: "Instafi",
    category: "Mobile Application",
    tech: ["React Native", "JavaScript"],
    description:
      "Home loan mobile application. Responsible for design and development.",
    status: "May 2022 – Jan 2023",
  },
  {
    name: "Knack",
    category: "Mobile Application",
    tech: ["React Native"],
    description:
      "Online car servicing provider mobile application. Responsible for design and development.",
    status: "Dec 2021 – Jan 2024",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React Js", "Next Js", "Redux", "Webpack", "TypeScript", "ES6"],
  },
  {
    title: "Mobile",
    items: ["React Native", "React Native Paper", "API Integration"],
  },
  {
    title: "Markup & Styling",
    items: ["HTML5", "CSS3", "Bootstrap 3 / 4", "Responsive UI Design"],
  },
  {
    title: "Other",
    items: ["jQuery", "Ajax", "REST API Services", "Micro-frontends"],
  },
];

const ticker = [
  "React Js", "Next Js", "React Native", "Redux", "Webpack",
  "TypeScript", "ES6", "HTML5", "CSS3", "Bootstrap", "REST APIs",
];

const responsibilities = [
  "Home Loan application using React Native.",
  "Online Medicine application using React Native.",
  "Online Car Servicing Provider application using React Native.",
  "Online Learning web application using React Js.",
  "Online Generator service web application using React Js.",
  "Online Time Tracking web application using React Js.",
];

const education = [
  {
    title: "Graduation (B.Voc)",
    place: "Asutosh College · University of Calcutta",
    year: "2019",
  },
  {
    title: "Higher Secondary (Standard XII)",
    place: "Paschim Putiary Sukharanjan Vidyamandir · W.B.S.C.T.V.E.S.D",
    year: "2016",
  },
  {
    title: "Madhyamik (Standard X)",
    place: "Narendrapur Milan Vidyapith · W.B.B.S.E",
    year: "2010",
  },
];

const extras = [
  { title: "Certification", value: "BASIC (Ramakrishna Mission)" },
  { title: "Course", value: "Web Designing (Oskings Tech Solutions)" },
  { title: "Languages", value: "English · Bengali · Hindi" },
  { title: "Interests", value: "Cricket · Football · Music · Mobile games" },
];

const stats = [
  { value: `${YEARS}+`, label: "Years experience" },
  { value: String(projects.length), label: "Projects shipped" },
  { value: "2", label: "Platforms · Web & Mobile" },
  { value: "3", label: "Portals per product" },
];

function Heading({ no, kicker, children, note }) {
  return (
    <div className="heading reveal">
      <span className="heading-no">{no}</span>
      <div>
        <p className="kicker">{kicker}</p>
        <h2>{children}</h2>
        {note && <p className="heading-note">{note}</p>}
      </div>
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="navbar-wrap">
        <div className="navbar">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">DK</span>
            <span className="brand-name">Debasis Kayal</span>
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a className="nav-cv" href={CV_URL} download onClick={closeMenu}>
              CV ↓
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="hello">
              <span className="wave">👋</span> Hi, I'm Debasis Kayal — based in
              Kolkata, India
            </p>
            <h1>
              <span className="h1-line">I build</span>
              <span className="h1-line">
                <mark>React</mark> &amp;
              </span>
              <span className="h1-line outline">
                Native apps<span className="period">.</span>
              </span>
            </h1>
            <p className="hero-description">
              React and React Native developer with {YEARS}+ years of experience
              shipping responsive web portals, micro-frontends and mobile apps
              with React Js, Next Js, Redux and API integration.
            </p>

            <div className="hero-actions">
              <a className="btn btn-ink" href="#projects">
                See my work <span>↗</span>
              </a>
              <a className="btn btn-lime" href={CV_URL} download>
                Download CV <span>↓</span>
              </a>
              <a className="btn btn-plain" href="#contact">
                Say hello
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Developer illustration">
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path
                    id="badge-circle"
                    d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                  />
                </defs>
                <text>
                  <textPath
                    href="#badge-circle"
                    textLength="272"
                    lengthAdjust="spacing"
                  >
                    OPEN TO WORK • OPEN TO WORK • OPEN TO WORK •{" "}
                  </textPath>
                </text>
              </svg>
              <span className="badge-core">✺</span>
            </div>

            <div className="window">
              <div className="window-top">
                <span className="dot dot-r" />
                <span className="dot dot-y" />
                <span className="dot dot-g" />
                <small>debasis.jsx</small>
              </div>
              <pre>
                <span className="c-key">const</span> <span className="c-var">debasis</span> = {"{"}
                {"\n"}  role: <span className="c-str">"React Developer"</span>,
                {"\n"}  since: <span className="c-num">2019</span>,
                {"\n"}  stack: [
                {"\n"}    <span className="c-str">"React Js"</span>,
                {"\n"}    <span className="c-str">"Next Js"</span>,
                {"\n"}    <span className="c-str">"React Native"</span>,
                {"\n"}  ],
                {"\n"}  coffee: <span className="c-key">true</span>,
                {"\n"}{"}"};
              </pre>
            </div>

            <div className="sticker sticker-one">⚛ React.js</div>
            <div className="sticker sticker-two">Next.js · Redux</div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...ticker, ...ticker, ...ticker].map((item, i) => (
              <span key={i}>
                {item}
                <b>✦</b>
              </span>
            ))}
          </div>
        </div>

        <section className="stats">
          {stats.map((stat) => (
            <div className="stat reveal" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="section about" id="about">
          <Heading no="01" kicker="Get to know me">
            About <em>me</em>
          </Heading>
          <div className="about-grid">
            <div className="about-card reveal">
              <div className="about-avatar">
                <span>DK</span>
              </div>
              <p>Frontend developer</p>
              <small>Kolkata · India</small>
            </div>
            <div className="about-text reveal">
              <h3>Frontend developer focused on useful, reliable products.</h3>
              <p>
                I want to work with a company where I can use my skills, gain
                further experience, and help enhance the company's productivity
                and reputation.
              </p>
              <p>
                Since May 2019 I have been working at Schemaphic Systems (I)
                Pvt. Ltd. on React and React Native products, covering both web
                portals and mobile apps. I completed my B.Voc at Asutosh
                College (University of Calcutta) in 2019.
              </p>
              <div className="facts">
                <div><strong>Web</strong><span>React Js · Next Js</span></div>
                <div><strong>Mobile</strong><span>React Native</span></div>
                <div><strong>Experience</strong><span>May 2019 – Present</span></div>
              </div>
              <div className="hero-actions">
                <a className="btn btn-ink" href={CV_URL} download>
                  Download CV <span>↓</span>
                </a>
                <a
                  className="btn btn-plain"
                  href={CV_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  View CV <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <Heading
            no="02"
            kicker="My toolkit"
            note="Technologies I use to build and maintain applications."
          >
            Technical <em>skills</em>
          </Heading>
          <div className="skills-groups">
            {skillGroups.map((group, i) => (
              <div className={`skill-group tone-${i % 4} reveal`} key={group.title}>
                <h3>
                  <span>{String(i + 1).padStart(2, "0")}</span> {group.title}
                </h3>
                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span className="skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <Heading no="03" kicker="My journey">
            Work <em>experience</em>
          </Heading>
          <div className="job reveal">
            <div className="job-side">
              <span className="job-date">May 2019</span>
              <span className="job-arrow">↓</span>
              <span className="job-date job-now">Present</span>
            </div>
            <div className="job-body">
              <div className="job-top">
                <div>
                  <h3>React &amp; React Native Developer</h3>
                  <p className="company">Schemaphic Systems (I) Pvt. Ltd.</p>
                </div>
                <span className="stamp">{YEARS}+ yrs</span>
              </div>
              <p className="location">Kolkata, India</p>
              <ul>
                {responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <Heading
            no="04"
            kicker="Selected work"
            note="Web portals and mobile applications I have designed and developed using React and React Native."
          >
            Featured <em>projects</em>
          </Heading>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card tone-${index % 4} reveal`}
                key={`${project.name}-${index}`}
              >
                <div className="project-visual">
                  <span className="project-no">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-category">{project.category}</span>
                  <span className="project-symbol">
                    {project.category.startsWith("Mobile") ? "▣" : "</>"}
                  </span>
                </div>
                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="chips">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-foot">
                    <span
                      className={
                        project.status === "Ongoing" ? "status live" : "status"
                      }
                    >
                      {project.status === "Ongoing" && <i />}
                      {project.status}
                    </span>
                    {project.links && (
                      <div className="project-links">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <Heading no="05" kicker="Academic background">
            My <em>education</em>
          </Heading>
          <div className="edu-list">
            {education.map((item) => (
              <div className="edu-row reveal" key={item.title}>
                <span className="edu-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="extras-grid">
            {extras.map((item) => (
              <div className="extra-card reveal" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-box reveal">
            <p className="kicker">Let's connect</p>
            <h2>
              Got a project or <em>opportunity</em> in mind?
            </h2>
            <p className="contact-text">
              I am interested in discussing React Js, Next Js, React Native and
              frontend development opportunities.
            </p>
            <a className="contact-mail" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <div className="hero-actions contact-actions">
              <a className="btn btn-ink" href={`mailto:${EMAIL}`}>
                Email me <span>↗</span>
              </a>
              <a className="btn btn-white" href={CV_URL} download>
                Download CV <span>↓</span>
              </a>
            </div>
            <div className="contact-links">
              {PHONES.map((phone) => (
                <a key={phone} href={`tel:+91${phone}`}>+91 {phone}</a>
              ))}
              <a
                href="https://github.com/debasiskayal1993"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">DK</span>
        </a>
        <p>Designed &amp; built by Debasis Kayal · {CURRENT_YEAR}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
