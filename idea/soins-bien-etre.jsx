import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Clock, CreditCard, ArrowRight, Phone, Mail, MapPin, Instagram, Facebook, Sparkles, Heart, Wind } from 'lucide-react';

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

// --- DONNÉES DES SOINS ---
const soinsList = [
  {
    title: "Massage Ayurvédique",
    shortDesc: "Un massage dynamique à l'huile chaude pour rééquilibrer les énergies, éliminer les toxines et apaiser le système nerveux.",
    duration: "1h ou 1h30",
    price: "À partir de 70€",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Massage Intuitif",
    shortDesc: "Créé sur-mesure dans l'instant. Un toucher à l'écoute de vos besoins du moment pour une libération émotionnelle et physique.",
    duration: "1h ou 1h30",
    price: "À partir de 65€",
    img: "https://images.unsplash.com/photo-1611077544795-c6cd8080bc2b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Massage Lomi-Lomi",
    shortDesc: "Inspiré de la tradition hawaïenne. Des mouvements fluides et amples avec les avant-bras, comme les vagues de l'océan.",
    duration: "1h15",
    price: "85€",
    img: "https://images.unsplash.com/photo-1519824145371-29681b728cb1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Massage du Dos",
    shortDesc: "Cible spécifiquement les tensions accumulées dans la nuque, les épaules et le dos. Idéal pour un soulagement rapide.",
    duration: "30 ou 45 min",
    price: "À partir de 40€",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop"
  },
  {
    title: "Massage du Visage",
    shortDesc: "Détente profonde des traits, stimulation de la micro-circulation et effet bonne mine. Un véritable coup d'éclat relaxant.",
    duration: "45 min",
    price: "50€",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Massage Crânien",
    shortDesc: "Libère les tensions mentales, apaise les maux de tête et favorise le sommeil en stimulant les points d'acupression de la tête.",
    duration: "30 min",
    price: "35€",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Massage Plantaire",
    shortDesc: "Inspiré de la réflexologie, ce soin des pieds apporte un ancrage profond et aide à relâcher la pression de tout le corps.",
    duration: "45 min",
    price: "50€",
    img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=2070&auto=format&fit=crop"
  }
];

// --- COMPOSANT PRINCIPAL ---
export default function SoinsBienEtre() {
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

  // Menu statique pour l'exemple
  const menuItems = [
    { title: "Accueil", href: "/" },
    { 
      title: "Soins bien-être", 
      href: "#",
      submenu: ["Massage Ayurvédique", "Massage Intuitif", "Massage Lomi-Lomi", "Massage du dos", "Massage du visage", "Massage crânien", "Massage plantaire"]
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
      
      {/* --- HEADER (Identique à l'accueil) --- */}
      <header className="sticky top-0 w-full z-50 bg-[#faf1e8] shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <span className="font-['Whisper',cursive] text-4xl text-[#00433a]">
                Krystel Valquenart
              </span>
            </div>
            <nav className="hidden xl:flex space-x-6 items-center">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a 
                    href={item.href}
                    className={`text-sm font-semibold tracking-widest uppercase flex items-center transition-colors duration-300 ${
                      item.title === "Soins bien-être" ? "text-[#cc8787]" : "text-[#00433a] hover:text-[#cc8787]"
                    }`}
                  >
                    {item.title}
                    {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                  </a>
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-64 bg-[#faf1e8] border border-[#cc8787]/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                      <div className="py-2">
                        {item.submenu.map((sub, idx) => (
                          <a key={idx} href="#" className="block px-4 py-2 text-sm text-[#48615c] hover:bg-[#cc8787] hover:text-white transition-colors">
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
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
                  className={`block font-semibold text-lg py-2 border-b border-[#cc8787]/20 ${
                    item.title === "Soins bien-être" ? "text-[#cc8787]" : "text-[#00433a]"
                  }`}
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

      {/* --- HERO SECTION INTERNE --- */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
            alt="Ambiance massage et bien-être" 
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-[#00433a]/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <FadeInSection>
            <h1 className="font-['Whisper',cursive] text-5xl md:text-7xl text-[#faf1e8] mb-4">
              Soins Bien-Être
            </h1>
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-4xl text-white font-light tracking-wide">
              Une parenthèse de douceur pour harmoniser le corps et l'esprit.
            </h2>
          </FadeInSection>
        </div>
      </section>

      {/* --- INTRODUCTION CATEGORIE --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <Sparkles className="w-8 h-8 mx-auto text-[#cc8787] mb-6" />
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#00433a] mb-8">
              L'art de prendre soin de vous
            </h2>
            <div className="space-y-6 text-[#48615c] leading-relaxed font-light text-lg">
              <p>
                Parce que notre corps garde en mémoire nos émotions et nos rythmes de vie, s'offrir un massage est bien plus qu'un simple instant de détente : c'est <strong>un véritable retour à soi</strong>.
              </p>
              <p>
                Chacun de mes soins bien-être est réalisé avec des huiles végétales bio et adapté à votre sensibilité du moment. Que vous cherchiez à dénouer des tensions profondes, à apaiser un mental agité ou simplement à savourer le silence, vous trouverez ici le rituel qui vous correspond.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- GRILLE DES SOINS --- */}
      <section className="py-20 bg-[#faf1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {soinsList.map((soin, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="bg-white rounded-t-[40px] rounded-br-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full border border-[#cc8787]/10">
                  
                  {/* Image du soin */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={soin.img} 
                      alt={soin.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#00433a]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-['Playfair_Display',serif] text-2xl text-[#00433a] mb-4 group-hover:text-[#cc8787] transition-colors">
                      {soin.title}
                    </h3>
                    <p className="text-[#48615c] font-light text-sm leading-relaxed mb-6 flex-grow">
                      {soin.shortDesc}
                    </p>
                    
                    {/* Infos pratiques (Durée / Prix) */}
                    <div className="border-t border-b border-[#faf1e8] py-4 mb-6 flex justify-between items-center text-sm text-[#00433a] font-medium">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-[#cc8787]" />
                        {soin.duration}
                      </div>
                      <div className="flex items-center">
                        <CreditCard className="w-4 h-4 mr-2 text-[#cc8787]" />
                        {soin.price}
                      </div>
                    </div>

                    {/* Bouton Action */}
                    <a href="#" className="inline-flex items-center justify-center text-[#cc8787] uppercase text-xs tracking-widest font-semibold hover:text-[#00433a] transition-colors group/btn">
                      Découvrir ce soin 
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION POURQUOI CHOISIR CES MASSAGES (Bonus) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#00433a]">
                Les bienfaits de nos soins
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <FadeInSection delay={100}>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#faf1e8] rounded-full flex items-center justify-center mb-6 text-[#cc8787]">
                  <Wind className="w-8 h-8" />
                </div>
                <h4 className="font-['Playfair_Display',serif] text-xl text-[#00433a] mb-3">Lâcher prise mental</h4>
                <p className="text-[#48615c] font-light text-sm">Libérez-vous de la charge mentale quotidienne et offrez une pause méritée à votre esprit.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#faf1e8] rounded-full flex items-center justify-center mb-6 text-[#cc8787]">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-['Playfair_Display',serif] text-xl text-[#00433a] mb-3">Détente musculaire</h4>
                <p className="text-[#48615c] font-light text-sm">Dénouez les tensions corporelles accumulées grâce à des mouvements ciblés et profonds.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={500}>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#faf1e8] rounded-full flex items-center justify-center mb-6 text-[#cc8787]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="font-['Playfair_Display',serif] text-xl text-[#00433a] mb-3">Harmonie globale</h4>
                <p className="text-[#48615c] font-light text-sm">Rétablissez la circulation de vos énergies pour retrouver un équilibre physique et émotionnel.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* --- BANNIERE D'APPEL A L'ACTION --- */}
      <section className="py-16 bg-[#00433a] text-white text-center px-4">
        <FadeInSection>
          <h2 className="font-['Playfair_Display',serif] text-3xl mb-4">
            Besoin de conseils pour choisir votre soin ?
          </h2>
          <p className="font-light text-white/80 mb-8 max-w-2xl mx-auto">
            Chaque personne est différente. N'hésitez pas à me contacter, nous échangerons ensemble pour trouver le massage le plus adapté à vos besoins du moment.
          </p>
          <a href="#contact" className="inline-block bg-[#cc8787] text-white px-8 py-3 tracking-wider uppercase text-sm hover:bg-white hover:text-[#00433a] transition-colors">
            Me contacter
          </a>
        </FadeInSection>
      </section>

      {/* --- FOOTER (Identique à l'accueil) --- */}
      <footer id="contact" className="bg-[#00433a] text-white/70 pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <span className="font-['Whisper',cursive] text-4xl text-white block mb-6">
                Krystel
              </span>
              <p className="font-light text-sm leading-relaxed">
                Un espace dédié à votre bien-être corporel et émotionnel, pensé pour vous offrir une parenthèse de douceur et de reconnexion à soi.
              </p>
            </div>
            <div>
              <h4 className="text-white font-['Playfair_Display',serif] text-lg mb-6 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3 font-light text-sm">
                <li><a href="#" className="hover:text-[#cc8787] transition-colors">Accueil</a></li>
                <li><a href="#" className="hover:text-[#cc8787] transition-colors">À propos</a></li>
                <li><a href="#prestations" className="hover:text-[#cc8787] transition-colors">Mes Prestations</a></li>
                <li><a href="#" className="hover:text-[#cc8787] transition-colors">Bons cadeaux</a></li>
              </ul>
            </div>
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
