import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Instagram, Facebook, Clock, AlertCircle, ShieldCheck, HeartHandshake, ChevronUp, Send, CreditCard } from 'lucide-react';

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

// --- COMPOSANT ACCORDEON ---
const AccordionItem = ({ title, children, icon: Icon, isOpen, onClick }) => {
  return (
    <div className="border border-[#cc8787]/20 rounded-lg mb-4 bg-white overflow-hidden transition-all duration-300">
      <button
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-[#faf1e8]/50 transition-colors"
        onClick={onClick}
      >
        <div className="flex items-center">
          {Icon && <Icon className="w-5 h-5 text-[#cc8787] mr-4 flex-shrink-0" />}
          <span className="font-['Playfair_Display',serif] text-xl text-[#00433a] font-medium">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#48615c]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#48615c]" />
        )}
      </button>
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-5 pt-0 text-[#48615c] font-light text-sm leading-relaxed border-t border-[#faf1e8]">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---
export default function PrendreRendezVous() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);

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
                      item.title === "Contact / RDV" ? "text-[#cc8787]" : "text-[#00433a] hover:text-[#cc8787]"
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
                    item.title === "Contact / RDV" ? "text-[#cc8787]" : "text-[#00433a]"
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
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#00433a]">
          <img 
            src="https://images.unsplash.com/photo-1499744632587-7798360ba20f?q=80&w=2070&auto=format&fit=crop" 
            alt="Bureau calme et prise de rendez-vous" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <FadeInSection>
            <h1 className="font-['Playfair_Display',serif] text-5xl md:text-6xl text-[#faf1e8] mb-6">
              Prendre rendez-vous
            </h1>
            <p className="font-['Whisper',cursive] text-3xl md:text-5xl text-[#cc8787] tracking-wide">
              « Un premier pas vers vous… commence souvent par un simple message »
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* --- SECTION INTRODUCTION --- */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#00433a] mb-6">
              Vous souhaitez vous accorder un moment de bien-être, relâcher les tensions ou simplement prendre soin de vous ?
            </h2>
            <div className="w-24 h-[1px] bg-[#cc8787] mx-auto mb-8"></div>
            <div className="text-lg text-[#48615c] font-light leading-relaxed space-y-4">
              <p>
                Les rendez-vous se font <strong className="font-medium text-[#00433a]">uniquement sur demande</strong>, afin de vous proposer un accompagnement totalement personnalisé.
              </p>
              <p>
                Chaque demande est unique. C’est pourquoi un temps d’échange peut être proposé en amont, afin de vous orienter vers le soin le plus adapté à votre état du moment.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- SECTION CONTACT & FORMULAIRE --- */}
      <section className="py-20 bg-[#faf1e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Colonne Infos Pratiques */}
            <div className="w-full lg:w-1/3">
              <FadeInSection>
                <h3 className="font-['Whisper',cursive] text-4xl text-[#cc8787] mb-2">Me joindre</h3>
                <h2 className="font-['Playfair_Display',serif] text-3xl text-[#00433a] mb-8">
                  Comment réserver ?
                </h2>
                
                <p className="text-[#48615c] font-light mb-10 text-sm">
                  Je vous répondrai dans les plus brefs délais pour échanger avec vous et convenir ensemble d’un rendez-vous adapté à vos besoins.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-[#00433a]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display',serif] text-lg text-[#00433a] mb-1">Par téléphone</h4>
                      <p className="text-[#48615c] font-light">06 12 34 56 78</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-[#00433a]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display',serif] text-lg text-[#00433a] mb-1">Par e-mail</h4>
                      <p className="text-[#48615c] font-light">contact@krystel-bienetre.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-[#00433a]">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-['Playfair_Display',serif] text-lg text-[#00433a] mb-1">Via Facebook</h4>
                      <a href="#" className="text-[#cc8787] hover:text-[#00433a] transition-colors text-sm font-medium">Message privé sur la page</a>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Colonne Formulaire */}
            <div className="w-full lg:w-2/3">
              <FadeInSection delay={200}>
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#cc8787]/10">
                  <h3 className="font-['Playfair_Display',serif] text-2xl text-[#00433a] mb-8">
                    Formulaire de contact
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-[#48615c] uppercase tracking-wider mb-2">Nom & Prénom</label>
                        <input type="text" className="w-full bg-[#faf1e8]/50 border border-[#faf1e8] focus:border-[#cc8787] focus:ring-0 rounded-none px-4 py-3 text-sm transition-colors outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#48615c] uppercase tracking-wider mb-2">Téléphone</label>
                        <input type="tel" className="w-full bg-[#faf1e8]/50 border border-[#faf1e8] focus:border-[#cc8787] focus:ring-0 rounded-none px-4 py-3 text-sm transition-colors outline-none" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-semibold text-[#48615c] uppercase tracking-wider mb-2">Adresse E-mail</label>
                      <input type="email" className="w-full bg-[#faf1e8]/50 border border-[#faf1e8] focus:border-[#cc8787] focus:ring-0 rounded-none px-4 py-3 text-sm transition-colors outline-none" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#48615c] uppercase tracking-wider mb-2">Prestation souhaitée (si définie)</label>
                      <select className="w-full bg-[#faf1e8]/50 border border-[#faf1e8] focus:border-[#cc8787] focus:ring-0 rounded-none px-4 py-3 text-sm transition-colors outline-none text-[#48615c]">
                        <option value="">Sélectionnez une option ou "Je ne sais pas encore"</option>
                        <option value="Soins bien-être">Soins bien-être</option>
                        <option value="Rituels spécifiques">Rituels spécifiques</option>
                        <option value="Rituel Head Spa">Rituel Head Spa</option>
                        <option value="Maternité & Parentalité">Maternité & Parentalité</option>
                        <option value="Nutrition & Coaching">Nutrition & Coaching</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#48615c] uppercase tracking-wider mb-2">Votre message</label>
                      <textarea rows="5" placeholder="Précisez ici vos attentes, vos disponibilités, ou si c'est pour un bon cadeau..." className="w-full bg-[#faf1e8]/50 border border-[#faf1e8] focus:border-[#cc8787] focus:ring-0 rounded-none px-4 py-3 text-sm transition-colors outline-none resize-none"></textarea>
                    </div>

                    <button type="submit" className="bg-[#00433a] text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#cc8787] transition-colors duration-300 w-full flex justify-center items-center">
                      Envoyer ma demande <Send className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION INFOS IMPORTANTES AVANT RDV --- */}
      <section className="py-16 bg-[#00433a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeInSection>
            <AlertCircle className="w-10 h-10 mx-auto text-[#cc8787] mb-6" />
            <h2 className="font-['Playfair_Display',serif] text-3xl mb-6">
              Informations importantes avant la séance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-left">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <p className="font-light text-sm leading-relaxed text-white/90">
                  Pour certains soins, un questionnaire peut-être envoyé avant le rendez-vous.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <p className="font-light text-sm leading-relaxed text-white/90">
                  En cas de situation particulière (grossesse, pathologie, situation de handicap…), n’hésitez pas à me le préciser.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <p className="font-light text-sm leading-relaxed text-white/90">
                  Les soins sont réalisés dans le strict respect de votre rythme et de vos besoins.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- SECTION ACCES --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#faf1e8] p-8 md:p-12 rounded-3xl">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h3 className="font-['Whisper',cursive] text-4xl text-[#cc8787] mb-2">Nous trouver</h3>
                <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#00433a] mb-6">
                  Accès au cabinet
                </h2>
                <div className="flex items-start mb-6">
                  <MapPin className="w-6 h-6 text-[#cc8787] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#00433a] text-lg">Situé à Aubers (59249)</p>
                    <p className="text-[#48615c] font-light mt-2 italic border-l-2 border-[#cc8787] pl-3">
                      L’adresse précise vous sera communiquée lors de la confirmation de votre prise de rendez-vous.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 w-full">
                {/* Espace pour l'intégration d'une carte (Google Maps ou image statique) */}
                <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden border-4 border-white shadow-md relative group flex items-center justify-center">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                   <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm text-center">
                      <MapPin className="w-6 h-6 text-[#cc8787] mx-auto mb-2" />
                      <span className="text-[#00433a] font-medium text-sm uppercase tracking-wider">Plan d'accès</span>
                   </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- SECTION A SAVOIR (ACCORDEON) --- */}
      <section className="py-24 bg-[#faf1e8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#00433a] mb-4">
                À savoir
              </h2>
              <p className="text-[#48615c] font-light">
                Merci pour votre compréhension et votre respect, essentiels pour préserver la qualité de chaque accompagnement.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-2">
              <AccordionItem 
                title="Préparation & Annulation" 
                icon={Clock}
                isOpen={openAccordion === 0} 
                onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}
              >
                Chaque rendez-vous est un moment entièrement dédié à votre bien-être. Sa préparation demande du temps, de l’attention et de l’organisation en amont, afin de vous accueillir dans les meilleures conditions.<br/><br/>
                En cas d’empêchement, <strong>merci de prévenir au moins 24h à l’avance.</strong><br/><br/>
                Tout rendez-vous non honoré ou annulé tardivement impacte l’organisation et prive une autre personne de ce temps qui lui était destiné. En cas de rendez-vous non honoré, sans retour, je me réserve le droit de refuser une future réservation.
              </AccordionItem>

              <AccordionItem 
                title="Règlement" 
                icon={CreditCard}
                isOpen={openAccordion === 1} 
                onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}
              >
                Le règlement s’effectue le jour du rendez-vous, selon les modalités convenues.<br/><br/>
                Concernant les cartes cadeaux, le paiement se fait lors de l’achat de celle-ci.
              </AccordionItem>

              <AccordionItem 
                title="Ponctualité" 
                icon={AlertCircle}
                isOpen={openAccordion === 2} 
                onClick={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}
              >
                Merci de vous présenter à l’heure convenue.<br/><br/>
                Tout retard pourra entraîner une réduction du temps de soin, sans modification du tarif, afin de ne pas impacter les rendez-vous suivants.
              </AccordionItem>

              <AccordionItem 
                title="Cadre des soins & Contre-indications" 
                icon={ShieldCheck}
                isOpen={openAccordion === 3} 
                onClick={() => setOpenAccordion(openAccordion === 3 ? -1 : 3)}
              >
                Les massages proposés sont exclusivement des soins bien-être, sans visée médicale. Ils ne remplacent en aucun cas un suivi médical.<br/><br/>
                <strong>Contre-indications :</strong> En cas de pathologie, grossesse à risque ou situation particulière, il est important de demander l’avis de votre professionnel de santé et de me le signaler en amont.<br/><br/>
                <strong>Responsabilité :</strong> Les prestations proposées visent au bien-être et à la détente. Le client reste responsable de ses choix et de son état de santé.
              </AccordionItem>

              <AccordionItem 
                title="Respect et Bienveillance" 
                icon={HeartHandshake}
                isOpen={openAccordion === 4} 
                onClick={() => setOpenAccordion(openAccordion === 4 ? -1 : 4)}
              >
                Les soins sont réalisés dans un cadre professionnel, respectueux et bienveillant.<br/><br/>
                Pour les rendez-vous avec des hommes, les massages proposés sont <strong>strictement des massages bien-être</strong>. Aucune ambiguïté ne sera tolérée.<br/><br/>
                Je me réserve le droit de refuser ou d’interrompre un soin à tout moment si les conditions de respect et de sécurité ne sont pas réunies.
              </AccordionItem>
            </div>
            
            <p className="text-center text-xs text-[#48615c]/60 mt-8 uppercase tracking-widest">
              Toute prise de rendez-vous implique l’acceptation des présentes conditions.
            </p>
          </FadeInSection>
        </div>
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
