import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [terminalTab, setTerminalTab] = useState<'info' | 'logs'>('info');

  return (
    <section id="inicio" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        
        {/* Información Personal y CTA */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1 rounded-full text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Backend Java Developer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Construyendo arquitecturas backend <span className="text-emerald-400">seguras, robustas y escalables.</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Especializado en el desarrollo de APIs RESTful con <strong className="text-slate-200">Java</strong> y <strong className="text-slate-200">Spring Boot</strong>. Enfocado en arquitectura limpia, persistencia de datos relacional (PostgreSQL, MySQL), seguridad (JWT) y entorno containerizado con Docker.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#proyectos"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-lg shadow-lg shadow-emerald-500/20 transition-all text-sm"
            >
              Explorar Proyectos
            </a>
            <a
              href="#contacto"
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium px-6 py-3 rounded-lg transition-all text-sm"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Simulador de Terminal Spring Boot */}
        <div className="md:col-span-5">
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-xs">
            <div className="bg-slate-800/80 px-4 py-3 flex items-center justify-between border-b border-slate-700/60">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <div className="flex space-x-2 text-slate-400 text-[11px]">
                <button
                  onClick={() => setTerminalTab('info')}
                  className={`px-2 py-0.5 rounded transition-colors ${terminalTab === 'info' ? 'bg-slate-700 text-emerald-400' : 'hover:text-slate-200'}`}
                >
                  app.yml
                </button>
                <button
                  onClick={() => setTerminalTab('logs')}
                  className={`px-2 py-0.5 rounded transition-colors ${terminalTab === 'logs' ? 'bg-slate-700 text-emerald-400' : 'hover:text-slate-200'}`}
                >
                  server.log
                </button>
              </div>
            </div>

            <div className="p-5 text-slate-300 space-y-2 min-h-[220px]">
              {terminalTab === 'info' ? (
                <>
                  <p className="text-emerald-400">$ java -version</p>
                  <p className="text-slate-400">openjdk 17.0.8 2023-07-18 LTS</p>
                  <p className="text-emerald-400">$ mvn spring-boot:run</p>
                  <p className="text-slate-300">
                    <span className="text-emerald-400">[INFO]</span> Initializing Spring Boot v3.2.0...
                  </p>
                  <p className="text-slate-300">
                    <span className="text-emerald-400">[INFO]</span> Tomcat started on port(s): 8080 (http)
                  </p>
                  <p className="text-slate-300">
                    <span className="text-emerald-400">[INFO]</span> Database connection established: PostgreSQL
                  </p>
                  <p className="text-slate-400 italic pt-2">// Ready to accept incoming REST requests</p>
                </>
              ) : (
                <>
                  <p className="text-slate-400">2026-08-10 11:00:01.102 [main] INFO - Starting Application...</p>
                  <p className="text-emerald-400">2026-08-10 11:00:02.415 [http-nio-8080] POST /api/v1/auth/login 200 OK</p>
                  <p className="text-emerald-400">2026-08-10 11:00:03.110 [http-nio-8080] GET /api/v1/products 200 OK</p>
                  <p className="text-blue-400">2026-08-10 11:00:05.890 [http-nio-8080] SecurityFilter: Validated JWT Token</p>
                  <p className="text-emerald-400">2026-08-10 11:00:06.002 [http-nio-8080] POST /api/v1/orders 201 Created</p>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};