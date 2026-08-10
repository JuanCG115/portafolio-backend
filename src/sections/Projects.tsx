import React, { useState } from 'react';
import { projects, type Project, type Endpoint } from '../data/projectsData';

export const Projects: React.FC = () => {
  // Estado para la simulación de petición REST
  const [selectedProject, setSelectedProject] = useState<string>(projects[0].id);
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint>(projects[0].endpoints[0]);
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [responseOutput, setResponseOutput] = useState<string | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project.id);
    setSelectedEndpoint(project.endpoints[0]);
    setResponseOutput(null);
  };

  const handleSelectEndpoint = (endpoint: Endpoint) => {
    setSelectedEndpoint(endpoint);
    setResponseOutput(null);
  };

  const handleSimulateRequest = () => {
    setIsTesting(true);
    setResponseOutput(null);

    setTimeout(() => {
      setIsTesting(false);
      let mockData = {};

      if (selectedEndpoint.path.includes('login')) {
        mockData = {
          status: 200,
          message: "Autenticación exitosa",
          token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyQGV4YW1wbGUuY29tIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTY5MzQ1Njc4OX0...",
          type: "Bearer",
          expiresIn: "86400s"
        };
      } else if (selectedEndpoint.path.includes('register')) {
        mockData = {
          status: 201,
          message: "Usuario registrado correctamente",
          userId: "usr_98f2a17b",
          email: "nuevo.usuario@example.com",
          role: "ROLE_USER"
        };
      } else if (selectedEndpoint.path.includes('products')) {
        mockData = {
          status: 200,
          totalElements: 24,
          totalPages: 3,
          page: 0,
          size: 10,
          content: [
            { id: "prod_01", name: "Laptop Developer Pro 16", price: 1499.99, stock: 15 },
            { id: "prod_02", name: "Teclado Mecánico Custom Silent", price: 129.50, stock: 42 }
          ]
        };
      } else if (selectedEndpoint.path.includes('orders')) {
        mockData = {
          status: 201,
          orderId: "ord_2026_88921",
          customerEmail: "cliente@domain.com",
          totalAmount: 1629.49,
          orderStatus: "PROCESSING",
          createdAt: new Date().toISOString()
        };
      } else if (selectedEndpoint.path.includes('adjust')) {
        mockData = {
          status: 200,
          warehouseId: "wh_mx_01",
          sku: "ITEM-7721",
          previousStock: 50,
          adjustedStock: 45,
          adjustedBy: "admin_user"
        };
      } else {
        mockData = {
          status: 200,
          timestamp: new Date().toISOString(),
          path: selectedEndpoint.path,
          response: "Petición ejecutada correctamente con respuesta 200 OK"
        };
      }

      setResponseOutput(JSON.stringify(mockData, null, 2));
    }, 600);
  };

  const getMethodBadgeColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-emerald-950 text-emerald-400 border-emerald-800';
      case 'POST': return 'bg-blue-950 text-blue-400 border-blue-800';
      case 'PUT': return 'bg-amber-950 text-amber-400 border-amber-800';
      case 'DELETE': return 'bg-rose-950 text-rose-400 border-rose-800';
      default: return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const activeProject = projects.find(p => p.id === selectedProject) || projects[0];

  return (
    <section id="proyectos" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-emerald-400 font-mono">//</span> Proyectos Destacados
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            APIs RESTful diseñadas con Spring Boot y arquitectura por capas
          </p>
        </div>

        {/* Selector de Proyecto */}
        <div className="flex space-x-2 border-b border-slate-800 overflow-x-auto pb-2">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => handleSelectProject(proj)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all whitespace-nowrap ${
                selectedProject === proj.id
                  ? 'bg-slate-800 text-emerald-400 border-t-2 border-emerald-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Tarjeta de Detalle del Proyecto */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-slate-100">{activeProject.title}</h3>
                <span className="bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs px-2.5 py-0.5 rounded-full font-mono">
                  {activeProject.badge}
                </span>
              </div>
              <p className="text-slate-400 text-sm mt-2 max-w-3xl leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            <a
              href={activeProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-4 py-2.5 rounded-lg border border-slate-700 transition-all self-start md:self-auto"
            >
              <span>Ver Código en GitHub</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>

          {/* Tecnologías & Arquitectura */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Stack Tecnológico</h4>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded font-mono border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Notas de Arquitectura</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeProject.architectureNotes}
              </p>
            </div>
          </div>

          {/* Probador Interactivo de Endpoints (REST Client Simulator) */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <span>⚡ Probador de Endpoints REST</span>
                <span className="text-[11px] font-mono text-slate-500 font-normal">(Simulador en tiempo real)</span>
              </h4>
            </div>

            <div className="grid md:grid-cols-12 gap-6 items-start">
              
              {/* Lista de Endpoints */}
              <div className="md:col-span-5 space-y-2">
                <p className="text-xs text-slate-400 mb-2 font-mono">Selecciona una ruta para probar:</p>
                {activeProject.endpoints.map((ep, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectEndpoint(ep)}
                    className={`w-full text-left p-3 rounded-lg border text-xs font-mono transition-all flex items-center justify-between ${
                      selectedEndpoint.path === ep.path
                        ? 'bg-slate-800 border-emerald-500/60 text-slate-100 shadow-sm'
                        : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${getMethodBadgeColor(ep.method)}`}>
                        {ep.method}
                      </span>
                      <span className="truncate">{ep.path}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Visor de Respuesta / Consola REST */}
              <div className="md:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2 truncate">
                    <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${getMethodBadgeColor(selectedEndpoint.method)}`}>
                      {selectedEndpoint.method}
                    </span>
                    <span className="text-slate-200 truncate">{selectedEndpoint.path}</span>
                  </div>

                  <button
                    onClick={handleSimulateRequest}
                    disabled={isTesting}
                    className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 text-slate-950 text-xs font-sans font-bold px-3 py-1.5 rounded transition-all flex items-center space-x-1.5 shrink-0"
                  >
                    {isTesting ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <span>Ejecutar</span>
                        <span>▶</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  {selectedEndpoint.description}
                </p>

                <div className="bg-slate-900 p-3 rounded border border-slate-800 min-h-[140px] max-h-[220px] overflow-y-auto">
                  {isTesting ? (
                    <div className="flex items-center justify-center h-28 text-slate-400 text-xs">
                      <span className="animate-pulse">Consultando servidor Spring Boot...</span>
                    </div>
                  ) : responseOutput ? (
                    <pre className="text-emerald-400 text-[11px] leading-relaxed whitespace-pre-wrap font-mono">
                      {responseOutput}
                    </pre>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-28 text-slate-500 text-[11px] text-center">
                      <span>Haz clic en "Ejecutar ▶" para simular la petición HTTP</span>
                      <span className="text-[10px] text-slate-600 mt-1">Status Code: 200 OK mock</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};