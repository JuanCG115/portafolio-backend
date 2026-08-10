import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center justify-center gap-2">
            <span className="text-emerald-400 font-mono">//</span> ¿Hablamos?
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Estoy abierto a nuevas oportunidades profesionales, proyectos colaborativos o consultas técnicas sobre desarrollo Backend en Java y Spring Boot.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {/* Correo */}
          <a
            href="mailto:camarillo.g.juan@gmail.com"
            className="p-4 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-xl transition-all flex flex-col items-center justify-center group"
          >
            <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-400 transition-colors">Correo Electrónico</span>
            <span className="text-sm font-semibold text-slate-200 mt-1">Enviar un mensaje</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/juan-camarillo-gutierrez"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-xl transition-all flex flex-col items-center justify-center group"
          >
            <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-400 transition-colors">LinkedIn</span>
            <span className="text-sm font-semibold text-slate-200 mt-1">Conectar en LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};