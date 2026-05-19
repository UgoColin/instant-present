import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

// --- COMPOSANT D'ANIMATION AU DEFILEMENT ---
const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Blocage du défilement de la page quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Injection des polices Google
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Whisper&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Configuration du menu
  const menuItems = [
    { title: "Accueil", href: "#" },
    { 
      title: "Soins bien-être", 
      href: "#",
      submenu: ["Massage relaxant", "Massage aux pierres chaudes", "Réflexologie plantaire"]
    },
    { 
      title: "Rituels spécifiques", 
      href: "#",
      submenu: ["Rituel évasion", "Rituel signature Krystel", "Soin détox"]
    },
    { 
      title: "Rituel Head Spa", 
      href: "#",
      submenu: ["Head Spa Japonais complet", "Soin du cuir chevelu express"]
    },
    { 
      title: "Maternité & Parentalité", 
      href: "#",
      submenu: ["Massage prénatal", "Massage post-natal", "Atelier massage bébé"]
    },
    { 
      title: "Nutrition & Coaching", 
      href: "#",
      submenu: ["Bilan nutritionnel", "Suivi personnalisé", "Ateliers bien-être"]
    },
    { title: "Contact / RDV", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-[#faf1e8] font-['Montserrat',sans-serif] text-[#48615c] selection:bg-[#cc8787] selection:text-white overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 w-full z-50 bg-[#faf1e8] shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer">
              <span className="font-['Whisper',cursive] text-4xl text-[#00433a]">
                Krystel Valquenart
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex space-x-6 items-center">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a 
                    href={item.href}
                    className="text-sm font-semibold tracking-widest uppercase flex items-center transition-colors duration-300 text-[#00433a] hover:text-[#cc8787]"
                  >
                    {item.title}
                    {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                  </a>
                  
                  {/* Dropdown */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-56 bg-[#faf1e8] border border-[#cc8787]/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                      <div className="py-2">
                        {item.submenu.map((sub, idx) => (
                          <a 
                            key={idx} 
                            href="#" 
                            className="block px-4 py-2 text-sm text-[#48615c] hover:bg-[#cc8787] hover:text-white transition-colors"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#00433a] hover:text-[#cc8787] focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div 
          className={`xl:hidden absolute top-full left-0 w-full bg-[#faf1e8] shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[calc(100vh-80px)] opacity-100 visible py-4 overflow-y-auto' : 'max-h-0 opacity-0 invisible py-0 overflow-hidden'
          }`}
        >
          <div className="px-4 space-y-3">
            {menuItems.map((item, index) => (
              <div key={index}>
                <a 
                  href={item.href}
                  className="block text-[#00433a] font-semibold text-lg py-2 border-b border-[#cc8787]/20"
                >
                  {item.title}
                </a>
                {item.submenu && (
                  <div className="pl-4 py-2 space-y-2">
                    {item.submenu.map((sub, idx) => (
                      <a key={idx} href="#" className="block text-sm text-[#48615c] hover:text-[#cc8787]">
                        - {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
            alt="Ambiance massage et bien-être" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf1e8]/90 via-[#faf1e8]/70 to-transparent"></div>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <FadeInSection>
              <h2 className="font-['Whisper',cursive] text-4xl md:text-5xl text-[#cc8787] mb-2">
                Bienvenue
              </h2>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <h1 className="font-['Playfair_Display',serif] text-4xl md:text-6xl text-[#00433a] leading-tight mb-6">
                Un espace de douceur pour relâcher les tensions, apaiser l’esprit et se reconnecter à soi… <br/>
                <span className="italic text-3xl md:text-5xl text-[#48615c]">pour toute la famille.</span>
              </h1>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="text-lg md:text-xl text-[#48615c] mb-10 font-light tracking-wide border-l-4 border-[#cc8787] pl-4">
                Massages, Rituels bien-être, Accompagnement maternité et équilibre de vie.
              </p>
            </FadeInSection>

            <FadeInSection delay={600}>
              <a href="#prestations" className="inline-block bg-[#00433a] text-[#faf1e8] px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#cc8787] transition-colors duration-300">
                Découvrir les soins
              </a>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* --- SECTION A PROPOS --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image */}
            <div className="w-full lg:w-1/2 relative">
              <FadeInSection>
                <div className="relative z-10 rounded-t-full overflow-hidden border-8 border-[#faf1e8]">
                  <img 
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop" 
                    alt="Krystel praticienne bien-être" 
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                {/* Element décoratif */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#cc8787] rounded-full z-0 opacity-20"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#00433a] rounded-full z-0 opacity-10"></div>
              </FadeInSection>
            </div>

            {/* Texte */}
            <div className="w-full lg:w-1/2">
              <FadeInSection>
                <h3 className="font-['Whisper',cursive] text-4xl text-[#cc8787] mb-2">Mon parcours</h3>
                <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl text-[#00433a] mb-8">
                  À propos de Krystel
                </h2>
                
                <div className="space-y-6 text-[#48615c] leading-relaxed font-light">
                  <p>
                    <strong className="font-medium text-[#00433a]">Je m’appelle Krystel</strong>, praticienne en bien-être, passionnée par l’écoute du corps et l’accompagnement global de la personne.
                  </p>
                  <p>
                    Depuis plus de 20 ans, j’exerce en tant qu’Auxiliaire de Puériculture, en maternité, pédiatrie et néonatalogie. C'est un métier profondément humain qui m’a appris l’importance du toucher, de la présence et de l’écoute.
                  </p>
                  <p>
                    Au fil du temps, j’ai ressenti le besoin d’élargir mon accompagnement, pour prendre soin autrement… dans la douceur, le respect et la globalité.
                  </p>
                </div>
                
                <div className="mt-10">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Lotus_position_icon.svg/1024px-Lotus_position_icon.svg.png" className="w-12 h-12 opacity-20" alt="Décoration lotus" />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION APPROCHE --- */}
      <section className="py-24 bg-[#faf1e8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl text-[#00433a] mb-8">
              Une approche basée sur l’écoute
            </h2>
            <div className="w-24 h-[1px] bg-[#cc8787] mx-auto mb-8"></div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <p className="text-xl text-[#48615c] leading-relaxed font-light mb-8">
              Chaque personne est unique. C’est pourquoi j’accorde une attention particulière à vos besoins, à votre état du moment et à votre histoire.
            </p>
            <p className="text-xl text-[#00433a] leading-relaxed font-medium italic">
              « À travers mes soins, mon intention est simple : Vous offrir un espace où vous pouvez ralentir, relâcher les tensions et vous reconnecter à vous-même. »
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* --- SECTION PRESTATIONS (Aperçu) --- */}
      <section id="prestations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h3 className="font-['Whisper',cursive] text-4xl text-[#cc8787] mb-2">Découvrez</h3>
              <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl text-[#00433a]">
                Mes Prestations
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte 1 */}
            <FadeInSection delay={100}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden relative h-80 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1600334129128-68505dce26fa?q=80&w=2000&auto=format&fit=crop" 
                    alt="Soins bien-être" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#00433a]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h4 className="font-['Playfair_Display',serif] text-2xl text-[#00433a] mb-2">Soins bien-être</h4>
                <p className="text-[#48615c] font-light mb-4 line-clamp-2">Massages relaxants et enveloppants pour dénouer les tensions corporelles et apaiser l'esprit.</p>
                <span className="text-[#cc8787] text-sm uppercase tracking-widest flex items-center group-hover:text-[#00433a] transition-colors">
                  En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </FadeInSection>

            {/* Carte 2 */}
            <FadeInSection delay={300}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden relative h-80 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop" 
                    alt="Maternité" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#00433a]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h4 className="font-['Playfair_Display',serif] text-2xl text-[#00433a] mb-2">Maternité & Parentalité</h4>
                <p className="text-[#48615c] font-light mb-4 line-clamp-2">Un accompagnement tout en douceur pour les futures et jeunes mamans, ainsi que pour bébé.</p>
                <span className="text-[#cc8787] text-sm uppercase tracking-widest flex items-center group-hover:text-[#00433a] transition-colors">
                  En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </FadeInSection>

            {/* Carte 3 */}
            <FadeInSection delay={500}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden relative h-80 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1953&auto=format&fit=crop" 
                    alt="Head Spa" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#00433a]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h4 className="font-['Playfair_Display',serif] text-2xl text-[#00433a] mb-2">Rituel Head Spa</h4>
                <p className="text-[#48615c] font-light mb-4 line-clamp-2">Une évasion inspirée des traditions japonaises pour purifier le cuir chevelu et lâcher prise totalement.</p>
                <span className="text-[#cc8787] text-sm uppercase tracking-widest flex items-center group-hover:text-[#00433a] transition-colors">
                  En savoir plus <ChevronRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </FadeInSection>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-block border border-[#00433a] text-[#00433a] px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#00433a] hover:text-[#faf1e8] transition-colors duration-300">
              Voir toutes les prestations
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION PUBLIC CIBLE --- */}
      <section className="py-24 bg-[#00433a] text-[#faf1e8] relative overflow-hidden">
        {/* Décoration de fond */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#48615c] rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            
            {/* Image */}
            <div className="w-full lg:w-5/12">
              <FadeInSection>
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop" 
                  alt="Mains apaisantes" 
                  className="w-full h-auto shadow-2xl border-4 border-[#cc8787]/30"
                />
              </FadeInSection>
            </div>

            {/* Texte */}
            <div className="w-full lg:w-7/12">
              <FadeInSection>
                <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl mb-8 text-white">
                  Un accompagnement pour tous
                </h2>
                
                <div className="space-y-6 text-white/80 leading-relaxed font-light text-lg">
                  <p>
                    J’accompagne les femmes, les hommes, les enfants, ainsi que les futures et jeunes mamans, dans des moments de vie parfois intenses, parfois fragiles, mais toujours précieux.
                  </p>
                  <p className="bg-[#cc8787]/20 p-6 border-l-4 border-[#cc8787]">
                    J’accueille également les personnes en situation de handicap, avec une attention particulière portée à leurs besoins spécifiques. Un échange préalable, si besoin en présence d’un accompagnant, permet d’adapter au mieux le soin et de vous accueillir dans les meilleures conditions.
                  </p>
                  <p>
                    Que ce soit pour un moment de détente, un besoin de lâcher prise, ou un accompagnement plus spécifique, je vous accueille avec bienveillance et sans jugement.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION AVIS CLIENTS --- */}
      <section className="py-24 bg-[#faf1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h3 className="font-['Whisper',cursive] text-4xl text-[#cc8787] mb-2">Témoignages</h3>
              <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl text-[#00433a]">
                Mots de douceur
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="bg-white p-8 shadow-sm border-t-4 border-[#cc8787] text-center">
                  <p className="text-[#48615c] italic mb-6">
                    "Un moment hors du temps. L'écoute et la bienveillance de Krystel m'ont permis de lâcher prise totalement. Je recommande les yeux fermés."
                  </p>
                  <h4 className="font-['Playfair_Display',serif] text-[#00433a] font-medium">- Sophie L.</h4>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- BANNIERE CONTACT --- */}
      <section className="py-12 bg-[#cc8787] text-white text-center px-4">
        <FadeInSection>
          <p className="text-xl md:text-2xl font-['Playfair_Display',serif]">
            N’hésitez pas à me contacter en amont pour toute demande spécifique.
          </p>
        </FadeInSection>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-[#00433a] text-white/70 pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Colonne 1 : Marque */}
            <div className="col-span-1 md:col-span-1">
              <span className="font-['Whisper',cursive] text-4xl text-white block mb-6">
                Krystel
              </span>
              <p className="font-light text-sm leading-relaxed">
                Un espace dédié à votre bien-être corporel et émotionnel, pensé pour vous offrir une parenthèse de douceur et de reconnexion à soi.
              </p>
            </div>

            {/* Colonne 2 : Liens rapides */}
            <div>
              <h4 className="text-white font-['Playfair_Display',serif] text-lg mb-6 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3 font-light text-sm">
                <li><a href="#" className="hover:text-[#cc8787] transition-colors">Accueil</a></li>
                <li><a href="#" className="hover:text-[#cc8787] transition-colors">À propos</a></li>
                <li><a href="#prestations" className="hover:text-[#cc8787] transition-colors">Mes Prestations</a></li>
                <li><a href="#" className="hover:text-[#cc8787] transition-colors">Bons cadeaux</a></li>
              </ul>
            </div>

            {/* Colonne 3 : Contact */}
            <div>
              <h4 className="text-white font-['Playfair_Display',serif] text-lg mb-6 uppercase tracking-wider">Contact & Réservation</h4>
              <ul className="space-y-4 font-light text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[#cc8787] flex-shrink-0" />
                  <span>123 Avenue de la Douceur<br/>75000 Paris</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-[#cc8787] flex-shrink-0" />
                  <span>06 12 34 56 78</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-[#cc8787] flex-shrink-0" />
                  <span>contact@krystel-bienetre.fr</span>
                </li>
              </ul>
            </div>

            {/* Colonne 4 : Réseaux */}
            <div>
              <h4 className="text-white font-['Playfair_Display',serif] text-lg mb-6 uppercase tracking-wider">Suivez-moi</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#cc8787] hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#cc8787] hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-8">
                <a href="#" className="bg-[#cc8787] text-white px-6 py-3 text-sm tracking-wider uppercase hover:bg-white hover:text-[#00433a] transition-colors inline-block">
                  Prendre RDV
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
            <p>&copy; {new Date().getFullYear()} Krystel Valquenart. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Politique de confidentialité</a>
              <a href="#" className="hover:text-white">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
