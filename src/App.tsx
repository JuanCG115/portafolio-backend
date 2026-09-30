import "./App.css";

type Project = {
  method: "GET" | "POST" | "PUT";
  path: string;
  name: string;
  meta: string;
  description: string;
  stack: string[];
  repo: string;
};

const projects: Project[] = [
  {
    method: "GET",
    path: "/projects/techmind-engine",
    name: "TechMind Engine",
    meta: "No Country Hackathon (ONE G9) · Jul–Aug 2026",
    description:
      "Backend Lead for a 7-person cross-functional team. Designed the REST API (7 endpoints, 4 entities) and integrated it with a FastAPI machine-learning service that classifies technical content and recommends resources. Opened 14 pull requests, reviewed and approved 6, across 4 weekly sprints. Deployed on Oracle Cloud with a live demo.",
    stack: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Flyway", "MySQL", "FastAPI"],
    repo: "https://github.com/No-Country-simulation/g9-latam-team19-techmind",
  },
  {
    method: "POST",
    path: "/projects/forohub/auth",
    name: "ForoHub",
    meta: "Alura / Oracle Next Education Challenge · 2026",
    description:
      "Forum REST API with JWT authentication. Built topic CRUD with pagination, course and year filters, and duplicate validation. Modeled 5 entities and versioned the schema with 4 Flyway migrations.",
    stack: ["Spring Security", "JWT", "Spring Data JPA", "MySQL", "Flyway"],
    repo: "https://github.com/JuanCG115/ForoHub",
  },
  {
    method: "PUT",
    path: "/projects/inventory",
    name: "Inventory Management API",
    meta: "2026",
    description:
      "Containerized inventory API with data validation and global exception handling. Unit and service-layer tests with JUnit 5 and Mockito, runnable inside Docker. Docker Compose starts the API and PostgreSQL with one command.",
    stack: ["Spring Boot 3", "PostgreSQL", "JUnit 5", "Mockito", "Docker Compose"],
    repo: "https://github.com/JuanCG115/inventory-management-api",
  },
  {
    method: "POST",
    path: "/projects/e-commerce",
    name: "E-Commerce API",
    meta: "2026",
    description:
      "REST API with JWT-based registration and login, a product catalog, and reviews with average rating, containerized with Docker Compose.",
    stack: ["Spring Boot", "Spring Security", "PostgreSQL", "Docker Compose"],
    repo: "https://github.com/JuanCG115/e-comerce",
  },
];

const otherProjects = [
  {
    name: "LiteraLura",
    note: "Console app consuming the Gutendex API, PostgreSQL, Java Streams",
    repo: "https://github.com/JuanCG115/Literalura-Challenge",
  },
  {
    name: "SoftEngine 3D",
    note: "Software 3D rendering engine in C# — tutorial-based, extended with a custom .obj parser and multi-core rendering",
    repo: "https://github.com/JuanCG115/SoftEngine",
  },
  {
    name: "Facial-Recognition Attendance",
    note: "Attendance logger with OpenCV face matching — course-based",
    repo: "https://github.com/JuanCG115/AssistanceController",
  },
];

const stackGroups: { label: string; items: string[] }[] = [
  { label: "Backend", items: ["Java 17", "Spring Boot 3", "Spring Data JPA", "Hibernate", "REST APIs", "Microservices"] },
  { label: "AI & ML", items: ["ML service integration", "FastAPI", "Text embeddings", "NLP classification", "OpenCV"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "Flyway"] },
  { label: "Testing & security", items: ["JUnit 5", "Mockito", "Spring Security", "JWT"] },
  { label: "DevOps & cloud", items: ["Docker", "Docker Compose", "Git/GitHub", "Oracle Cloud (OCI)"] },
];

const experience = [
  {
    role: "Process Engineering Intern",
    org: "Flex",
    time: "May 2023 – Nov 2023",
    detail: "Analyzed processes, optimized workflows, and resolved technical incidents in operational environments.",
  },
  {
    role: "Software Developer",
    org: "Centro de Investigaciones en Óptica (CIO)",
    time: "Sep 2022 – Jan 2023",
    detail:
      "Designed and administered relational MySQL databases (6 tables) for secure corporate data processing. Built Java web applications used by 4 departments.",
  },
];

function MethodBadge({ method }: { method: Project["method"] }) {
  return <span className={`method method-${method.toLowerCase()}`}>{method}</span>;
}

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-copy">
          <p className="kicker">Aguascalientes, Mexico — open to remote roles</p>
          <h1>
            Juan Camarillo builds backend systems <em>that talk to AI as easily as they talk to a database.</em>
          </h1>
          <p className="hero-sub">
            Entry-level Java &amp; Spring Boot engineer. OCI Foundations Associate. Backend Lead on a
            hackathon team that shipped an AI-integrated prototype with a live demo.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="mailto:camarillo.g.juan@gmail.com">
              Get in touch
            </a>
            <a className="btn-ghost" href="/CV_Juan_Camarillo_Backend_EN.pdf" target="_blank" rel="noreferrer">
              Download résumé
            </a>
          </div>
        </div>

        <div className="console" aria-hidden="true">
          <div className="console-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <pre className="console-body">
{`GET /juan/profile

200 OK
{
  "role": "Java Backend Developer (Jr)",
  "stack": ["Java 17", "Spring Boot 3", "PostgreSQL", "Docker"],
  "certifications": ["OCI Foundations Associate"],
  "location": "Aguascalientes, MX",
  "status": "open_to_work"
}`}
          </pre>
        </div>
      </header>

      <section className="section">
        <h2>About</h2>
        <p className="lead">
          I'm a Java backend developer with a Spring Boot 3 foundation, an Oracle Next Education
          specialization, and an OCI Foundations Associate certification. At the No Country hackathon
          I led the backend of a 7-person team that connected a Spring Boot API to a machine-learning
          service — the project that pointed me toward AI engineering. I write secure, tested APIs and
          I'm comfortable being the person who asks a clarifying question before shipping the wrong thing.
        </p>
      </section>

      <section className="section">
        <h2>Stack</h2>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <div className="stack-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="routes">
          {projects.map((project) => (
            <article className="route" key={project.path}>
              <div className="route-line">
                <MethodBadge method={project.method} />
                <code className="path">{project.path}</code>
              </div>
              <div className="route-body">
                <div className="route-heading">
                  <h3>{project.name}</h3>
                  <span className="meta">{project.meta}</span>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a className="repo-link" href={project.repo} target="_blank" rel="noreferrer">
                  View repository
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="other-projects">
          <h3>Other projects</h3>
          <ul>
            {otherProjects.map((p) => (
              <li key={p.name}>
                <a href={p.repo} target="_blank" rel="noreferrer">
                  {p.name}
                </a>
                <span>{p.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.role}>
              <div className="timeline-marker" />
              <div>
                <h3>{job.role}</h3>
                <span className="meta">
                  {job.org} · {job.time}
                </span>
                <p>{job.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2>Education &amp; certifications</h2>
        <ul className="plain-list">
          <li>
            <strong>Backend Java Specialization</strong> — Alura Latam / Oracle Next Education (400+ hours), Jul 2025–Jun 2026
          </li>
          <li>
            <strong>Oracle Cloud Infrastructure (OCI) Foundations Associate</strong> — Oracle University, Sep 2025–Sep 2027
          </li>
          <li>
            <strong>B.S. in Robotics Engineering</strong> — Universidad Autónoma de Aguascalientes, Aug 2018–Dec 2022
          </li>
        </ul>
      </section>

      <footer className="footer">
        <div>
          <p className="footer-kicker">Let's build something</p>
          <a className="footer-email" href="mailto:camarillo.g.juan@gmail.com">
            camarillo.g.juan@gmail.com
          </a>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/juan-camarillo-gutierrez/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/JuanCG115" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/CV_Juan_Camarillo_Backend_EN.pdf" target="_blank" rel="noreferrer">
            Résumé (PDF)
          </a>
        </div>
      </footer>
    </div>
  );
}
