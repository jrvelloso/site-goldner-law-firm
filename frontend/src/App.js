import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Crown, 
  Scale, 
  Shield, 
  Briefcase, 
  Users, 
  Building2, 
  FileText, 
  Gavel, 
  Landmark,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// User-provided logo
const FIRM_LOGO = "https://customer-assets.emergentagent.com/job_legal-premium-1/artifacts/tnbrfubn_ChatGPT%20Image%20Apr%204%2C%202026%2C%2010_32_32%20AM.png";

// Images from design guidelines
const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/771a6bcd-c7f6-482a-9d86-9383bcd9fa63/images/91a19b2c7612fe18e1422da289bc2cfacac5937c00afa2f15b9ebab3aa6ea446.png";
const OFFICE_INTERIOR = "https://static.prod-images.emergentagent.com/jobs/771a6bcd-c7f6-482a-9d86-9383bcd9fa63/images/cfedb054b684d47fc508baf2e1d84b0e8844b5efaba84f147d8d34286f9ee29e.png";
const FOUNDER_IMG = "https://images.unsplash.com/photo-1584940120505-117038d90b05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdCUyMGNvcnBvcmF0ZXxlbnwwfHx8fDE3NzUyOTUzMzV8MA&ixlib=rb-4.1.0&q=85";
const OFFICE_IMAGES = [
  "https://static.prod-images.emergentagent.com/jobs/771a6bcd-c7f6-482a-9d86-9383bcd9fa63/images/e64d7a1245333d3d9e21f469d4c534a309f1352070b0d4dab79ac1a396c548da.png",
  "https://images.unsplash.com/photo-1547669205-39038d0a1df1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwY2l0eXxlbnwwfHx8fDE3NzUyOTUzMzV8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1694702730868-a34da58c1427?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwY2l0eXxlbnwwfHx8fDE3NzUyOTUzMzV8MA&ixlib=rb-4.1.0&q=85"
];

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Equipe", href: "#team" },
    { name: "Escritórios", href: "#offices" }
  ];

  return (
    <header 
      data-testid="header"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#040914]/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" data-testid="logo-link" className="flex items-center gap-3">
            <img 
              src={FIRM_LOGO} 
              alt="Goldner & Dias Paes" 
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className="nav-link text-sm uppercase tracking-[0.15em] text-white/80 hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              data-testid="header-contact-btn"
              className="btn-gold px-6 py-2 text-sm uppercase tracking-wider"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.15em] text-white/80 hover:text-[#D4AF37] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="btn-gold px-6 py-2 text-sm uppercase tracking-wider mt-4 w-fit"
              >
                Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-3xl">
          {/* Overline */}
          <p 
            data-testid="hero-overline"
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-6"
          >
            Excelência em Advocacia
          </p>
          
          {/* Main Headline */}
          <h1 
            data-testid="hero-headline"
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tradição, Expertise e
            <br />
            <span className="text-[#D4AF37]">Resultados</span>
          </h1>
          
          {/* Supporting Text */}
          <p 
            data-testid="hero-subtext"
            className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-10"
          >
            Assessoria jurídica de alto padrão para empresas e indivíduos 
            que buscam soluções estratégicas e representação discreta.
          </p>
          
          {/* CTA */}
          <Button 
            data-testid="hero-cta-btn"
            className="btn-gold px-8 py-6 text-sm uppercase tracking-wider"
          >
            Agende uma Consulta
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </div>
    </section>
  );
};

// Value Proposition Section
const ValueProposition = () => {
  const values = [
    {
      icon: <Scale className="w-8 h-8 text-[#D4AF37]" />,
      title: "Expertise Incomparável",
      description: "Décadas de experiência em casos complexos"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#D4AF37]" />,
      title: "Visão Estratégica",
      description: "Abordagem personalizada para cada cliente"
    },
    {
      icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
      title: "Representação Discreta",
      description: "Confidencialidade e profissionalismo absolutos"
    }
  ];

  return (
    <section data-testid="value-proposition" className="py-24 md:py-32 bg-[#040914]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {values.map((value, index) => (
            <div 
              key={index}
              data-testid={`value-item-${index}`}
              className="text-center md:text-left"
            >
              <div className="flex justify-center md:justify-start mb-6">
                {value.icon}
              </div>
              <h3 
                className="text-xl md:text-2xl font-medium mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {value.title}
              </h3>
              <p className="text-white/60 text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    { icon: <Briefcase className="w-6 h-6" />, title: "Direito Empresarial", desc: "Assessoria completa para negócios" },
    { icon: <FileText className="w-6 h-6" />, title: "Contratos", desc: "Elaboração e revisão especializada" },
    { icon: <Gavel className="w-6 h-6" />, title: "Contencioso", desc: "Representação judicial estratégica" },
    { icon: <Landmark className="w-6 h-6" />, title: "Direito Tributário", desc: "Planejamento e defesa fiscal" },
    { icon: <Building2 className="w-6 h-6" />, title: "Direito Imobiliário", desc: "Transações e regularizações" },
    { icon: <Users className="w-6 h-6" />, title: "Direito de Família", desc: "Sucessões e planejamento patrimonial" }
  ];

  return (
    <section data-testid="services-section" id="services" className="py-24 md:py-32 bg-[#0B1325]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
            Áreas de Atuação
          </p>
          <h2 
            data-testid="services-title"
            className="text-3xl md:text-5xl font-medium tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nossos Serviços
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              data-testid={`service-card-${index}`}
              className="service-card p-8 rounded-sm"
            >
              <div className="text-[#D4AF37] mb-5">
                {service.icon}
              </div>
              <h3 
                className="text-lg md:text-xl font-medium mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h3>
              <p className="text-white/50 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section data-testid="about-section" id="about" className="py-24 md:py-32 bg-[#040914]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
              Sobre Nós
            </p>
            <h2 
              data-testid="about-title"
              className="text-3xl md:text-5xl font-medium tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Compromisso com a Excelência
            </h2>
            
            {/* Gold accent line */}
            <div className="gold-accent-line mb-8" />
            
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
              Há mais de duas décadas, o escritório Goldner & Dias Paes Advocacia 
              atua com excelência no cenário jurídico brasileiro, oferecendo 
              soluções estratégicas e personalizadas.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              Nossa equipe combina tradição e inovação para entregar resultados 
              excepcionais aos nossos clientes, sempre com a máxima 
              confidencialidade e profissionalismo.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={OFFICE_INTERIOR}
              alt="Office Interior"
              data-testid="about-image"
              className="w-full h-auto max-h-[80vh] object-cover rounded-sm"
            />
            {/* Decorative frame */}
            <div className="absolute inset-0 border border-[#D4AF37]/20 transform translate-x-4 translate-y-4 -z-10 rounded-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Founder Section
const FounderSection = () => {
  return (
    <section data-testid="founder-section" id="team" className="py-24 md:py-32 bg-[#0B1325]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
            Liderança
          </p>
          <h2 
            data-testid="founder-title"
            className="text-3xl md:text-5xl font-medium tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sócio Fundador
          </h2>
        </div>

        {/* Founder Profile */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="founder-image relative">
              <img 
                src={FOUNDER_IMG}
                alt="Sócio Fundador"
                data-testid="founder-image"
                className="w-full h-auto object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Info */}
            <div>
              <h3 
                data-testid="founder-name"
                className="text-2xl md:text-3xl font-medium mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dr. [Nome do Sócio]
              </h3>
              <p className="text-[#D4AF37] text-sm uppercase tracking-wider mb-6">
                Sócio Fundador & Partner
              </p>
              
              <div className="gold-accent-line mb-6" />
              
              <p className="text-white/70 text-base leading-relaxed mb-4">
                Com mais de 25 anos de experiência, lidera o escritório com 
                visão estratégica e compromisso inabalável com a excelência.
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Especialista em Direito Empresarial e Tributário, com 
                formação nas principais instituições do país e experiência 
                internacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Differentiation Section
const DifferentiationSection = () => {
  const differentiators = [
    "Atendimento personalizado e exclusivo",
    "Equipe multidisciplinar de especialistas",
    "Atuação em casos de alta complexidade",
    "Presença em três capitais estratégicas"
  ];

  return (
    <section data-testid="differentiation-section" className="py-24 md:py-32 bg-[#040914]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
              Por Que Nos Escolher
            </p>
            <h2 
              data-testid="diff-title"
              className="text-3xl md:text-4xl font-medium tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Diferenciais
            </h2>
          </div>

          {/* Differentiators List */}
          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                data-testid={`diff-item-${index}`}
                className="diff-item flex items-center gap-4 p-4 border-l-2 border-[#D4AF37]/30 hover:border-[#D4AF37]"
              >
                <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-lg text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Office Locations Section
const OfficeLocations = () => {
  const offices = [
    {
      city: "São Paulo",
      address: "Av. Paulista, 1000",
      phone: "+55 11 0000-0000",
      image: OFFICE_IMAGES[0]
    },
    {
      city: "Rio de Janeiro",
      address: "Av. Rio Branco, 500",
      phone: "+55 21 0000-0000",
      image: OFFICE_IMAGES[1]
    },
    {
      city: "Brasília",
      address: "SBS Quadra 2, Bloco J",
      phone: "+55 61 0000-0000",
      image: OFFICE_IMAGES[2]
    }
  ];

  return (
    <section data-testid="offices-section" id="offices" className="py-24 md:py-32 bg-[#0B1325]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
            Onde Estamos
          </p>
          <h2 
            data-testid="offices-title"
            className="text-3xl md:text-5xl font-medium tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nossos Escritórios
          </h2>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div 
              key={index}
              data-testid={`office-card-${index}`}
              className="office-card rounded-sm"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={office.image}
                  alt={office.city}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Info */}
              <div className="p-6">
                <h3 
                  className="text-xl font-medium mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {office.city}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section 
      data-testid="cta-section"
      className="cta-section relative py-24 md:py-32"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#040914]/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
          Próximo Passo
        </p>
        <h2 
          data-testid="cta-title"
          className="text-3xl md:text-5xl font-medium tracking-tight mb-6 max-w-2xl mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pronto para uma Assessoria de Excelência?
        </h2>
        <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl mx-auto">
          Entre em contato conosco para agendar uma consulta inicial 
          e descobrir como podemos ajudar.
        </p>
        
        <Button 
          data-testid="cta-contact-btn"
          className="btn-gold px-10 py-6 text-sm uppercase tracking-wider"
        >
          Fale Conosco
        </Button>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "linkedin" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "facebook" }
  ];

  return (
    <footer data-testid="footer" className="bg-[#040914] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src={FIRM_LOGO}
              alt="Goldner & Dias Paes"
              className="h-16 w-auto mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Assessoria jurídica de alto padrão com tradição, 
              expertise e compromisso com resultados excepcionais.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/80 mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:contato@goldnerdias.adv.br"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@goldnerdias.adv.br
              </a>
              <a 
                href="tel:+551100000000"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +55 11 0000-0000
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/80 mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  data-testid={`social-${social.name}`}
                  className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © 2024 Goldner & Dias Paes Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-[#D4AF37] transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/40 text-xs hover:text-[#D4AF37] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Home Page
const Home = () => {
  return (
    <div className="min-h-screen bg-[#040914]">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <ServicesSection />
        <AboutSection />
        <FounderSection />
        <DifferentiationSection />
        <OfficeLocations />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
