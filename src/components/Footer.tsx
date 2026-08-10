import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} Juan Camarillo. Desarrollado con React, TypeScript & Tailwind CSS.
        </p>
        <div className="flex space-x-4">
          <a href="#inicio" className="hover:text-emerald-400 transition-colors">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
};