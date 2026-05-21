import { createFileRoute } from "@tanstack/react-router";
import heroClinic from "@/assets/hero-clinic.jpg";
import smileImg from "@/assets/smile.jpg";
import {
  Sparkles, Smile, Stethoscope, Baby, ShieldCheck, HeartPulse,
  MapPin, Phone, Mail, Clock, Calendar, Check, Star, ArrowRight, Menu
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

const services = [
  { icon: Sparkles, title: "Estética dental", desc: "Blanqueamiento, carillas y diseño de sonrisa." },
  { icon: ShieldCheck, title: "Implantes", desc: "Soluciones permanentes con tecnología avanzada." },
  { icon: Smile, title: "Ortodoncia", desc: "Brackets tradicionales e invisibles (Invisalign)." },
  { icon: Baby, title: "Odontopediatría", desc: "Cuidado dental especializado para los más pequeños." },
  { icon: Stethoscope, title: "Endodoncia", desc: "Tratamientos de conducto precisos e indoloros." },
  { icon: HeartPulse, title: "Periodoncia", desc: "Salud de encías y prevención avanzada." },
];

const schedule = [
  { day: "Lunes – Viernes", hours: "09:00 – 14:00 · 16:00 – 20:30" },
  { day: "Sábado", hours: "10:00 – 14:00" },
  { day: "Domingo", hours: "Cerrado" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="size-9 rounded-xl grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
              <Smile className="size-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-semibold">Aqua<span className="text-primary">Dental</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#servicios" className="hover:text-primary transition">Servicios</a>
            <a href="#nosotros" className="hover:text-primary transition">Nosotros</a>
            <a href="#horarios" className="hover:text-primary transition">Horarios</a>
            <a href="#contacto" className="hover:text-primary transition">Contacto</a>
          </nav>
          <a href="#contacto" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:opacity-90 transition">
            <Calendar className="size-4" /> Pedir cita
          </a>
          <button className="md:hidden"><Menu /></button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 -z-0 opacity-40" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.78 0.12 170 / 0.4), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.85 0.08 180 / 0.4), transparent 50%)"
        }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-primary border border-primary/20">
              <Sparkles className="size-3.5" /> Clínica dental certificada
            </span>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl font-medium leading-[1.05]">
              Sonrisas que <span className="italic" style={{ color: "var(--primary-deep)" }}>cuidamos</span> con detalle.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Una clínica dental moderna donde la tecnología y el trato cercano se unen para devolverte la confianza en tu sonrisa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:translate-y-[-1px] transition">
                Reserva tu cita <ArrowRight className="size-4" />
              </a>
              <a href="#servicios" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/60 px-6 py-3 text-sm font-medium text-foreground hover:bg-card transition">
                Ver servicios
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-primary text-primary" />)}
              </div>
              <span><strong className="text-foreground">+1.200</strong> pacientes felices</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] aspect-[4/5] lg:aspect-[5/6]">
              <img src={heroClinic} alt="Interior moderno clínica dental" className="w-full h-full object-cover" width={1600} height={1200} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-[var(--shadow-card)] border border-border flex items-center gap-3 max-w-[240px]">
              <div className="size-12 rounded-full grid place-items-center" style={{ background: "var(--primary-soft)" }}>
                <ShieldCheck className="size-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">15+ años</p>
                <p className="text-xs text-muted-foreground">de experiencia</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-[var(--shadow-card)] border border-border">
              <p className="text-2xl font-display font-semibold text-primary">98%</p>
              <p className="text-xs text-muted-foreground">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Servicios</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-medium">Tratamientos pensados para ti</h2>
            <p className="mt-4 text-muted-foreground">Cubrimos todas las especialidades odontológicas con un enfoque personalizado y la última tecnología.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group rounded-3xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-[var(--shadow-card)] transition">
                <div className="size-12 rounded-2xl grid place-items-center mb-5 group-hover:scale-110 transition" style={{ background: "var(--primary-soft)" }}>
                  <s.icon className="size-6 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24" style={{ background: "var(--primary-soft)" }}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={smileImg} alt="Sonrisa saludable" loading="lazy" width={1200} height={1400} className="rounded-[2rem] shadow-[var(--shadow-soft)] aspect-[4/5] object-cover w-full" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Sobre nosotros</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-medium">Donde cada sonrisa cuenta una historia.</h2>
            <p className="mt-5 text-foreground/80">
              En AquaDental combinamos más de 15 años de experiencia con tecnología de última generación para ofrecerte tratamientos seguros, cómodos y duraderos. Nuestro equipo de especialistas te acompaña en cada paso.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Tecnología 3D y diagnóstico digital",
                "Equipo multidisciplinar especializado",
                "Atención personalizada y financiación a medida",
                "Instalaciones modernas y esterilizadas",
              ].map(f => (
                <li key={f} className="flex items-start gap-3">
                  <div className="mt-0.5 size-6 rounded-full bg-primary grid place-items-center shrink-0">
                    <Check className="size-3.5 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HORARIOS + UBICACIÓN */}
      <section id="horarios" className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl p-10 text-primary-foreground relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-white/10 blur-2xl" />
            <Clock className="size-10" />
            <h3 className="mt-5 text-3xl font-display font-medium">Horario de atención</h3>
            <div className="mt-8 divide-y divide-white/20">
              {schedule.map(s => (
                <div key={s.day} className="flex justify-between py-4">
                  <span className="font-medium">{s.day}</span>
                  <span className="opacity-90 text-right text-sm">{s.hours}</span>
                </div>
              ))}
            </div>
            <a href="#contacto" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition">
              <Calendar className="size-4" /> Reservar ahora
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="aspect-[4/3] w-full">
              <iframe
                title="Ubicación AquaDental"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7100%2C40.4150%2C-3.6900%2C40.4250&layer=mapnik&marker=40.4200%2C-3.7000"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Calle Gran Vía 42, 28013 Madrid</p>
                  <p className="text-sm text-muted-foreground mt-1">Metro Callao · Parking propio disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">Contacto</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-medium">¿Listo para tu mejor sonrisa?</h2>
            <p className="mt-5 text-muted-foreground max-w-md">Pide cita o escríbenos. Te respondemos en menos de 24 horas.</p>
            <div className="mt-10 space-y-5">
              <a href="tel:+34910000000" className="flex items-center gap-4 group">
                <div className="size-12 rounded-2xl grid place-items-center bg-card shadow-[var(--shadow-card)] group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Llámanos</p>
                  <p className="font-semibold">+34 910 000 000</p>
                </div>
              </a>
              <a href="mailto:hola@aquadental.es" className="flex items-center gap-4 group">
                <div className="size-12 rounded-2xl grid place-items-center bg-card shadow-[var(--shadow-card)] group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Escríbenos</p>
                  <p className="font-semibold">hola@aquadental.es</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl grid place-items-center bg-card shadow-[var(--shadow-card)]">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Visítanos</p>
                  <p className="font-semibold">Gran Vía 42, Madrid</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Gracias, te contactaremos pronto."); }} className="bg-card rounded-3xl p-8 shadow-[var(--shadow-soft)] border border-border">
            <h3 className="text-2xl font-display font-medium">Pide tu cita</h3>
            <p className="text-sm text-muted-foreground mt-1">Primera visita gratuita</p>
            <div className="mt-6 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Nombre" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
                <input required type="tel" placeholder="Teléfono" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <input type="email" placeholder="Email" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
              <select className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                <option>Tipo de tratamiento</option>
                {services.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
              <textarea rows={4} placeholder="¿En qué podemos ayudarte?" className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
              <button type="submit" className="rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-semibold shadow-[var(--shadow-soft)] hover:opacity-90 transition inline-flex items-center justify-center gap-2">
                Enviar solicitud <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-xl grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
                <Smile className="size-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl font-semibold">Aqua<span className="text-primary">Dental</span></span>
            </div>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">Cuidamos tu sonrisa con tecnología, experiencia y cariño.</p>
          </div>
          <div>
            <p className="font-semibold mb-3">Enlaces</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicios" className="hover:text-primary">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-primary">Nosotros</a></li>
              <li><a href="#horarios" className="hover:text-primary">Horarios</a></li>
              <li><a href="#contacto" className="hover:text-primary">Contacto</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Contacto</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Gran Vía 42, Madrid</li>
              <li>+34 910 000 000</li>
              <li>hola@aquadental.es</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AquaDental. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
