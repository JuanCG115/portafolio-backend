export interface Endpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  architectureNotes: string;
  technologies: string[];
  githubUrl: string;
  endpoints: Endpoint[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce API Backend',
    badge: 'Spring Security & JWT',
    description: 'API REST robusta para comercio electrónico con control de acceso basado en roles (RBAC), autenticación mediante tokens JWT y persistencia relacional con PostgreSQL.',
    architectureNotes: 'Diseñada con arquitectura por capas (Controller, Service, Repository, DTO). Las contraseñas están encriptadas con BCrypt y las rutas protegidas mediante SecurityFilterChain de Spring Security.',
    technologies: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'Spring Data JPA', 'PostgreSQL', 'Docker', 'Maven'],
    githubUrl: 'https://github.com/JuanCG115/e-comerce.git',
    endpoints: [
      { method: 'POST', path: '/api/v1/auth/login', description: 'Autenticación de usuario y emisión de Token JWT' },
      { method: 'POST', path: '/api/v1/auth/register', description: 'Registro de nuevos usuarios con rol DEFAULT' },
      { method: 'GET', path: '/api/v1/products', description: 'Catálogo paginado de productos' },
      { method: 'POST', path: '/api/v1/orders', description: 'Creación de órdenes de compra (Ruta Protegida)' }
    ],
    highlights: [
      'Autenticación Stateless con JWT y expiración configurable',
      'Contenedorización lista para producción con Docker Compose',
      'Manejo global de excepciones mediante @ControllerAdvice'
    ]
  },
  {
    id: 'inventory',
    title: 'Inventory Management API',
    badge: 'JUnit 5 & Pruebas Automatizadas',
    description: 'Sistema backend centrado en el control estricto de stock, validación de reglas de negocio complejas y alta cobertura de pruebas unitarias e integración.',
    architectureNotes: 'Aplica el patrón Repository para la capa de acceso a datos y enmascaramiento con DTOs para evitar la exposición de entidades JPA directamente en la API.',
    technologies: ['Java 17', 'Spring Boot 3', 'PostgreSQL', 'Hibernate', 'JUnit 5', 'Mockito', 'Docker', 'Maven'],
    githubUrl: 'https://github.com/JuanCG115/inventory-management-api.git',
    endpoints: [
      { method: 'GET', path: '/api/v1/inventory', description: 'Consulta de stock por almacén' },
      { method: 'POST', path: '/api/v1/inventory/adjust', description: 'Ajuste de inventario con validación de stock mínimo' },
      { method: 'GET', path: '/api/v1/reports/low-stock', description: 'Reporte de artículos bajo el umbral límite' }
    ],
    highlights: [
      'Pruebas unitarias de servicios con JUnit 5 y Mockito',
      'Integración con PostgreSQL y scripts de migración',
      'Garantía de integridad transaccional mediante @Transactional'
    ]
  },
  {
    id: 'to-do',
    title: 'To-Do List API',
    badge: 'REST Clean Architecture',
    description: 'API REST liviana y altamente eficiente para la gestión de tareas, enfocada en la velocidad de respuesta, validación de entradas con Bean Validation y base de datos H2 en memoria.',
    architectureNotes: 'Estructura simplificada pero escalable. Utiliza Bean Validation (@Valid, @NotNull, @Size) para asegurar la calidad de datos de entrada antes de ser procesados por la capa de servicio.',
    technologies: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'Hibernate', 'H2 Database', 'Maven'],
    githubUrl: 'https://github.com/JuanCG115/toDoList.git',
    endpoints: [
      { method: 'GET', path: '/api/v1/todos', description: 'Listado completo de tareas del usuario' },
      { method: 'POST', path: '/api/v1/todos', description: 'Creación de tarea con validaciones Bean Validation' },
      { method: 'PUT', path: '/api/v1/todos/{id}/status', description: 'Actualización del estado de la tarea' },
      { method: 'DELETE', path: '/api/v1/todos/{id}', description: 'Eliminación lógica o física de tarea' }
    ],
    highlights: [
      'Validación de payloads mediante anotaciones de Hibernate Validator',
      'Base de datos H2 con consola activa para pruebas en entorno local',
      'Respuestas HTTP con códigos de estado semánticos estándar (200, 201, 400, 404)'
    ]
  }
];