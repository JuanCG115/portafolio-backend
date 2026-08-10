import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-emerald-400 font-mono text-xl font-bold">&lt;Java/&gt;</span>
          <span className="font-semibold text-slate-200 tracking-wide text-sm sm:text-base">Backend Dev</span>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <a href="#inicio" className="hover:text-emerald-400 transition-colors">Inicio</a>
          <a href="#sobre-mi" className="hover:text-emerald-400 transition-colors">Sobre Mí</a>
          <a href="#habilidades" className="hover:text-emerald-400 transition-colors">Habilidades</a>
          <a href="#proyectos" className="hover:text-emerald-400 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-emerald-400 transition-colors">Contacto</a>
        </nav>

        <a
          href="https://github.com/JuanCG115"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm px-3.5 py-1.5 rounded-lg border border-slate-700 transition-all"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
};