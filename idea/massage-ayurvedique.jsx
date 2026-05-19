import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Clock, CreditCard, CheckCircle2, Leaf, Droplets, Wind, ArrowRight, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

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
export default function MassageAyurvedique() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const menuItems = [
    { title: "Accueil", href: "/" },
    { 
      title: "Soins bien-être", 
      href: "/soins-bien-etre",
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
      
      {/* --- HEADER --- */}
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

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
            alt="Massage Ayurvédique à l'huile chaude" 
            className="w-full h-full object-cover object-center filter brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-[#00433a]/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <FadeInSection>
            <h1 className="font-['Whisper',cursive] text-5xl md:text-7xl text-[#faf1e8] mb-4">
              Massage Ayurvédique
            </h1>
            <div className="w-24 h-[1px] bg-[#cc8787] mx-auto mb-6"></div>
            <h2 className="font-['Playfair_Display',serif] text-2xl md:text-4xl text-white font-light tracking-wide leading-relaxed">
              Un voyage sensoriel profond pour rééquilibrer vos énergies et apaiser votre esprit.
            </h2>
          </FadeInSection>
        </div>
      </section>

      {/* --- BARRE D'INFORMATIONS PRATIQUES --- */}
      <div className="relative -mt-12 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row justify-around items-center border border-[#faf1e8]">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-[#faf1e8] flex items-center justify-center mr-4 text-[#cc8787]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-[#48615c] font-semibold">Durée</p>
              <p className="font-['Playfair_Display',serif] text-xl text-[#00433a]">1h00 ou 1h30</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-[#faf1e8]"></div>
          
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-[#faf1e8] flex items-center justify-center mr-4 text-[#cc8787]">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-[#48615c] font-semibold">Tarif</p>
              <p className="font-['Playfair_Display',serif] text-xl text-[#00433a]">70€ (1h) / 100€ (1h30)</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-[#faf1e8]"></div>

          <div className="mt-4 md:mt-0">
            <a href="#contact" className="inline-block bg-[#00433a] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#cc8787] transition-colors duration-300">
              Réserver ce soin
            </a>
          </div>
        </div>
      </div>

      {/* --- SECTION LE SOIN --- */}
      <section className="py-24 bg-[#faf1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <FadeInSection>
                <h3 className="font-['Whisper',cursive] text-4xl text-[#cc8787] mb-2">Présentation</h3>
                <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl text-[#00433a] mb-8">
                  Qu'est-ce que le soin Ayurvédique ?
                </h2>
                <div className="space-y-6 text-[#48615c] leading-relaxed font-light text-lg">
                  <p>
                    Issu de la médecine traditionnelle indienne, l'Ayurvéda considère le corps et l'esprit comme un ensemble indissociable. Ce massage holistique est conçu pour restaurer la circulation de votre énergie vitale (le Prana) à travers tout le corps.
                  </p>
                  <p>
                    Pratiqué avec de l'huile de sésame chaude, ce soin alterne des mouvements fluides, des pressions profondes, des étirements doux et des frictions toniques. Il s'adapte à votre constitution physique et énergétique pour offrir un rééquilibrage sur-mesure.
                  </p>
                  <p>
                    Bien plus qu'un simple moment de détente, le massage ayurvédique permet de dénouer les blocages, favorisant ainsi une sensation de légèreté et une harmonie intérieure retrouvée.
                  </p>
                </div>
              </FadeInSection>
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeInSection delay={200}>
                <div className="relative rounded-t-full overflow-hidden border-8 border-white shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop" 
                    alt="Détail d'un massage à l'huile" 
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION POUR VOUS SI... --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Décoration d'arrière-plan */}
        <div className="absolute -left-32 top-20 w-96 h-96 bg-[#faf1e8] rounded-full opacity-50 z-0"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl text-[#00433a] mb-4">
                Ce massage est pour vous si...
              </h2>
              <div className="w-16 h-[2px] bg-[#cc8787] mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Vous ressentez une fatigue globale ou un manque d'énergie au quotidien.",
              "Vous traversez une période de stress intense, de surmenage ou d'anxiété.",
              "Vous souffrez de troubles du sommeil ou avez du mal à déconnecter le soir.",
              "Vous avez besoin de relâcher des tensions musculaires profondes.",
              "Vous sentez le besoin de vous reconnecter à votre corps.",
              "Vous souhaitez purifier votre organisme et éliminer les toxines."
            ].map((text, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="bg-[#faf1e8] p-6 rounded-br-[30px] rounded-tl-[30px] flex items-start h-full border border-white hover:border-[#cc8787]/30 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#cc8787] mr-4 flex-shrink-0 mt-1" />
                  <p className="text-[#48615c] font-medium leading-relaxed">{text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION LES BIENFAITS --- */}
      <section className="py-24 bg-[#00433a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h3 className="font-['Whisper',cursive] text-4xl text-[#cc8787] mb-2">Les résultats</h3>
              <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl mb-12">
                Les bienfaits du soin
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInSection delay={100}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 text-[#cc8787]">
                  <Droplets className="w-8 h-8" />
                </div>
                <h4 className="font-['Playfair_Display',serif] text-2xl mb-4">Détoxification</h4>
                <p className="font-light text-white/80 leading-relaxed">
                  L'utilisation de l'huile chaude couplée aux mouvements spécifiques stimule la lymphe et aide l'organisme à éliminer les toxines accumulées.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 text-[#cc8787]">
                  <Wind className="w-8 h-8" />
                </div>
                <h4 className="font-['Playfair_Display',serif] text-2xl mb-4">Apaisement mental</h4>
                <p className="font-light text-white/80 leading-relaxed">
                  Agit profondément sur le système nerveux pour calmer l'agitation mentale, réduire le stress et améliorer significativement la qualité du sommeil.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={500}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 text-[#cc8787]">
                  <Leaf className="w-8 h-8" />
                </div>
                <h4 className="font-['Playfair_Display',serif] text-2xl mb-4">Vitalité retrouvée</h4>
                <p className="font-light text-white/80 leading-relaxed">
                  En dénouant les blocages énergétiques et musculaires, ce massage redonne de l'énergie, de la souplesse aux articulations et du tonus au corps.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* --- BANNIERE D'APPEL A L'ACTION --- */}
      <section className="py-20 bg-[#faf1e8] text-center px-4">
        <FadeInSection>
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#00433a] mb-6">
            Prêt(e) à vous accorder ce moment ?
          </h2>
          <p className="font-light text-[#48615c] mb-8 max-w-2xl mx-auto text-lg">
            Réservez votre séance de massage ayurvédique et offrez-vous une véritable parenthèse régénérante.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#contact" className="bg-[#cc8787] text-white px-8 py-4 tracking-wider uppercase text-sm font-semibold hover:bg-[#00433a] transition-colors flex items-center">
              Prendre rendez-vous <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="/soins-bien-etre" className="text-[#00433a] border-b border-[#00433a] pb-1 uppercase tracking-widest text-sm hover:text-[#cc8787] hover:border-[#cc8787] transition-all">
              Voir les autres soins
            </a>
          </div>
        </FadeInSection>
      </section>

      {/* --- FOOTER --- */}
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
                <li><a href="/" className="hover:text-[#cc8787] transition-colors">Accueil</a></li>
                <li><a href="#" className="hover:text-[#cc8787] transition-colors">À propos</a></li>
                <li><a href="/soins-bien-etre" className="hover:text-[#cc8787] transition-colors">Mes Prestations</a></li>
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
