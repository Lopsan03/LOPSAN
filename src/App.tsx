import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  BarChart3, 
  Layers, 
  Zap, 
  Users, 
  Mail, 
  MapPin,
  ChevronRight,
  AlertCircle,
  Clock,
  Database,
  Search,
  Cpu,
  LineChart,
  ShieldCheck,
  Smartphone,
  ChevronDown,
  X,
  Check,
  Compass,
  Headphones,
  Code,
  TrendingUp,
  Target,
  Phone
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl tracking-tight text-white">LOPSAN</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#problem" className="hover:text-white transition-colors">Problema</a>
        <a href="#approach" className="hover:text-white transition-colors">Solución</a>
        <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
        <a href="#process" className="hover:text-white transition-colors">Proceso</a>
        <a href="#team" className="hover:text-white transition-colors">Equipo</a>
        <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
      </div>
      <a 
        href="#contact" 
        className="bg-white text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white/90 transition-colors"
      >
        Agendar reunión
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-white px-6 pt-20 relative overflow-hidden bg-dot-grid">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark/50" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent opacity-50" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl text-center relative z-10"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-12 text-white/70">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        Transformación Digital Operativa
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-10">
        De procesos manuales a una <span className="text-brand-accent">plataforma inteligente</span> de gestión operativa
      </h1>
      
      <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 max-w-4xl mx-auto">
        Diseñamos, construimos y evolucionamos sistemas operativos personalizados para empresas que gestionan maquinaria, activos y operaciones industriales.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-32">
        <button className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-accent/90 transition-all">
          Iniciar transformación digital <ArrowRight size={18} />
        </button>
        <button className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-colors">
          Conocer el Roadmap
        </button>
      </div>
    </motion.div>

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[10px] font-bold tracking-widest uppercase">
      <span>Descubre más</span>
      <ChevronDown size={16} className="animate-bounce" />
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="problem" className="py-32 px-6 bg-brand-bg">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ink/40 mb-6">La Realidad Actual</h2>
      <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-brand-ink mb-8">
        El costo de operar sin estructura
      </h3>
      <p className="text-lg text-brand-ink/50 mb-20 max-w-2xl mx-auto">
        Muchas empresas tradicionales operan con herramientas desconectadas que limitan su crecimiento y eficiencia operativa.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: "Fragmentación", 
            desc: "Información dispersa entre Excel, WhatsApp, correos y plataformas desconectadas. Sin una fuente única de verdad.",
            icon: <Layers size={24} />
          },
          { 
            title: "Ineficiencia", 
            desc: "Procesos manuales dependientes del seguimiento humano. Errores, retrasos y fricción operativa constante.",
            icon: <Clock size={24} />
          },
          { 
            title: "Falta de Visibilidad", 
            desc: "Sin datos estructurados. Sin métricas en tiempo real. Decisiones basadas en intuición, no en información.",
            icon: <AlertCircle size={24} />
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-12 rounded-3xl border border-brand-ink/5 shadow-sm text-left group hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center mb-8 text-brand-ink/30 group-hover:text-brand-accent transition-colors">
              {item.icon}
            </div>
            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
            <p className="text-brand-ink/50 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ApproachSection = () => (
  <section id="approach" className="py-32 px-6 bg-brand-dark text-white relative overflow-hidden bg-dot-grid">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">El Enfoque LOPSAN</h2>
      <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
        Tres pilares de transformación
      </h3>
      <p className="text-lg text-white/40 mb-20 max-w-2xl mx-auto">
        No vendemos software genérico. Diseñamos y construimos sistemas operativos a la medida de cada negocio.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Centralización",
            subtitle: "Una sola fuente de verdad",
            items: ["Una plataforma operativa unificada", "Datos y procesos consolidados", "Eliminación de silos de información"],
            icon: <Database size={24} className="text-brand-accent" />
          },
          {
            title: "Automatización",
            subtitle: "Eficiencia sin fricción",
            items: ["Eliminación de tareas manuales", "Flujos de trabajo inteligentes", "Reducción de errores y tiempos"],
            icon: <Zap size={24} className="text-brand-accent" />
          },
          {
            title: "Inteligencia",
            subtitle: "Decisiones informadas",
            items: ["Datos operativos estructurados", "Dashboards y métricas en tiempo real", "Visibilidad estratégica completa"],
            icon: <BarChart3 size={24} className="text-brand-accent" />
          }
        ].map((pillar, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-12 bg-white/5 border border-white/5 rounded-3xl text-left cursor-default"
          >
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8">
              {pillar.icon}
            </div>
            <h4 className="text-2xl font-bold mb-2">{pillar.title}</h4>
            <p className="text-brand-accent text-sm font-medium mb-8">{pillar.subtitle}</p>
            <ul className="space-y-4">
              {pillar.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const RoadmapSection = () => {
  const [activePhase, setActivePhase] = useState(4); // Phase 5 (index 4) as in image

  const phases = [
    {
      id: "01",
      title: "Diagnóstico y Arquitectura Digital",
      obj: "Entender la operación actual y diseñar la arquitectura digital futura.",
      include: ["Auditoría de procesos", "Mapeo de flujo de rentas", "Identificación de cuellos de botella", "Hoja de ruta tecnológica"],
      deliverables: ["Documento de evaluación", "Arquitectura de sistema propuesta", "Plan de implementación por fases"]
    },
    {
      id: "02",
      title: "Plataforma Comercial Inteligente",
      obj: "Digitalizar y automatizar el proceso comercial y de rentas.",
      include: ["Catálogo digital de equipos", "Disponibilidad en tiempo real", "Cotizaciones automáticas", "Integración WhatsApp"],
      deliverables: ["Módulo comercial activo", "Base de datos de clientes", "Sistema de cotización digital"]
    },
    {
      id: "03",
      title: "Núcleo Operativo Digital",
      obj: "Estructurar la operación interna y los datos.",
      include: ["Gestión de activos (ID, ROI, historial)", "Gestión de rentas y facturación", "Mantenimiento preventivo/correctivo"],
      deliverables: ["Plataforma operativa central", "Módulo de mantenimiento", "Control de inventario digital"]
    },
    {
      id: "04",
      title: "Inteligencia y Control Ejecutivo",
      obj: "Convertir datos operativos en decisiones estratégicas.",
      include: ["Dashboards de utilización", "Proyecciones de ingresos", "Rentabilidad por activo", "Costos de mantenimiento"],
      deliverables: ["Tablero de control ejecutivo", "Reportes automatizados", "Análisis de rentabilidad"]
    },
    {
      id: "05",
      title: "Partner Tecnológico Continuo",
      obj: "Evolución y optimización a largo plazo.",
      include: ["Soporte técnico continuo", "Mantenimiento de plataforma", "Hosting", "Optimización continua", "Nuevos módulos", "Expansión de automatizaciones", "Integraciones (ERP, CRM, facturación)", "Guía estratégica digital"],
      deliverables: ["Relación tecnológica de largo plazo", "Evolución constante del sistema"]
    }
  ];

  return (
    <section id="roadmap" className="py-32 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ink/40 mb-6">Metodología</h2>
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Roadmap de Transformación</h3>
          <p className="text-lg text-brand-ink/50 max-w-2xl mx-auto">
            Un modelo por fases que garantiza resultados progresivos y un camino claro hacia la transformación completa.
          </p>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
          <div className="space-y-3">
            {phases.map((phase, i) => (
              <button 
                key={i}
                onClick={() => setActivePhase(i)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all text-left ${
                  activePhase === i 
                    ? "bg-brand-dark border-brand-dark text-white shadow-lg" 
                    : "bg-white border-brand-ink/5 text-brand-ink/40 hover:border-brand-ink/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-bold font-mono ${activePhase === i ? "text-white/40" : "text-brand-ink/20"}`}>{phase.id}</span>
                  <span className="font-bold text-sm">{phase.title}</span>
                </div>
                <ChevronRight size={16} className={activePhase === i ? "text-white/40" : "text-brand-ink/20"} />
              </button>
            ))}
          </div>

          <motion.div 
            key={activePhase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 rounded-3xl border border-brand-ink/5 shadow-sm min-h-[500px]"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center text-white">
                <Users size={32} />
              </div>
              <div>
                <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-1">Fase {phases[activePhase].id}</div>
                <h4 className="text-3xl font-bold">{phases[activePhase].title}</h4>
              </div>
            </div>

            <div className="mb-10">
              <h5 className="text-xs font-bold uppercase tracking-widest text-brand-ink/30 mb-4">Objetivo</h5>
              <p className="text-xl text-brand-ink/60">{phases[activePhase].obj}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-brand-ink/30 mb-6">Incluye</h5>
                <ul className="space-y-4">
                  {phases[activePhase].include.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-brand-ink/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-brand-ink/30 mb-6">Entregables</h5>
                <ul className="space-y-4">
                  {phases[activePhase].deliverables.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-brand-ink/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-ink/20 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => (
  <section className="py-32 px-6 bg-brand-bg">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ink/40 mb-6">Transformación</h2>
      <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Antes vs Después</h3>
      <p className="text-lg text-brand-ink/50 mb-20 max-w-2xl mx-auto">
        El contraste entre la operación tradicional y la operación transformada con LOPSAN.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="bg-white/50 border border-brand-ink/5 p-12 rounded-3xl text-left cursor-default"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-10 bg-brand-ink/10 rounded-full flex items-center justify-center text-brand-ink/40">
              <X size={20} />
            </div>
            <h4 className="text-2xl font-bold">Realidad Tradicional</h4>
          </div>
          <ul className="space-y-8">
            {[
              "Cotizaciones manuales vía WhatsApp/email",
              "Seguimiento basado en Excel",
              "Seguimiento dependiente de memoria humana",
              "Baja visibilidad de activos e ingresos",
              "Operación reactiva"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-brand-ink/40 text-sm">
                <div className="w-6 h-6 bg-brand-ink/5 rounded-full flex items-center justify-center shrink-0">
                  <X size={12} />
                </div>
                {text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.15)" }}
          transition={{ duration: 0.2 }}
          className="bg-brand-dark p-12 rounded-3xl text-left text-white relative overflow-hidden cursor-default bg-dot-grid"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-center gap-4 mb-12 relative z-10">
            <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white">
              <Check size={20} />
            </div>
            <h4 className="text-2xl font-bold">Con LOPSAN</h4>
          </div>
          <ul className="space-y-8 relative z-10">
            {[
              "Catálogo digital con disponibilidad en tiempo real",
              "Reservas y contratos automatizados",
              "Plataforma centralizada de activos",
              "Dashboards ejecutivos en tiempo real",
              "Operación estructurada y escalable"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-white/60 text-sm">
                <div className="w-6 h-6 bg-brand-accent/20 rounded-full flex items-center justify-center shrink-0 text-brand-accent">
                  <Check size={12} />
                </div>
                {text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section id="process" className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ink/40 mb-6">Cómo Trabajamos</h2>
      <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Un proceso claro y estructurado</h3>
      <p className="text-lg text-brand-ink/50 mb-24 max-w-2xl mx-auto">
        LOPSAN no entrega software — construye relaciones tecnológicas de largo plazo.
      </p>

      <div className="grid md:grid-cols-3 gap-16 relative">
        <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-brand-ink/5 z-0" />
        
        {[
          {
            title: "Diagnóstico y Diseño",
            items: ["Reuniones estratégicas", "Mapeo de procesos", "Definición de prioridades", "Arquitectura digital personalizada"],
            icon: <Compass size={32} />
          },
          {
            title: "Implementación por Fases",
            items: ["Desarrollo modular", "Automatización progresiva", "Capacitación del equipo", "Resultados visibles desde el inicio"],
            icon: <Layers size={32} />
          },
          {
            title: "Soporte Continuo",
            items: ["Soporte técnico", "Optimización constante", "Nuevas integraciones", "Evolución estratégica"],
            icon: <Headphones size={32} />
          }
        ].map((step, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 cursor-default"
          >
            <div className="w-24 h-24 bg-brand-dark rounded-3xl flex items-center justify-center text-white mx-auto mb-10 relative shadow-lg group-hover:shadow-brand-accent/20 transition-shadow">
              {step.icon}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-accent rounded-full border-4 border-white flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
            </div>
            <h4 className="text-2xl font-bold mb-8">{step.title}</h4>
            <ul className="space-y-4">
              {step.items.map((item, j) => (
                <li key={j} className="text-sm text-brand-ink/40">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section id="team" className="py-32 px-6 bg-brand-dark text-white relative overflow-hidden bg-dot-grid">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Equipo</h2>
      <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Expertos en transformación</h3>
      <p className="text-lg text-white/40 mb-24 max-w-3xl mx-auto">
        Combinamos estrategia operativa, ejecución tecnológica e inteligencia de negocios para transformar operaciones tradicionales en plataformas inteligentes.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { name: "Javier", role: "Estrategia Operativa", icon: <Target size={32} /> },
          { name: "David", role: "Arquitectura Tecnológica", icon: <Code size={32} /> },
          { name: "Luis", role: "Inteligencia de Negocios", icon: <TrendingUp size={32} /> }
        ].map((member, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-12 rounded-3xl group hover:bg-white/10 transition-colors">
            <div className="w-20 h-20 bg-brand-accent rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
              {member.icon}
            </div>
            <h4 className="text-3xl font-bold mb-2">{member.name}</h4>
            <p className="text-brand-accent text-sm font-medium">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8 text-xs font-bold tracking-widest uppercase text-white/30">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-accent" />
          Estrategia Operativa
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-accent" />
          Ejecución Tecnológica
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-accent" />
          Inteligencia de Negocios
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-32 px-6 bg-brand-bg">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_500px] gap-20 items-start">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ink/40 mb-6">Contacto</h2>
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-brand-ink mb-8 leading-tight">
            La transformación <br />
            comienza con una <br />
            <span className="text-brand-accent">decisión estratégica</span>
          </h3>
          <p className="text-xl text-brand-ink/50 mb-12 max-w-xl">
            Agenda una reunión estratégica para evaluar cómo podemos transformar tu operación en una plataforma digital inteligente.
          </p>

          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-ink/30 shadow-sm border border-brand-ink/5">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-brand-ink/30 uppercase tracking-widest mb-1">Email</div>
                <div className="font-bold">contacto@lopsan.mx</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-ink/30 shadow-sm border border-brand-ink/5">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-brand-ink/30 uppercase tracking-widest mb-1">Ubicación</div>
                <div className="font-bold">Monterrey, México</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-brand-ink/5 shadow-sm max-w-md">
            <h4 className="font-bold mb-4">¿Por qué agendar?</h4>
            <p className="text-sm text-brand-ink/50 leading-relaxed">
              Una sesión inicial sin compromiso para entender tu operación actual, identificar oportunidades de mejora y explorar si LOPSAN es el partner tecnológico adecuado para tu empresa.
            </p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-3xl border border-brand-ink/5 shadow-xl">
          <h4 className="text-2xl font-bold mb-10">Agendar reunión estratégica</h4>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest">Nombre completo</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full bg-brand-bg border border-brand-ink/5 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest">Empresa</label>
                <input 
                  type="text" 
                  placeholder="Nombre de tu empresa" 
                  className="w-full bg-brand-bg border border-brand-ink/5 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="w-full bg-brand-bg border border-brand-ink/5 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest">Teléfono</label>
                <input 
                  type="tel" 
                  placeholder="+52 (81) 0000-0000" 
                  className="w-full bg-brand-bg border border-brand-ink/5 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest">¿Cómo podemos ayudarte?</label>
              <textarea 
                placeholder="Cuéntanos brevemente sobre tu operación actual y los desafíos que enfrentas..." 
                rows={4}
                className="w-full bg-brand-bg border border-brand-ink/5 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors resize-none"
              />
            </div>
            <button className="w-full bg-brand-dark text-white font-bold py-5 rounded-xl hover:bg-brand-dark/90 transition-all flex items-center justify-center gap-2 group">
              Iniciar transformación digital <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-brand-ink/5 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight">LOPSAN</span>
      </div>
      <div className="text-sm text-brand-ink/30">
        © {new Date().getFullYear()} LOPSAN. Transformación Digital Operativa.
      </div>
      <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-brand-ink/40">
        <a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-brand-accent transition-colors">Privacidad</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ApproachSection />
        <RoadmapSection />
        <ComparisonSection />
        <ProcessSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

