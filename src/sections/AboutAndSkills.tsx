import React from 'react';

interface SkillCategory {
  title: string;
  skills: { name: string; level: string }[];
}

export const AboutAndSkills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Backend Core',
      skills: [
        { name: 'Java 17+', level: 'Intermedio' },
        { name: 'Spring Boot 3', level: 'Intermedio' },
        { name: 'Spring Security & JWT', level: 'Intermedio' },
        { name: 'Spring Data JPA', level: 'Intermedio' },
        { name: 'APIs RESTful', level: 'Intermedio' },
        { name: 'JUnit 5 & Mockito', level: 'Básico-Intermedio' }
      ]
    },
    {
      title: 'Bases de Datos & Persistencia',
      skills: [
        { name: 'PostgreSQL', level: 'Intermedio' },
        { name: 'MySQL', level: 'Intermedio' },
        { name: 'Hibernate / ORM', level: 'Intermedio' },
        { name: 'Diseño de Schemas Relacionales', level: 'Intermedio' },
        { name: 'H2 Database', level: 'Intermedio' }
      ]
    },
    {
      title: 'Herramientas, DevOps & Lenguajes Adicionales',
      skills: [
        { name: 'Docker & Docker Compose', level: 'Básico-Intermedio' },
        { name: 'Git & GitHub Workflow', level: 'Intermedio' },
        { name: 'Maven', level: 'Básico-Intermedio' },
        { name: 'Postman / Swagger (OpenAPI)', level: 'Intermedio' },
        { name: 'Python (FastAPI / Django)', level: 'Intermedio' },
        { name: 'TypeScript / React', level: 'Básico-Intermedio' }
      ]
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Sobre Mí */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center gap-2">
              <span className="text-emerald-400 font-mono">//</span> Sobre Mí
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1">Especialización & Perfil Técnico</p>
          </div>

          <div className="md:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Soy un desarrollador de software centrado en la construcción de sistemas backend eficientes, mantenibles y bien estructurados. Mi tecnología principal es <strong className="text-slate-100">Java con Spring Boot</strong>, enfoque con el que diseño APIs RESTful preparadas para producción.
            </p>
            <p>
              Me apasiona aplicar buenas prácticas de diseño de software (Clean Architecture, Principios SOLID, Patrones de Diseño) para garantizar que las aplicaciones no solo resuelvan un problema técnico, sino que sean fáciles de escalar, testear y mantener en el tiempo.
            </p>
            <p>
              Cuento con experiencia integrando autenticación y autorización mediante tokens JWT, manejo seguro de bases de datos relacionales con JPA/Hibernate, y despliegue local mediante contenedores Docker.
            </p>
          </div>
        </div>

        {/* Habilidades Técnicas */}
        <div id="habilidades" className="space-y-8 pt-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center gap-2">
              <span className="text-emerald-400 font-mono">//</span> Habilidades Técnicas
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1">Tecnologías y herramientas que domino</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-emerald-400 font-semibold text-base mb-4 border-b border-slate-800 pb-2">
                    {cat.title}
                  </h3>
                  <ul className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/60">
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};