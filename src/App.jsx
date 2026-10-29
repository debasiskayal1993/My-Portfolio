import { useEffect, useState } from "react";
import "./App.css";

const CV_URL = "/Debasis_Kayal_CV.pdf";
const EMAIL = "debasiskayal1993@gmail.com";
const PHONES = ["9674570862", "6290254046"];
const LINKEDIN = "https://www.linkedin.com/in/debasis-kayal-0408612ba";
const GITHUB = "https://github.com/debasiskayal1993";
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = CURRENT_YEAR - 2019;

const navItems = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const projects = [
  {
    name: "Portolo",
    category: "Web Application",
    domain: "Healthcare research",
    tech: ["React.js", "Redux"],
    description:
      "Web platform for medical research workflows and healthcare solution management, covering organizations, entities, research data, study progress, role-based access, dashboards, and collaboration tools.",
  },
  {
    name: "GetFound",
    category: "Web Application",
    domain: "Service marketplace",
    tech: ["React.js", "Redux"],
    description:
      "Service-provider platform that connects customers with providers and supports service requests, scheduling, and service management.",
  },
  {
    name: "Sanatan Dinda",
    category: "Web Application",
    domain: "Art exhibition",
    tech: ["React.js", "Redux"],
    description:
      "Art exhibition website for showcasing exhibitions and artists' work, and for visitors to browse a range of art.",
  },
  {
    name: "Helofoto",
    category: "Web Application",
    domain: "Camera retail",
    tech: ["React.js", "Redux"],
    description:
      "Camera and lens shop application for browsing and purchasing from nearby stores, with invoice generation and management.",
  },
  {
    name: "Hordanso",
    category: "Web · Micro-frontends",
    domain: "Domain management",
    tech: ["React.js", "Redux", "Webpack", "Micro-frontends"],
    description:
      "Domain marketplace with admin and customer portals for buying and selling domains.",
  },
  {
    name: "AME Electrical Solutions Inc.",
    category: "Web Application",
    domain: "Generator services",
    tech: ["React.js", "Redux"],
    description:
      "Generator service application with an admin portal for service requests, maintenance scheduling, and customer management.",
    links: [{ label: "portal.mtechpower.com", href: "https://portal.mtechpower.com" }],
  },
  {
    name: "Clock Me Now",
    category: "Web Application",
    domain: "Time tracking",
    tech: ["React.js", "Redux"],
    description:
      "Time-capture application for logging and managing work hours.",
    links: [{ label: "dev.clockmenow.com", href: "https://dev.clockmenow.com" }],
  },
  {
    name: "Crestest",
    category: "Web · Learning Platform",
    domain: "Education",
    tech: ["React.js", "Redux"],
    description:
      "Online learning application for school students, with an admin portal for content and a student portal for lessons and resources.",
    links: [
      { label: "LMS", href: "https://lms.crestest.com" },
      { label: "Admin", href: "https://admin.crestest.com" },
      { label: "DAM", href: "https://dam.crestest.com" },
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript",
      "HTML5", "CSS3", "Bootstrap", "jQuery", "Ajax",
    ],
  },
  {
    title: "State & Navigation",
    items: ["Redux Toolkit", "Redux", "Context API", "React Navigation"],
  },
  {
    title: "API & Data",
    items: ["REST API integration", "JSON", "Axios / fetch", "AsyncStorage"],
  },
  {
    title: "Mobile & Tools",
    items: [
      "React Native", "WebView integration", "Android Studio",
      "Git & GitHub", "npm", "Webpack", "VS Code", "Agile / Scrum",
    ],
  },
];

const strengths = [
  {
    title: "Reusable UI",
    value: "Component-based UI development and reusable frontend patterns.",
  },
  {
    title: "Integration",
    value: "Frontend/backend coordination and REST API integration.",
  },
  {
    title: "Quality",
    value: "Debugging, issue resolution, and maintainable implementation.",
  },
  {
    title: "Teamwork",
    value: "Collaboration, task ownership, and iterative delivery.",
  },
];

const ticker = [
  "React.js", "Next.js", "React Native", "Redux Toolkit", "TypeScript",
  "JavaScript", "HTML5", "CSS3", "Bootstrap", "REST APIs", "Webpack",
];

const jobs = [
  {
    role: "Software Developer",
    company: "BEAS Consultancy And Services Private Limited",
    location: "Salt Lake Sector 5, Kolkata",
    from: "Jan 2025",
    to: "Present",
    current: true,
    stamp: "Current",
    points: [
      "Develop and maintain application features using React.js, JavaScript, and React Native.",
      "Build reusable UI components and responsive layouts for web workflows.",
      "Integrate frontend screens with REST APIs and manage application state using Redux.",
      "Debug UI and integration issues and support ongoing feature delivery with the project team.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Schemaphic Systems Pvt. Ltd.",
    location: "Bansdroni, Kolkata",
    from: "May 2019",
    to: "Oct 2024",
    stamp: "5+ yrs",
    points: [
      "Developed and maintained web application interfaces using React.js and JavaScript.",
      "Built reusable UI components and responsive layouts to support consistent user experiences.",
      "Integrated frontend screens with REST APIs and handled application data and state using Redux and related patterns.",
      "Investigated UI and integration issues, debugged application behavior, and supported ongoing maintenance.",
      "Worked with project stakeholders and other developers to implement application requirements and deliver changes.",
      "Contributed to React Native development where required, including mobile UI and API-connected workflows.",
    ],
  },
];

const education = [
  {
    title: "B.Voc. in Software Development",
    place: "Asutosh College, Kolkata · May 2016 – June 2019",
    year: "2019",
  },
  {
    title: "Higher Secondary",
    place: "Paschim Putiary Sukharanjan Vidyamandir, Kolkata · April 2014 – May 2016",
    year: "2016",
  },
  {
    title: "Madhyamik",
    place: "Narendrapur Milan Vidyapith, West Bengal · May 2009 – June 2010",
    year: "2010",
  },
];

const stats = [
  { value: `${YEARS}+`, label: "Years experience" },
  { value: String(projects.length), label: "Projects delivered" },
  { value: "2", label: "Companies" },
  { value: "7", label: "Industries served" },
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
              <span className="wave">👋</span> Hi, I'm Debasis Kayal — Senior
              Frontend Developer, Kolkata
            </p>
            <h1>
              <span className="h1-line">I build</span>
              <span className="h1-line">
                <mark>React</mark>
              </span>
              <span className="h1-line outline">
                web apps<span className="period">.</span>
              </span>
            </h1>
            <p className="hero-description">
              React.js developer with {YEARS}+ years of experience building and
              maintaining web applications, with reusable components, responsive
              UI, Redux state management and REST API integration — plus React
              Native mobile development.
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
                {"\n"}  role: <span className="c-str">"React.js Developer"</span>,
                {"\n"}  since: <span className="c-num">2019</span>,
                {"\n"}  stack: [
                {"\n"}    <span className="c-str">"React.js"</span>,
                {"\n"}    <span className="c-str">"Redux"</span>,
                {"\n"}    <span className="c-str">"Next.js"</span>,
                {"\n"}  ],
                {"\n"}  coffee: <span className="c-key">true</span>,
                {"\n"}{"}"};
              </pre>
            </div>

            <div className="sticker sticker-one">⚛ React.js</div>
            <div className="sticker sticker-two">Redux · TypeScript</div>
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
              <p>Senior Frontend Developer</p>
              <small>Kolkata · West Bengal · India</small>
            </div>
            <div className="about-text reveal">
              <h3>Frontend developer focused on useful, reliable products.</h3>
              <p>
                I'm a React.js developer with {YEARS}+ years of experience (May
                2019 – Present) building and maintaining web applications and
                contributing to React Native mobile development. I focus on
                reusable component design, responsive UI, Redux state
                management, REST API integration, troubleshooting and
                performance-minded implementation.
              </p>
              <p>
                I've delivered product interfaces for healthcare research,
                service marketplaces, art exhibitions, education, domain
                management, camera retail and time tracking — working closely
                with backend, QA and project teams. I completed my B.Voc. in
                Software Development at Asutosh College in 2019.
              </p>
              <div className="facts">
                <div><strong>Web</strong><span>React.js · Next.js</span></div>
                <div><strong>Mobile</strong><span>React Native</span></div>
                <div><strong>Experience</strong><span>May 2019 – Present</span></div>
                <div><strong>Languages</strong><span>English · Hindi · Bengali</span></div>
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
            note="Technologies and practices I use to build and maintain applications."
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
          <div className="extras-grid">
            {strengths.map((item) => (
              <div className="extra-card reveal" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <Heading no="03" kicker="My journey">
            Work <em>experience</em>
          </Heading>
          <div className="jobs">
            {jobs.map((job) => (
              <div className="job reveal" key={job.company}>
                <div className="job-side">
                  <span className="job-date">{job.from}</span>
                  <span className="job-arrow">↓</span>
                  <span className={job.current ? "job-date job-now" : "job-date"}>
                    {job.to}
                  </span>
                </div>
                <div className="job-body">
                  <div className="job-top">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="company">{job.company}</p>
                    </div>
                    <span className="stamp">{job.stamp}</span>
                  </div>
                  <p className="location">{job.location}</p>
                  <ul>
                    {job.points.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <Heading
            no="04"
            kicker="Selected work"
            note="Web applications I have built with React.js and Redux across healthcare, marketplaces, education and more."
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
                    <span className="status">◆ {project.domain}</span>
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
        </section>

        <section className="section" id="contact">
          <div className="contact-box reveal">
            <p className="kicker">Let's connect</p>
            <h2>
              Got a project or <em>opportunity</em> in mind?
            </h2>
            <p className="contact-text">
              I am interested in discussing React.js, Next.js and frontend
              development opportunities.
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
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
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
