import type {
  BookingPageData,
  HomePageData,
  SignatureRitualPageData,
  SiteSettingsData,
  WellnessPageData,
  WellnessServiceDetailPageData,
} from '@/lib/site-model'

export const defaultSiteSettings: SiteSettingsData = {
  bookingCta: {
    href: '/contact',
    label: 'Prendre RDV',
  },
  contact: {
    address: '2 Rue de la Tranelle\n59249 Aubers',
    email: 'kvalquenart@gmail.com',
    phone: '06 61 85 56 89',
  },
  footerDescription:
    'Un espace dédié à votre bien-être corporel et émotionnel, pensé pour vous offrir une parenthèse de douceur et de reconnexion à soi.',
  legalLinks: [
    { href: '/mentions-legales', label: 'Mentions légales' },
    { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
    { href: '/cgv', label: 'CGV' },
  ],
  navigation: [
    { href: '/', title: 'Accueil' },
    {
      href: '/soins-bien-etre',
      submenu: [
        {
          href: '/soins-bien-etre/massage-ayurvedique',
          title: 'Massage Ayurvédique',
        },
        { href: '/rituel-esprit', title: 'Soins signature' },
        { href: '/soins-bien-etre/massage-intuitif', title: 'Massage Intuitif' },
        { href: '/soins-bien-etre/massage-lomi-lomi', title: 'Massage Lomi-Lomi' },
        { href: '/soins-bien-etre/massage-du-dos', title: 'Massage du dos' },
        { href: '/soins-bien-etre/relaxation-du-visage', title: 'Relaxation du visage' },
        { href: '/soins-bien-etre/massage-cranien', title: 'Massage crânien' },
        { href: '/soins-bien-etre/massage-plantaire', title: 'Massage plantaire' },
      ],
      title: 'Soins bien-être',
    },
    {
      href: '/rituels-specifiques',
      submenu: [
        {
          href: '/rituels-specifiques/liberation-emotionnelle-doterra',
          title: 'Libération émotionnelle DoTERRA',
        },
        { href: '/rituels-specifiques/maderotherapie', title: 'Madérothérapie' },
        { href: '/rituels-specifiques/drainage-lymphatique', title: 'Drainage lymphatique' },
        {
          href: '/rituels-specifiques/massage-cire-bougie',
          title: 'Massage à la cire de bougie',
        },
      ],
      title: 'Rituels spécifiques',
    },
    {
      href: '/rituel-head-spa',
      submenu: [
        { href: '/rituel-head-spa/rituel-classique', title: 'Rituel Classique' },
        { href: '/rituel-head-spa/rituel-expert', title: 'Rituel Expert' },
        { href: '/rituel-head-spa/rituel-enfant', title: 'Rituel Enfant' },
      ],
      title: 'Rituel Head Spa',
    },
    {
      href: '/maternite-parentalite',
      submenu: [
        { href: '/maternite-parentalite/massage-prenatal', title: 'Massage prénatal' },
        { href: '/maternite-parentalite/massage-bebe', title: 'Massage bébé' },
      ],
      title: 'Maternité & Parentalité',
    },
    {
      href: '/nutrition-coaching',
      title: 'Nutrition & Coaching',
    },
    { href: '/contact', title: 'Contact' },
  ],
  shortSiteName: 'Krystel',
  siteName: 'Krystel Valquenart',
  socials: {
    facebookUrl: 'https://www.facebook.com/krystel2207',
    instagramUrl: '#',
  },
  tagline: 'Massages, Rituels bien-être, Accompagnement maternité et équilibre de vie.',
}

export const defaultBookingPage: BookingPageData = {
  access: {
    location: 'Situé à Aubers (59249)',
    mapImageAlt: 'Photo du cabinet bien-être',
    mapImageUrl: '/site-images/contact-cabinet.jpg',
    mapLabel: 'Le cabinet',
    note: 'Retrouvez ici l’adresse du salon pour préparer facilement votre venue.',
    scriptTitle: 'Nous trouver',
    title: 'Accès au cabinet',
  },
  faq: {
    acceptanceText: 'Toute prise de rendez-vous implique l’acceptation des présentes conditions.',
    introText:
      'Merci pour votre compréhension et votre respect, essentiels pour préserver la qualité de chaque accompagnement.',
    items: [
      {
        description:
          'Chaque rendez-vous est un moment entièrement dédié à votre bien-être. Sa préparation demande du temps, de l’attention et de l’organisation en amont, afin de vous accueillir dans les meilleures conditions.\n\nEn cas d’empêchement, merci de prévenir au moins 24h à l’avance.\n\nTout rendez-vous non honoré ou annulé tardivement impacte l’organisation et prive une autre personne de ce temps qui lui était destiné. En cas de rendez-vous non honoré, sans retour, je me réserve le droit de refuser une future réservation.',
        icon: 'clock',
        title: 'Préparation & Annulation',
      },
      {
        description:
          'Le règlement s’effectue le jour du rendez-vous, selon les modalités convenues.\n\nConcernant les cartes cadeaux, le paiement se fait lors de l’achat de celle-ci.',
        icon: 'credit-card',
        title: 'Règlement',
      },
      {
        description:
          'Merci de vous présenter à l’heure convenue.\n\nTout retard pourra entraîner une réduction du temps de soin, sans modification du tarif, afin de ne pas impacter les rendez-vous suivants.',
        icon: 'alert-circle',
        title: 'Ponctualité',
      },
      {
        description:
          'Les massages proposés sont exclusivement des soins bien-être, sans visée médicale. Ils ne remplacent en aucun cas un suivi médical.\n\nContre-indications : En cas de pathologie, grossesse à risque ou situation particulière, il est important de demander l’avis de votre professionnel de santé et de me le signaler en amont.\n\nResponsabilité : Les prestations proposées visent au bien-être et à la détente. Le client reste responsable de ses choix et de son état de santé.',
        icon: 'shield-check',
        title: 'Cadre des soins & Contre-indications',
      },
      {
        description:
          'Les soins sont réalisés dans un cadre professionnel, respectueux et bienveillant.\n\nPour les rendez-vous avec des hommes, les massages proposés sont strictement des massages bien-être. Aucune ambiguïté ne sera tolérée.\n\nJe me réserve le droit de refuser ou d’interrompre un soin à tout moment si les conditions de respect et de sécurité ne sont pas réunies.',
        icon: 'heart-handshake',
        title: 'Respect et Bienveillance',
      },
    ],
    title: 'À savoir',
  },
  form: {
    description: 'Complétez ce formulaire pour me transmettre votre demande de rendez-vous.',
    emailLabel: 'Adresse E-mail',
    messageLabel: 'Votre message',
    messagePlaceholder:
      'Précisez ici vos attentes, vos disponibilités, ou si c’est pour un bon cadeau...',
    nameLabel: 'Nom & Prénom',
    phoneLabel: 'Téléphone',
    serviceLabel: 'Prestation souhaitée (si définie)',
    serviceOptions: [
      'Soins bien-être',
      'Rituels spécifiques',
      'Rituel Head Spa',
      'Maternité & Parentalité',
      'Nutrition & Coaching',
      'Mon soin signature – Rituel Esprit',
      'Je ne sais pas encore',
    ],
    servicePlaceholder: 'Sélectionnez une option ou "Je ne sais pas encore"',
    submitLabel: 'Envoyer ma demande',
    title: 'Formulaire de contact',
  },
  giftCard: {
    detailsParagraph:
      'Pour la préparer, il suffit de me contacter avec le prénom de la personne, la prestation souhaitée ou le montant à offrir. Je vous guiderai ensuite pour la remise et le règlement.',
    emailLabel: 'Par e-mail',
    facebookLabel: 'Via Facebook',
    formLabel: 'Ou directement via le formulaire de cette page.',
    imageBackAlt: 'Carte cadeau Instant Présent - verso',
    imageFrontAlt: 'Carte cadeau Instant Présent - recto',
    introParagraph:
      'Vous pouvez offrir une carte cadeau pour un soin, un rituel ou une parenthèse bien-être personnalisée. C’est une jolie attention pour un anniversaire, une naissance, une fête ou simplement pour faire plaisir.',
    orderTitle: 'Commander une carte cadeau',
    scriptTitle: 'Offrir un moment',
    title: 'La carte cadeau',
  },
  hero: {
    backgroundImageAlt: 'Cabinet bien-être prêt à vous accueillir',
    backgroundImageUrl: '/site-images/contact-cabinet-hero.jpg',
    quote: '« Un premier pas vers vous… commence souvent par un simple message »',
    title: 'Prendre rendez-vous',
  },
  importantInfo: {
    items: [
      'Pour certains soins, un questionnaire peut-être envoyé avant le rendez-vous.',
      'En cas de situation particulière (grossesse, pathologie, situation de handicap…), n’hésitez pas à me le préciser.',
      'Les soins sont réalisés dans le strict respect de votre rythme et de vos besoins.',
    ],
    title: 'Informations importantes avant la séance',
  },
  intro: {
    paragraphs: [
      'Les rendez-vous se font uniquement sur demande, afin de vous proposer un accompagnement totalement personnalisé.',
      'Chaque demande est unique. C’est pourquoi un temps d’échange peut être proposé en amont, afin de vous orienter vers le soin le plus adapté à votre état du moment.',
    ],
    title:
      'Vous souhaitez vous accorder un moment de bien-être, relâcher les tensions ou simplement prendre soin de vous ?',
  },
  contactMethods: {
    emailTitle: 'Par e-mail',
    facebookTitle: 'Via Facebook',
    phoneTitle: 'Par téléphone',
  },
  reservation: {
    description:
      'Je vous répondrai dans les plus brefs délais pour échanger avec vous et convenir ensemble d’un rendez-vous adapté à vos besoins.',
    facebookLabel: 'Message privé sur la page',
    facebookUrl: 'https://www.facebook.com/krystel2207',
    scriptTitle: 'Me joindre',
    title: 'Comment réserver ?',
  },
}

export const defaultHomePage: HomePageData = {
  about: {
    imageAlt: 'Krystel praticienne bien-être',
    imageUrl: '/site-images/home-about-krystel.jpg',
    paragraphs: [
      'Je m’appelle Krystel, praticienne en bien-être, passionnée par l’écoute du corps et l’accompagnement global de la personne.',
      "Depuis plus de 20 ans, j’exerce en tant qu’Auxiliaire de Puériculture, en maternité, pédiatrie et néonatalogie. C'est un métier profondément humain qui m’a appris l’importance du toucher, de la présence et de l’écoute.",
      'Au fil du temps, j’ai ressenti le besoin d’élargir mon accompagnement, pour prendre soin autrement… dans la douceur, le respect et la globalité.',
    ],
    scriptTitle: 'Mon parcours',
    title: 'À propos de Krystel',
  },
  approach: {
    highlightedQuote:
      '« À travers mes soins, mon intention est simple : Vous offrir un espace où vous pouvez ralentir, relâcher les tensions et vous reconnecter à vous-même. »',
    introText:
      'Chaque personne est unique. C’est pourquoi j’accorde une attention particulière à vos besoins, à votre état du moment et à votre histoire.',
    title: 'Une approche basée sur l’écoute',
  },
  audience: {
    highlightedText:
      'J’accueille également les personnes en situation de handicap, avec une attention particulière portée à leurs besoins spécifiques. Un échange préalable, si besoin en présence d’un accompagnant, permet d’adapter au mieux le soin et de vous accueillir dans les meilleures conditions.',
    imageAlt: 'Soin bébé réalisé par Krystel',
    imageUrl: '/site-images/home-audience-baby-care.jpg',
    paragraphs: [
      'J’accompagne les femmes, les hommes, les enfants, ainsi que les futures et jeunes mamans, dans des moments de vie parfois intenses, parfois fragiles, mais toujours précieux.',
      'Que ce soit pour un moment de détente, un besoin de lâcher prise, ou un accompagnement plus spécifique, je vous accueille avec bienveillance et sans jugement.',
    ],
    title: 'Un accompagnement pour tous',
  },
  contactBanner: {
    text: 'N’hésitez pas à me contacter en amont pour toute demande spécifique.',
  },
  hero: {
    accentTitle: 'pour toute la famille.',
    backgroundImageAlt: 'Massage bien-être dans une ambiance chaleureuse',
    backgroundImageUrl: '/site-images/home-hero-massage.jpg',
    ctaHref: '#prestations',
    ctaLabel: 'Découvrir les soins',
    scriptTitle: 'Bienvenue',
    subtitle: 'Massages, Rituels bien-être, Accompagnement maternité et équilibre de vie.',
    title:
      'Un espace de douceur pour relâcher les tensions, apaiser l’esprit et se reconnecter à soi…',
  },
  services: {
    ctaHref: '/contact',
    ctaLabel: 'Voir toutes les prestations',
    itemCtaLabel: 'En savoir plus',
    items: [
      {
        description:
          "Massages relaxants et enveloppants pour dénouer les tensions corporelles et apaiser l'esprit.",
        href: '/soins-bien-etre',
        imageAlt: 'Soins bien-être',
        imageUrl: '/site-images/wellness-massage-back.jpg',
        title: 'Soins bien-être',
      },
      {
        description:
          'Un accompagnement tout en douceur pour les futures et jeunes mamans, ainsi que pour bébé.',
        href: '/maternite-parentalite',
        imageAlt: 'Maternité',
        imageUrl: '/site-images/home-maternity-baby.jpg',
        title: 'Maternité & Parentalité',
      },
      {
        description:
          'Une évasion inspirée des traditions japonaises pour purifier le cuir chevelu et lâcher prise totalement.',
        href: '/rituel-head-spa',
        imageAlt: 'Head Spa',
        imageUrl: '/site-images/head-spa-water.jpg',
        title: 'Rituel Head Spa',
      },
    ],
    scriptTitle: 'Découvrez',
    title: 'Mes Prestations',
  },
  signatureFeature: {
    description:
      'Un soin profond et enveloppant pour ralentir, vous déposer et retrouver un équilibre plus juste entre le corps, le mental et les ressentis.',
    duration: '1h30',
    imageAlt: 'Mon soin signature Rituel Esprit',
    imageUrl: '/site-images/wellness-oils.jpg',
    primaryCtaHref: '/rituel-esprit',
    primaryCtaLabel: 'Découvrir ce soin',
    price: '90€',
    scriptTitle: 'Mon soin signature',
    secondaryCtaHref: '/contact',
    secondaryCtaLabel: 'Réserver',
    subtitle:
      'Une escale holistique de 1h30 pour harmoniser le corps, apaiser l’esprit et rééquilibrer l’énergie.',
    title: 'Rituel Esprit',
  },
  testimonials: {
    items: [
      {
        author: 'Cindy Ducatillon',
        quote:
          "Je suis hyper reconnaissante d’avoir rencontré Krystel pour un suivi en madérothérapie... J’ai eu des résultats incroyables, tout en bénéficiant de ses compétences en perte de poids et de ses conseils en nutrition. Cela m’a redonné envie de prendre soin de mon corps... Merci infiniment.",
      },
      {
        author: 'Louise Degr',
        quote:
          "Le massage à la cire de bougie chaude a été une expérience absolument incroyable... L’ambiance est apaisante, on se sent tout de suite à l’aise. Le massage était parfait, à la fois relaxant et profondément efficace... Je recommande à 100 % et je reviendrai sans hésiter.",
      },
      {
        author: 'Laura Vandermalle',
        quote:
          "Un très beau moment de relaxation pendant ma grossesse... Le massage prénatal m’a fait énormément de bien, autant physiquement que mentalement. J’ai vraiment réussi à lâcher prise pendant une heure entière... Merci pour ce moment hors du temps.",
      },
    ],
    scriptTitle: 'Témoignages',
    title: 'Mots de douceur',
  },
}

export const defaultWellnessPage: WellnessPageData = {
  benefits: {
    items: [
      {
        description:
          'Libérez-vous de la charge mentale quotidienne et offrez une pause méritée à votre esprit.',
        icon: 'wind',
        title: 'Lâcher prise mental',
      },
      {
        description:
          'Dénouez les tensions corporelles accumulées grâce à des mouvements ciblés et profonds.',
        icon: 'heart',
        title: 'Détente musculaire',
      },
      {
        description:
          'Rétablissez la circulation de vos énergies pour retrouver un équilibre physique et émotionnel.',
        icon: 'sparkles',
        title: 'Harmonie globale',
      },
    ],
    title: 'Les bienfaits de nos soins',
  },
  cta: {
    buttonHref: '/contact',
    buttonLabel: 'Me contacter',
    text: 'Chaque personne est différente. N’hésitez pas à me contacter, nous échangerons ensemble pour trouver le massage le plus adapté à vos besoins du moment.',
    title: 'Besoin de conseils pour choisir votre soin ?',
  },
  hero: {
    backgroundImageAlt: 'Soin bien-être enveloppant',
    backgroundImageUrl: '/site-images/wellness-massage-back.jpg',
    subtitle: 'Une parenthèse de douceur pour harmoniser le corps et l’esprit.',
    title: 'Soins Bien-Être',
  },
  intro: {
    paragraphs: [
      'Parce que notre corps garde en mémoire nos émotions et nos rythmes de vie, s’offrir un massage est bien plus qu’un simple instant de détente : c’est un véritable retour à soi.',
      'Chacun de mes soins bien-être est réalisé avec des huiles végétales bio et adapté à votre sensibilité du moment. Que vous cherchiez à dénouer des tensions profondes, à apaiser un mental agité ou simplement à savourer le silence, vous trouverez ici le rituel qui vous correspond.',
    ],
    title: 'L’art de prendre soin de vous',
  },
  services: {
    itemCtaLabel: 'Découvrir ce soin',
    items: [
      {
        description:
          'Un massage enveloppant et rythmé, inspiré de la tradition indienne, pour rééquilibrer le corps et apaiser l’esprit.',
        duration: '1h30',
        href: '/soins-bien-etre/massage-ayurvedique',
        imageAlt: 'Massage Ayurvédique',
        imageUrl: '/site-images/ayurveda-oil.jpg',
        price: '90€',
        title: 'Massage Ayurvédique',
      },
      {
        description: 'Un soin personnalisé qui s’adapte à votre corps et à votre moment présent.',
        duration: '1h00',
        href: '/soins-bien-etre/massage-intuitif',
        imageAlt: 'Massage Intuitif',
        imageUrl: '/site-images/wellness-intuitive.jpg',
        price: '60€',
        title: 'Massage Intuitif',
      },
      {
        description:
          'Un massage fluide et enveloppant inspiré des traditions hawaïennes, qui invite au lâcher prise et à une profonde reconnexion à soi.',
        duration: '1h00',
        href: '/soins-bien-etre/massage-lomi-lomi',
        imageAlt: 'Massage Lomi-Lomi',
        imageUrl: '/site-images/wellness-lomi-lomi.jpg',
        price: '60€',
        title: 'Massage Lomi-Lomi',
      },
      {
        description:
          'Un soin ciblé pour relâcher les tensions accumulées et retrouver légèreté et confort.',
        duration: '30 min',
        href: '/soins-bien-etre/massage-du-dos',
        imageAlt: 'Massage du Dos',
        imageUrl: '/site-images/home-hero-massage.jpg',
        price: '30€',
        title: 'Massage du Dos',
      },
      {
        description:
          'Un soin doux et apaisant pour relâcher les tensions du visage et apaiser le mental.',
        duration: '30 min',
        href: '/soins-bien-etre/relaxation-du-visage',
        imageAlt: 'Relaxation du visage',
        imageUrl: '/site-images/wellness-oils.jpg',
        price: '30€',
        title: 'Relaxation du visage',
      },
      {
        description:
          'Un soin délicat du cuir chevelu pour calmer le mental, relâcher les tensions et inviter à une profonde détente.',
        duration: '30 min',
        href: '/soins-bien-etre/massage-cranien',
        imageAlt: 'Massage Crânien',
        imageUrl: '/site-images/wellness-cranial.jpg',
        price: '30€',
        title: 'Massage Crânien',
      },
      {
        description:
          'Un soin relaxant des pieds pour relâcher les tensions et rééquilibrer le corps.',
        duration: '30 min',
        href: '/soins-bien-etre/massage-plantaire',
        imageAlt: 'Massage Plantaire',
        imageUrl: '/site-images/wellness-targeted-body.jpg',
        price: '30€',
        title: 'Massage Plantaire',
      },
    ],
  },
}

export const defaultSignatureRitualPage: SignatureRitualPageData = {
  benefits: {
    items: [
      {
        description:
          'Le soin aide à délier ce qui se fige dans le corps et ce qui pèse émotionnellement.',
        icon: 'release',
        title: 'Libération des tensions physiques et émotionnelles',
      },
      {
        description:
          'Le rythme lent du rituel invite au calme, au relâchement et à une respiration plus ample.',
        icon: 'calm',
        title: 'Apaisement profond du mental',
      },
      {
        description:
          'Le soin accompagne une circulation plus fluide de l’énergie pour retrouver une sensation d’élan.',
        icon: 'energy',
        title: 'Rééquilibrage énergétique',
      },
      {
        description:
          'Vous retrouvez davantage de clarté intérieure, de stabilité et une sensation de recentrage.',
        icon: 'balance',
        title: "Sensation d'alignement et de recentrage",
      },
      {
        description:
          'Les effets du soin se prolongent au-delà de la séance dans une détente plus installée.',
        icon: 'relax',
        title: 'Détente durable',
      },
    ],
    scriptTitle: 'Les bienfaits',
    title: 'Une sensation d’équilibre retrouvée',
  },
  closingCta: {
    primaryHref: '/contact',
    primaryLabel: 'Réserver ce soin',
    secondaryHref: '/soins-bien-etre',
    secondaryLabel: 'Voir les autres soins',
    text: 'Offrez-vous un moment hors du temps pour relâcher, ressentir et retrouver votre centre.',
    title: 'Prêt(e) à vivre ce rituel ?',
  },
  hero: {
    backgroundImageAlt: 'Soin signature Rituel Esprit',
    backgroundImageUrl: '/site-images/home-hero-massage.jpg',
    quote: '« Un soin où le corps se relâche… et où l’énergie retrouve son équilibre »',
    scriptTitle: 'Soin signature',
    title: 'Mon soin signature\nRituel Esprit',
  },
  overview: {
    imageAlt: 'Ambiance du Rituel Esprit',
    imageUrl: '/site-images/wellness-oils.jpg',
    paragraphs: [
      'Ce soin signature est une véritable invitation à ralentir, à vous déposer et à vous reconnecter profondément à vous-même.',
      'À travers un toucher conscient, des gestes fluides et une présence attentive, ce rituel agit à la fois sur le corps, le mental et l’énergie.',
      'Un moment hors du temps, pour vous reconnecter à vous-même en profondeur.',
    ],
    scriptTitle: 'Une escale holistique',
    title: 'Harmoniser le corps, apaiser l’esprit et rééquilibrer l’énergie',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '1h30',
    durationLabel: 'Durée',
    price: '90€',
    priceLabel: 'Tarif',
  },
  profile: {
    items: [
      'Vous ressentez un déséquilibre intérieur.',
      'Vous êtes fatigué(e), tendu(e) ou submergé(e).',
      "Vous avez besoin de vous recentrer et de retrouver de l'harmonie.",
      'Vous souhaitez vivre un soin profond, à la fois physique et émotionnel.',
    ],
    title: 'Pour vous si…',
  },
  treatment: {
    paragraphs: [
      'Ce Rituel associe des manœuvres enveloppantes, fluides et profondes, réalisées avec lenteur et intention.',
      'Le travail ne se limite pas au relâchement musculaire : il permet également de relancer la circulation de l’énergie dans le corps, favorisant une sensation d’harmonie globale.',
      'Chaque soin est unique, guidé par l’écoute de votre corps et de vos ressentis, pour vous accompagner là où vous en avez le plus besoin.',
    ],
    title: 'Le soin',
  },
}

export const defaultAyurvedicMassagePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous vous sentez fatigué(e), vidé(e), ou en manque d’énergie.',
      'Vous avez du mal à ralentir ou à vous recentrer.',
      'Vous ressentez un déséquilibre intérieur, physique ou émotionnel.',
      'Vous avez besoin de vous reconnecter à vous-même en douceur.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Apporte une profonde détente.',
        icon: 'droplets',
        title: 'Détente profonde',
      },
      {
        description: 'Rééquilibre les énergies du corps.',
        icon: 'wind',
        title: 'Énergies rééquilibrées',
      },
      {
        description: 'Relance la circulation.',
        icon: 'droplets',
        title: 'Circulation relancée',
      },
      {
        description: 'Apaise le mental.',
        icon: 'wind',
        title: 'Mental apaisé',
      },
      {
        description: 'Redonne une sensation de vitalité.',
        icon: 'leaf',
        title: 'Vitalité retrouvée',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/soins-bien-etre',
    secondaryLabel: 'Voir les autres soins',
    text: 'Réservez votre séance de massage ayurvédique et offrez-vous une véritable parenthèse régénérante.',
    title: 'Prêt(e) à vous accorder ce moment ?',
  },
  hero: {
    backgroundImageAlt: 'Huile chaude versée pendant un massage ayurvédique',
    backgroundImageUrl: '/site-images/ayurveda-oil.jpg',
    subtitle:
      'Un massage enveloppant et rythmé, inspiré de la tradition indienne, pour rééquilibrer le corps et apaiser l’esprit.',
    title: 'Massage Ayurvédique',
  },
  overview: {
    imageAlt: 'Pressions enveloppantes sur le dos pendant le soin',
    imageUrl: '/site-images/wellness-massage-back.jpg',
    paragraphs: [
      'Un massage complet du corps, à la fois enveloppant et tonique, avec des gestes fluides et rythmés, qui viennent relancer l’énergie et favoriser un profond lâcher-prise.',
    ],
    scriptTitle: 'Présentation',
    title: 'Qu’est-ce que le soin Ayurvédique ?',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '1h30',
    price: '90€',
  },
  slug: 'massage-ayurvedique',
  title: 'Massage Ayurvédique',
}

export const defaultIntuitiveMassagePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous vous sentez fatigué(e), tendu(e), un peu perdu(e), dans votre corps.',
      'Vous avez du mal à lâcher prise ou à ralentir.',
      'Vous ressentez le besoin d’être écouté(e) autrement, sans forcément mettre de mots.',
      'Vous cherchez un soin qui s’adapte entièrement à votre état du moment.',
    ],
    title: 'Ce soin est fait pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Relâche les tensions physiques et émotionnelles accumulées.',
        icon: 'droplets',
        title: 'Tensions apaisées',
      },
      {
        description: 'Aide à calmer l’agitation intérieure et à ralentir le rythme.',
        icon: 'wind',
        title: 'Mental apaisé',
      },
      {
        description: 'Favorise une sensation d’alignement, de recentrage et de présence à soi.',
        icon: 'leaf',
        title: 'Recentrement profond',
      },
      {
        description: 'Permet de mieux ressentir son corps et ses besoins du moment.',
        icon: 'droplets',
        title: 'Ressentis retrouvés',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/soins-bien-etre',
    secondaryLabel: 'Voir les autres soins',
    text: 'Offrez-vous un massage intuitif pensé pour votre état du moment, dans une écoute profonde du corps et du ressenti.',
    title: 'Envie de vous reconnecter à vous-même ?',
  },
  hero: {
    backgroundImageAlt: 'Massage intuitif personnalisé',
    backgroundImageUrl: '/site-images/wellness-intuitive.jpg',
    subtitle: 'Un soin personnalisé qui s’adapte à votre corps et à votre moment présent.',
    title: 'Massage Intuitif',
  },
  overview: {
    imageAlt: 'Massage intuitif enveloppant',
    imageUrl: '/site-images/wellness-intuitive.jpg',
    paragraphs: [
      'Un massage sur-mesure, guidé par l’écoute du corps, avec des gestes enveloppants et adaptés à vos besoins du moment.',
      'Chaque séance se construit dans l’instant, selon vos tensions, votre énergie et ce qui a besoin d’être accueilli. C’est un soin profondément intuitif, pensé pour vous aider à vous reconnecter à vous-même.',
    ],
    scriptTitle: 'Le soin',
    title: 'Se reconnecter à soi',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '1h00',
    price: '60€',
  },
  slug: 'massage-intuitif',
  title: 'Massage Intuitif',
}

export const defaultLomiLomiMassagePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous ressentez le besoin de vous évader, de vous déposer.',
      'Vous avez du mal à lâcher prise ou à vous détendre profondément.',
      'Vous vous sentez tendu(e), chargé(e), émotionnellement.',
      'Vous avez envie de vous offrir un moment hors du temps.',
      'Vous avez envie de ressentir plus que « juste se faire masser ».',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Invite à une détente profonde du corps et de l’esprit.',
        icon: 'wind',
        title: 'Détente profonde',
      },
      {
        description: 'Aide à libérer les tensions physiques et émotionnelles accumulées.',
        icon: 'droplets',
        title: 'Libération intérieure',
      },
      {
        description: 'Apporte une sensation de fluidité, de légèreté et de mouvement retrouvé.',
        icon: 'leaf',
        title: 'Fluidité retrouvée',
      },
      {
        description: 'Apaise le mental et favorise la reconnexion à ses ressentis.',
        icon: 'wind',
        title: 'Mental apaisé',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/soins-bien-etre',
    secondaryLabel: 'Voir les autres soins',
    text: 'Accordez-vous ce voyage sensoriel enveloppant et laissez le corps retrouver fluidité, espace et lâcher-prise.',
    title: 'Prêt(e) pour une parenthèse d’évasion ?',
  },
  hero: {
    backgroundImageAlt: 'Massage Lomi-Lomi enveloppant',
    backgroundImageUrl: '/site-images/wellness-lomi-lomi.jpg',
    subtitle:
      'Un massage fluide et enveloppant inspiré des traditions hawaïennes, qui invite au lâcher prise et à une profonde reconnexion à soi.',
    title: 'Massage Lomi-Lomi',
  },
  overview: {
    imageAlt: 'Massage Lomi-Lomi réalisé avec les avant-bras',
    imageUrl: '/site-images/wellness-lomi-lomi.jpg',
    paragraphs: [
      'Un massage réalisé principalement avec les avant-bras, avec des mouvements longs, fluides et continus, comme une vague.',
      'Un véritable voyage sensoriel qui enveloppe le corps et invite à un lâcher-prise total, dans une sensation d’évasion profonde.',
    ],
    scriptTitle: 'Le soin',
    title: 'Un massage d’évasion et de lâcher prise profond',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '1h00',
    price: '60€',
  },
  slug: 'massage-lomi-lomi',
  title: 'Massage Lomi-Lomi',
}

export const defaultBackMassagePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous ressentez des tensions dans le dos, les épaules ou la nuque.',
      'Vous avez une posture contraignante ou un travail physique.',
      'Vous accumulez du stress au quotidien.',
      'Vous avez besoin d’un moment de relâchement rapide.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Dénoue les zones les plus sollicitées du haut du corps.',
        icon: 'droplets',
        title: 'Détente musculaire ciblée',
      },
      {
        description:
          'Aide à soulager les tensions accumulées dans le dos, les épaules et la nuque.',
        icon: 'leaf',
        title: 'Soulagement des tensions',
      },
      {
        description: 'Favorise une détente rapide et un apaisement du stress quotidien.',
        icon: 'wind',
        title: 'Stress apaisé',
      },
      {
        description: 'Laisse une sensation de légèreté, de confort et de relâchement immédiat.',
        icon: 'leaf',
        title: 'Légèreté retrouvée',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/soins-bien-etre',
    secondaryLabel: 'Voir les autres soins',
    text: 'Offrez-vous un temps de relâchement ciblé pour apaiser le haut du corps et retrouver plus de confort au quotidien.',
    title: 'Besoin de relâcher les tensions rapidement ?',
  },
  hero: {
    backgroundImageAlt: 'Massage ciblé du dos et des épaules',
    backgroundImageUrl: '/site-images/home-hero-massage.jpg',
    subtitle:
      'Un soin ciblé pour relâcher les tensions accumulées et retrouver légèreté et confort.',
    title: 'Massage du Dos',
  },
  overview: {
    imageAlt: 'Massage localisé du dos, des épaules et de la nuque',
    imageUrl: '/site-images/wellness-targeted-body.jpg',
    paragraphs: [
      'Un massage localisé du dos, de la nuque et des épaules pouvant s’étendre au cuir chevelu, avec des gestes adaptés pour dénouer les tensions et favoriser une détente immédiate.',
      'Ce soin court et efficace est idéal lorsque le corps a besoin d’un relâchement rapide, sans renoncer à la qualité d’une prise en charge enveloppante et attentive.',
    ],
    scriptTitle: 'Le soin',
    title: 'Un soin ciblé pour relâcher les tensions accumulées et retrouver légèreté et confort',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '30 min',
    price: '30€',
  },
  slug: 'massage-du-dos',
  title: 'Massage du Dos',
}

export const defaultFaceRelaxationPage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous ressentez de la fatigue ou des traits marqués.',
      'Vous avez le mental chargé.',
      'Vous avez besoin de douceur et de lâcher-prise.',
      'Vous souhaitez vous offrir un moment cocooning.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Invite à une détente profonde du visage et du haut du corps.',
        icon: 'droplets',
        title: 'Détente profonde',
      },
      {
        description: 'Laisse les traits plus reposés et le visage visiblement détendu.',
        icon: 'leaf',
        title: 'Visage reposé',
      },
      {
        description: 'Apaise le mental et aide à ralentir le rythme intérieur.',
        icon: 'wind',
        title: 'Mental apaisé',
      },
      {
        description: 'Procure une sensation globale de confort, de douceur et de bien-être.',
        icon: 'leaf',
        title: 'Bien-être global',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/soins-bien-etre',
    secondaryLabel: 'Voir les autres soins',
    text: 'Accordez-vous cette parenthèse de douceur pour détendre les traits, relâcher la pression et retrouver un apaisement global.',
    title: 'Envie d’un vrai moment cocooning ?',
  },
  hero: {
    backgroundImageAlt: 'Soin relaxant du visage',
    backgroundImageUrl: '/site-images/wellness-oils.jpg',
    subtitle: 'Un soin doux et apaisant pour relâcher les tensions du visage et apaiser le mental.',
    title: 'Relaxation du visage',
  },
  overview: {
    imageAlt: 'Massage du visage aux gestes lents et enveloppants',
    imageUrl: '/site-images/wellness-oils.jpg',
    paragraphs: [
      'Un massage du visage aux gestes lents et enveloppants, favorisant la détente, la circulation et un véritable moment de relâchement.',
      'Ce soin invite à ralentir, à adoucir les tensions du visage et à retrouver une sensation immédiate de douceur, de repos et de présence à soi.',
    ],
    scriptTitle: 'Le soin',
    title: 'Un soin doux et apaisant pour relâcher les tensions du visage et apaiser le mental',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '30 min',
    price: '30€',
  },
  slug: 'relaxation-du-visage',
  title: 'Relaxation du visage',
}

export const defaultCranialMassagePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous avez le mental très actif.',
      'Vous ressentez du stress ou de la fatigue.',
      'Vous avez des tensions au niveau de la tête ou de la nuque.',
      'Vous avez des difficultés à lâcher prise.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Aide à calmer l’agitation intérieure et à retrouver plus de silence mental.',
        icon: 'wind',
        title: 'Mental apaisé',
      },
      {
        description: 'Favorise une diminution du stress et une détente nerveuse rapide.',
        icon: 'droplets',
        title: 'Stress diminué',
      },
      {
        description:
          'Relâche les tensions accumulées au niveau de la tête, du cuir chevelu et de la nuque.',
        icon: 'leaf',
        title: 'Tensions relâchées',
      },
      {
        description: 'Laisse une agréable sensation de légèreté et de relâchement profond.',
        icon: 'wind',
        title: 'Légèreté retrouvée',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/soins-bien-etre',
    secondaryLabel: 'Voir les autres soins',
    text: 'Offrez-vous ce temps d’apaisement pour relâcher la pression nerveuse et retrouver une sensation immédiate de calme.',
    title: 'Besoin de faire taire le mental ?',
  },
  hero: {
    backgroundImageAlt: 'Massage crânien relaxant',
    backgroundImageUrl: '/site-images/wellness-cranial.jpg',
    subtitle:
      'Un soin profondément relaxant pour apaiser le mental et relâcher les tensions nerveuses.',
    title: 'Massage crânien',
  },
  overview: {
    imageAlt: 'Massage doux du cuir chevelu et de la tête',
    imageUrl: '/site-images/wellness-cranial.jpg',
    paragraphs: [
      'Un massage du cuir chevelu et de la tête, avec des gestes doux et enveloppants, favorisant une détente profonde et un apaisement immédiat.',
      'Ce soin est particulièrement indiqué lorsque le stress, la fatigue mentale ou les tensions de la nuque empêchent de vraiment relâcher la pression.',
    ],
    scriptTitle: 'Le soin',
    title:
      'Un soin profondément relaxant pour apaiser le mental et relâcher les tensions nerveuses',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '30 min',
    price: '30€',
  },
  slug: 'massage-cranien',
  title: 'Massage crânien',
}

export const defaultPlantarMassagePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous ressentez de la fatigue générale.',
      'Vous êtes souvent debout ou en mouvement.',
      'Vous avez besoin de vous recentrer.',
      'Vous souhaitez une détente globale.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Invite à une détente profonde du corps à partir des pieds.',
        icon: 'droplets',
        title: 'Détente profonde',
      },
      {
        description: 'Laisse une sensation agréable de légèreté et de relâchement.',
        icon: 'leaf',
        title: 'Légèreté retrouvée',
      },
      {
        description: 'Aide à relâcher les tensions accumulées après une journée intense.',
        icon: 'wind',
        title: 'Tensions apaisées',
      },
      {
        description: 'Procure un apaisement général et une sensation de recentrage.',
        icon: 'leaf',
        title: 'Apaisement global',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/soins-bien-etre',
    secondaryLabel: 'Voir les autres soins',
    text: 'Offrez à vos pieds un soin profondément relaxant pour retrouver ancrage, confort et détente globale.',
    title: 'Envie de vous recentrer en douceur ?',
  },
  hero: {
    backgroundImageAlt: 'Massage plantaire relaxant',
    backgroundImageUrl: '/site-images/wellness-targeted-body.jpg',
    subtitle: 'Un soin relaxant des pieds pour relâcher les tensions et rééquilibrer le corps.',
    title: 'Massage plantaire',
  },
  overview: {
    imageAlt: 'Massage des pieds aux gestes précis et enveloppants',
    imageUrl: '/site-images/wellness-targeted-body.jpg',
    paragraphs: [
      'Un massage des pieds avec des gestes précis et enveloppants, permettant de détendre l’ensemble du corps à travers cette zone réflexe.',
      'Ce soin favorise un relâchement global, particulièrement apprécié lorsque le corps a besoin de retrouver calme, ancrage et légèreté.',
    ],
    scriptTitle: 'Le soin',
    title: 'Un soin relaxant des pieds pour relâcher les tensions et rééquilibrer le corps',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '30 min',
    price: '30€',
  },
  slug: 'massage-plantaire',
  title: 'Massage plantaire',
}

export const defaultRitualsPage: WellnessPageData = {
  benefits: {
    items: [
      {
        description:
          'Des rituels ciblés pensés pour accompagner des besoins précis, avec une approche globale du bien-être.',
        icon: 'sparkles',
        title: 'Approche personnalisée',
      },
      {
        description:
          'Chaque soin aide à relâcher les tensions physiques et émotionnelles, tout en laissant plus d’espace au corps.',
        icon: 'heart',
        title: 'Relâchement profond',
      },
      {
        description:
          'Une parenthèse plus spécifique pour favoriser recentrage, légèreté et apaisement durable.',
        icon: 'wind',
        title: 'Équilibre retrouvé',
      },
    ],
    title: 'Les bienfaits de ces rituels',
  },
  cta: {
    buttonHref: '/contact',
    buttonLabel: 'Me contacter',
    text: 'Si vous hésitez entre plusieurs rituels, nous pouvons échanger ensemble pour choisir l’accompagnement le plus juste selon vos besoins du moment.',
    title: 'Besoin d’être orienté(e) ?',
  },
  hero: {
    backgroundImageAlt: 'Rituel bien-être avec huiles et gestuelle enveloppante',
    backgroundImageUrl: '/site-images/wellness-oils.jpg',
    subtitle:
      'Des soins ciblés et sensoriels pour aller plus loin dans le lâcher-prise, le recentrage et l’accompagnement du corps.',
    title: 'Rituels Spécifiques',
  },
  intro: {
    paragraphs: [
      'Certains moments de vie demandent un accompagnement plus ciblé, plus enveloppant, plus précis dans son intention. Les rituels spécifiques ont été pensés pour répondre à ces besoins avec douceur et justesse.',
      'À travers des techniques particulières, des gestes adaptés et parfois l’usage d’outils ou d’huiles spécifiques, ces soins invitent le corps à relâcher, à circuler autrement et à retrouver un mieux-être global.',
    ],
    title: 'Des rituels pensés pour aller plus loin',
  },
  services: {
    itemCtaLabel: 'Découvrir ce soin',
    items: [
      {
        description:
          'Un soin profond qui associe toucher et huiles essentielles DoTERRA pour accompagner l’apaisement émotionnel et le recentrage.',
        duration: '1h00',
        href: '/rituels-specifiques/liberation-emotionnelle-doterra',
        imageAlt: 'Libération émotionnelle avec huiles essentielles',
        imageUrl: '/site-images/wellness-oils.jpg',
        price: '60€',
        title: 'Libération émotionnelle DoTERRA',
      },
      {
        description:
          'Une technique tonique utilisant des outils en bois pour stimuler, lisser et aider le corps à retrouver une sensation de légèreté.',
        duration: '1h00',
        href: '/rituels-specifiques/maderotherapie',
        imageAlt: 'Madérothérapie',
        imageUrl: '/site-images/wellness-targeted-body.jpg',
        price: '60€',
        title: 'Madérothérapie',
      },
      {
        description:
          'Un soin doux et rythmé pour favoriser la sensation de circulation, de légèreté et de détox bien-être.',
        duration: '1h00',
        href: '/rituels-specifiques/drainage-lymphatique',
        imageAlt: 'Drainage lymphatique bien-être',
        imageUrl: '/site-images/wellness-intuitive.jpg',
        price: '60€',
        title: 'Drainage lymphatique',
      },
      {
        description:
          'Un rituel sensoriel et enveloppant réalisé avec la chaleur douce de la cire fondue pour une détente profonde.',
        duration: '1h00',
        href: '/rituels-specifiques/massage-cire-bougie',
        imageAlt: 'Massage à la cire de bougie',
        imageUrl: '/site-images/ayurveda-oil.jpg',
        price: '60€',
        title: 'Massage à la cire de bougie',
      },
    ],
  },
}

export const defaultEmotionalReleasePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous traversez une période émotionnelle intense.',
      'Vous vous sentez stressé(e), anxieux(se) ou submergé(e).',
      'Vous avez des difficultés à lâcher prise.',
      'Vous ressentez le besoin de vous recentrer.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Aide à relâcher les tensions émotionnelles accumulées avec douceur.',
        icon: 'droplets',
        title: 'Libération émotionnelle',
      },
      {
        description: 'Favorise un apaisement global du système nerveux et du rythme intérieur.',
        icon: 'wind',
        title: 'Système nerveux apaisé',
      },
      {
        description: 'Contribue à diminuer le stress et à retrouver plus d’espace mental.',
        icon: 'leaf',
        title: 'Stress diminué',
      },
      {
        description: 'Invite à une reconnexion à soi et à une sensation d’apaisement profond.',
        icon: 'droplets',
        title: 'Recentrage profond',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/rituels-specifiques',
    secondaryLabel: 'Voir les autres rituels',
    text: 'Ce soin crée un espace sécurisant pour déposer ce qui est là, apaiser le corps et laisser l’énergie circuler à nouveau plus librement.',
    title: 'Besoin d’un soin profondément enveloppant ?',
  },
  hero: {
    backgroundImageAlt: 'Huiles essentielles utilisées pendant un soin émotionnel',
    backgroundImageUrl: '/site-images/wellness-oils.jpg',
    subtitle:
      'Un soin profond pour apaiser les émotions, relâcher les tensions et retrouver un équilibre intérieur.',
    title: 'Libération émotionnelle DoTERRA',
  },
  overview: {
    imageAlt: 'Rituel émotionnel aux huiles essentielles DoTERRA',
    imageUrl: '/site-images/wellness-oils.jpg',
    paragraphs: [
      'Ce soin s’inspire d’une technique spécifique développée par DoTERRA, qui associe le pouvoir du toucher à l’utilisation ciblée d’huiles essentielles, pour accompagner le corps et l’esprit vers un mieux-être global.',
      'Ce soin repose sur l’utilisation de 8 huiles essentielles DoTERRA, sélectionnées pour leurs propriétés apaisantes, équilibrantes et soutenantes sur le plan émotionnel.',
      'En amont du rendez-vous, un questionnaire personnalisé vous est envoyé afin de mieux comprendre votre état du moment et d’adapter le soin à vos besoins.',
      'Le soin se concentre sur des zones clés du corps : le dos, les cervicales, le crâne ainsi que les pieds, permettant d’agir à la fois sur les tensions physiques et émotionnelles.',
      'À travers des gestes doux et répétitifs, associés aux bienfaits des huiles essentielles, le corps est invité à relâcher progressivement ce qui est accumulé, dans une atmosphère calme et sécurisante.',
      'Un moment pour se déposer, respirer… et laisser circuler à nouveau l’énergie en soi.',
    ],
    scriptTitle: 'Le soin',
    title:
      'Un soin personnalisé, où chaque détail est pensé pour accompagner vos émotions avec douceur',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '1h00',
    price: '60€',
  },
  slug: 'liberation-emotionnelle-doterra',
  title: 'Libération émotionnelle DoTERRA',
}

export const defaultMaderotherapyPage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous recherchez un soin tonique et ciblé.',
      'Vous souhaitez retrouver une sensation de légèreté corporelle.',
      'Vous aimez les techniques de massage plus dynamiques.',
      'Vous avez besoin d’un soin qui stimule et relance les sensations.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Stimule les tissus et favorise une sensation de tonus retrouvé.',
        icon: 'wind',
        title: 'Tonicité stimulée',
      },
      {
        description: 'Aide à délasser les zones où le corps se sent plus dense ou plus engorgé.',
        icon: 'droplets',
        title: 'Légèreté corporelle',
      },
      {
        description: 'Relance les sensations corporelles grâce à un travail rythmé et précis.',
        icon: 'leaf',
        title: 'Corps réveillé',
      },
      {
        description: 'Procure une sensation globale de dynamisation et de mieux-être.',
        icon: 'wind',
        title: 'Énergie relancée',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/rituels-specifiques',
    secondaryLabel: 'Voir les autres rituels',
    text: 'La madérothérapie est idéale lorsque vous recherchez un soin plus dynamique, à la fois ciblé, stimulant et profondément engageant pour le corps.',
    title: 'Envie d’un soin tonique et ciblé ?',
  },
  hero: {
    backgroundImageAlt: 'Soin de madérothérapie bien-être',
    backgroundImageUrl: '/site-images/wellness-targeted-body.jpg',
    subtitle:
      'Une technique de massage tonique qui utilise des outils en bois pour stimuler le corps et favoriser une sensation de légèreté.',
    title: 'Madérothérapie',
  },
  overview: {
    imageAlt: 'Massage ciblé inspiré de la madérothérapie',
    imageUrl: '/site-images/wellness-targeted-body.jpg',
    paragraphs: [
      'La madérothérapie est un soin bien-être utilisant différents outils en bois pour accompagner le massage par des mouvements précis, rythmés et ciblés.',
      'Elle permet de travailler le corps de manière plus tonique, tout en gardant une approche enveloppante et respectueuse de votre sensibilité.',
      'Ce rituel favorise une sensation de circulation, de légèreté et de réveil corporel, particulièrement appréciée lorsque le corps a besoin d’être stimulé et relancé.',
    ],
    scriptTitle: 'Le soin',
    title: 'Un soin dynamique pour stimuler le corps et retrouver plus de légèreté',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '1h00',
    price: '60€',
  },
  slug: 'maderotherapie',
  title: 'Madérothérapie',
}

export const defaultLymphaticDrainagePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous ressentez un besoin de légèreté générale.',
      'Vous avez envie d’un soin doux, fluide et enveloppant.',
      'Vous recherchez un moment de détox bien-être et de recentrage.',
      'Vous souhaitez retrouver une sensation de circulation plus harmonieuse dans le corps.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Favorise une sensation de circulation plus fluide dans le corps.',
        icon: 'droplets',
        title: 'Circulation favorisée',
      },
      {
        description: 'Aide à retrouver légèreté, confort et relâchement général.',
        icon: 'leaf',
        title: 'Légèreté retrouvée',
      },
      {
        description: 'Apaise le système nerveux grâce à une gestuelle douce et rythmée.',
        icon: 'wind',
        title: 'Relaxation profonde',
      },
      {
        description: 'Procure une sensation globale de détox bien-être et d’harmonisation.',
        icon: 'droplets',
        title: 'Apaisement global',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/rituels-specifiques',
    secondaryLabel: 'Voir les autres rituels',
    text: 'Ce rituel doux et progressif est idéal lorsque vous avez besoin de ralentir, de retrouver plus de fluidité et une sensation de légèreté générale.',
    title: 'Besoin de retrouver de la fluidité ?',
  },
  hero: {
    backgroundImageAlt: 'Drainage lymphatique bien-être',
    backgroundImageUrl: '/site-images/wellness-intuitive.jpg',
    subtitle:
      'Un soin doux et enveloppant pour favoriser la sensation de circulation, de légèreté et d’apaisement global.',
    title: 'Drainage lymphatique',
  },
  overview: {
    imageAlt: 'Gestuelle douce d’un drainage lymphatique bien-être',
    imageUrl: '/site-images/wellness-intuitive.jpg',
    paragraphs: [
      'Le drainage lymphatique bien-être repose sur des gestes lents, précis et réguliers, pensés pour accompagner le corps avec douceur.',
      'Ce soin invite à ralentir, à alléger les sensations de lourdeur et à retrouver une impression de circulation plus harmonieuse dans l’ensemble du corps.',
      'Il s’inscrit dans une démarche de détente globale, de recentrage et de mieux-être corporel, sans visée thérapeutique.',
    ],
    scriptTitle: 'Le soin',
    title: 'Un rituel doux pour retrouver fluidité, légèreté et apaisement',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '1h00',
    price: '60€',
  },
  slug: 'drainage-lymphatique',
  title: 'Drainage lymphatique',
}

export const defaultCandleMassagePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous aimez les soins sensoriels et enveloppants.',
      'Vous avez besoin de ralentir profondément.',
      'Vous recherchez une ambiance cocooning et réconfortante.',
      'Vous souhaitez relâcher les tensions tout en profitant d’une chaleur douce.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'La chaleur douce aide le corps à se détendre plus profondément.',
        icon: 'droplets',
        title: 'Chaleur réconfortante',
      },
      {
        description: 'Les gestes enveloppants apaisent les tensions physiques et mentales.',
        icon: 'wind',
        title: 'Tensions relâchées',
      },
      {
        description: 'Le soin crée une atmosphère cocooning propice au lâcher-prise.',
        icon: 'leaf',
        title: 'Cocooning absolu',
      },
      {
        description: 'Il laisse une sensation durable de douceur, de confort et de bien-être.',
        icon: 'droplets',
        title: 'Bien-être profond',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/rituels-specifiques',
    secondaryLabel: 'Voir les autres rituels',
    text: 'Le massage à la cire de bougie est une parenthèse chaleureuse et sensorielle, idéale lorsque vous avez besoin de réconfort, de douceur et d’un vrai lâcher-prise.',
    title: 'Envie d’un rituel chaleureux et enveloppant ?',
  },
  hero: {
    backgroundImageAlt: 'Massage à la cire de bougie',
    backgroundImageUrl: '/site-images/ayurveda-oil.jpg',
    subtitle:
      'Un rituel sensoriel et enveloppant où la chaleur douce de la cire fondue accompagne une détente profonde.',
    title: 'Massage à la cire de bougie',
  },
  overview: {
    imageAlt: 'Cire tiède utilisée pendant un massage sensoriel',
    imageUrl: '/site-images/ayurveda-oil.jpg',
    paragraphs: [
      'Le massage à la cire de bougie associe la chaleur délicate d’une cire fondue à des gestes fluides et enveloppants, pour créer un soin profondément réconfortant.',
      'La texture tiède glisse sur la peau dans une ambiance cocooning, propice au ralentissement, à l’apaisement et au relâchement des tensions.',
      'C’est un rituel particulièrement apprécié lorsque l’on a besoin d’un moment de douceur absolue, dans une atmosphère chaleureuse et sensorielle.',
    ],
    scriptTitle: 'Le soin',
    title: 'Un rituel chaleureux pour relâcher le corps et apaiser l’esprit',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '1h00',
    price: '60€',
  },
  slug: 'massage-cire-bougie',
  title: 'Massage à la cire de bougie',
}

export const defaultHeadSpaPage: WellnessPageData = {
  benefits: {
    items: [
      {
        description:
          'Apaise profondément le mental et invite à une vraie déconnexion du quotidien.',
        icon: 'wind',
        title: 'Mental apaisé',
      },
      {
        description:
          'Aide à relâcher les tensions accumulées au niveau de la tête, de la nuque et des épaules.',
        icon: 'heart',
        title: 'Tensions relâchées',
      },
      {
        description:
          'Stimule le cuir chevelu et laisse une sensation globale de légèreté et de lâcher-prise.',
        icon: 'sparkles',
        title: 'Légèreté retrouvée',
      },
    ],
    title: 'Les bienfaits du Head Spa',
  },
  cta: {
    buttonHref: '/contact',
    buttonLabel: 'Me contacter',
    text: 'Chaque rituel Head Spa peut être choisi selon votre besoin de détente, votre niveau de fatigue et le temps que vous souhaitez vous accorder.',
    title: 'Besoin d’aide pour choisir votre rituel ?',
  },
  hero: {
    backgroundImageAlt: 'Head Spa japonais dans une ambiance cocooning',
    backgroundImageUrl: '/site-images/head-spa-water.jpg',
    subtitle:
      'Un rituel de détente profonde inspiré des traditions japonaises, dédié au cuir chevelu, au relâchement des tensions et à l’apaisement du mental.',
    title: 'Le Head Spa Japonais',
  },
  intro: {
    paragraphs: [
      'Issu du Japon, ce rituel s’inscrit dans une approche globale du bien-être, où le soin du cuir chevelu est considéré comme essentiel pour favoriser la détente, la circulation et l’équilibre du corps et de l’esprit.',
      'Véritable parenthèse hors du temps, le Head Spa associe gestes précis, eau, chaleur et textures pour vous offrir un moment profondément relaxant et sensoriel.',
      'Il est particulièrement indiqué si vous ressentez une fatigue mentale, si votre mental est très actif, si vous avez des tensions au niveau de la tête, de la nuque ou des épaules, ou simplement l’envie d’un moment cocooning et apaisant.',
    ],
    title: 'Un rituel sensoriel pour ralentir profondément',
  },
  services: {
    itemCtaLabel: 'Découvrir ce soin',
    items: [
      {
        description:
          'Un véritable voyage sensoriel pour relâcher les tensions et apaiser profondément le corps et l’esprit.',
        duration: '1h15',
        href: '/rituel-head-spa/rituel-classique',
        imageAlt: 'Rituel Head Spa Classique',
        imageUrl: '/site-images/head-spa-water.jpg',
        price: '89€',
        title: 'Rituel Classique',
      },
      {
        description:
          'Une expérience encore plus complète, avec un travail prolongé sur le haut du corps pour un relâchement durable.',
        duration: '1h45',
        href: '/rituel-head-spa/rituel-expert',
        imageAlt: 'Rituel Head Spa Expert',
        imageUrl: '/site-images/head-spa-water.jpg',
        price: '129€',
        title: 'Rituel Expert',
      },
      {
        description:
          'Un soin adapté aux plus jeunes, réalisé en douceur et dans le respect de leur rythme.',
        duration: '45 min',
        href: '/rituel-head-spa/rituel-enfant',
        imageAlt: 'Rituel Head Spa Enfant',
        imageUrl: '/site-images/head-spa-water.jpg',
        price: '55€',
        title: 'Rituel Enfant',
      },
    ],
  },
}

export const defaultHeadSpaClassicPage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous ressentez le besoin de ralentir et de vous détendre profondément.',
      'Vous avez le mental chargé et du mal à lâcher prise.',
      'Vous ressentez des tensions au niveau de la tête, de la nuque ou des épaules.',
      'Vous souhaitez vous offrir un moment hors du temps, cocooning et apaisant.',
    ],
    title: 'Ce soin est parfait pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Aide à apaiser profondément le mental et à ralentir le rythme intérieur.',
        icon: 'wind',
        title: 'Apaisement profond',
      },
      {
        description:
          'Favorise une détente globale du corps à travers le cuir chevelu et le haut du corps.',
        icon: 'droplets',
        title: 'Détente globale',
      },
      {
        description:
          'Relâche les tensions accumulées au niveau de la nuque, des épaules et du crâne.',
        icon: 'leaf',
        title: 'Tensions libérées',
      },
      {
        description: 'Stimule le cuir chevelu et laisse une sensation durable de légèreté.',
        icon: 'droplets',
        title: 'Légèreté retrouvée',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du rituel',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/rituel-head-spa',
    secondaryLabel: 'Voir les autres rituels',
    text: 'Le rituel classique est idéal pour découvrir le Head Spa japonais à travers une expérience complète, enveloppante et profondément apaisante.',
    title: 'Envie d’un vrai voyage sensoriel ?',
  },
  hero: {
    backgroundImageAlt: 'Rituel Head Spa Classique',
    backgroundImageUrl: '/site-images/head-spa-water.jpg',
    subtitle:
      'Un véritable voyage sensoriel pour relâcher les tensions et apaiser profondément le corps et l’esprit.',
    title: 'Rituel Classique',
  },
  overview: {
    imageAlt: 'Soin Head Spa japonais classique',
    imageUrl: '/site-images/head-spa-water.jpg',
    paragraphs: [
      'Ce rituel débute par un nettoyage du visage, suivi de gestes doux et enveloppants pour préparer le corps à la détente.',
      'Le soin se poursuit avec un massage crânien japonais sur cheveux secs, permettant de libérer les premières tensions, puis s’intensifie avec l’association d’une pluie d’eau chaude, des parfums délicats et de différentes textures.',
      'Des brosses spécifiques ainsi que les mains sont utilisées pour travailler en profondeur le cuir chevelu, la nuque et les épaules, dans un enchaînement de gestes fluides et apaisants.',
      'Un bain de vapeur vient compléter le soin, accompagné d’un moment de pause avec des pierres de jade, puis d’un massage de la nuque et des épaules pour prolonger la détente et favoriser un lâcher-prise total.',
      'L’ensemble du rituel se déroule dans une ambiance douce et chaleureuse, bercée par une musique apaisante, pour vous offrir une véritable évasion.',
    ],
    scriptTitle: 'Le rituel',
    title: 'Un véritable voyage sensoriel pour relâcher les tensions',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce rituel',
    duration: '1h15',
    price: '89€',
  },
  slug: 'rituel-classique',
  title: 'Rituel Classique',
}

export const defaultHeadSpaExpertPage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous ressentez une fatigue importante ou des tensions installées.',
      'Vous avez besoin d’un relâchement profond et durable.',
      'Vous souhaitez une expérience encore plus complète qu’un rituel classique.',
      'Vous ressentez le besoin de vous reconnecter pleinement à vous-même.',
    ],
    title: 'Ce soin est parfait pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Approfondit le lâcher-prise grâce à un temps de soin plus long.',
        icon: 'wind',
        title: 'Lâcher-prise intensifié',
      },
      {
        description: 'Détend profondément le haut du corps, les bras et les mains.',
        icon: 'droplets',
        title: 'Détente prolongée',
      },
      {
        description: 'Aide à harmoniser la circulation et les sensations dans l’ensemble du corps.',
        icon: 'leaf',
        title: 'Circulation harmonisée',
      },
      {
        description: 'Laisse une sensation durable de recentrage et de relâchement complet.',
        icon: 'wind',
        title: 'Reconnexion profonde',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du rituel',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/rituel-head-spa',
    secondaryLabel: 'Voir les autres rituels',
    text: 'Le rituel expert prolonge l’expérience Head Spa pour installer un relâchement plus intense et plus durable dans tout le haut du corps.',
    title: 'Besoin d’un rituel encore plus complet ?',
  },
  hero: {
    backgroundImageAlt: 'Rituel Head Spa Expert',
    backgroundImageUrl: '/site-images/head-spa-water.jpg',
    subtitle: 'Une expérience encore plus complète pour un relâchement profond et durable.',
    title: 'Rituel Expert',
  },
  overview: {
    imageAlt: 'Soin Head Spa japonais expert',
    imageUrl: '/site-images/head-spa-water.jpg',
    paragraphs: [
      'Ce rituel reprend l’ensemble des étapes du rituel classique, en y ajoutant un travail prolongé sur le haut du corps.',
      'Le massage s’étend aux bras et aux mains, pour une détente globale et une circulation harmonisée dans tout le corps.',
      'Le temps de soin est prolongé, permettant d’approfondir chaque geste et d’installer un lâcher-prise encore plus intense.',
    ],
    scriptTitle: 'Le rituel',
    title: 'Une expérience encore plus complète pour un relâchement durable',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce rituel',
    duration: '1h45',
    price: '129€',
  },
  slug: 'rituel-expert',
  title: 'Rituel Expert',
}

export const defaultHeadSpaChildPage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'L’enfant a besoin de se poser et de se calmer.',
      'Il a besoin de relâcher les tensions du quotidien.',
      'Vous souhaitez lui faire découvrir en douceur les bienfaits du toucher et de la relaxation.',
      'Il a besoin d’un cadre rassurant, doux et respectueux de son rythme.',
    ],
    title: 'Ce soin est parfait pour l’enfant si…',
  },
  benefits: {
    items: [
      {
        description: 'Aide l’enfant à se poser et à retrouver un état de calme intérieur.',
        icon: 'wind',
        title: 'Calme retrouvé',
      },
      {
        description: 'Favorise une détente douce et adaptée à son âge.',
        icon: 'droplets',
        title: 'Détente en douceur',
      },
      {
        description: 'Permet de relâcher les tensions du quotidien dans un cadre sécurisant.',
        icon: 'leaf',
        title: 'Tensions apaisées',
      },
      {
        description: 'Fait découvrir les bienfaits du toucher bienveillant et de la relaxation.',
        icon: 'droplets',
        title: 'Bien-être rassurant',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du rituel',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/rituel-head-spa',
    secondaryLabel: 'Voir les autres rituels',
    text: 'Ce rituel a été pensé pour les enfants de 6 à 12 ans, dans une approche douce, bienveillante et entièrement adaptée à leur rythme.',
    title: 'Un moment de douceur pour les plus jeunes',
  },
  hero: {
    backgroundImageAlt: 'Rituel Head Spa Enfant',
    backgroundImageUrl: '/site-images/head-spa-water.jpg',
    subtitle:
      'Un soin réalisé dans le respect du rythme de l’enfant, avec douceur et bienveillance.',
    title: 'Rituel Enfant',
  },
  overview: {
    imageAlt: 'Soin Head Spa enfant',
    imageUrl: '/site-images/head-spa-water.jpg',
    paragraphs: [
      'Un moment de douceur spécialement adapté aux plus jeunes, proposé pour les enfants de 6 à 12 ans.',
      'Ce soin permet à l’enfant de se détendre, de se recentrer et de découvrir en douceur les bienfaits du toucher et de la relaxation.',
      'Réalisé dans une atmosphère calme et rassurante, le rituel s’adapte au rythme, à l’âge et aux besoins de chaque enfant.',
      'Un accompagnant peut être présent si l’enfant en ressent le besoin, afin de lui offrir un cadre sécurisant et apaisant.',
      'La durée du soin est ajustée en fonction de l’âge de l’enfant.',
    ],
    scriptTitle: 'Le rituel',
    title: 'Un soin réalisé dans le respect du rythme de l’enfant',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce rituel',
    duration: '45 min',
    price: '55€',
  },
  slug: 'rituel-enfant',
  title: 'Rituel Enfant',
}

export const defaultMaternityPage: WellnessPageData = {
  benefits: {
    items: [
      {
        description:
          'Un accompagnement pensé pour respecter chaque étape, chaque besoin et chaque rythme autour de la maternité et des premiers mois de vie.',
        icon: 'heart',
        title: 'Accompagnement bienveillant',
      },
      {
        description:
          'Des soins et moments de connexion qui favorisent détente, sérénité et sécurité émotionnelle pour le parent comme pour le bébé.',
        icon: 'sparkles',
        title: 'Douceur et sérénité',
      },
      {
        description:
          'Une approche nourrie par plus de 20 ans d’expérience d’auxiliaire de puériculture, dans l’écoute et le respect de chacun.',
        icon: 'wind',
        title: 'Expérience et écoute',
      },
    ],
    title: 'Une approche douce autour de la parentalité',
  },
  cta: {
    buttonHref: '/contact',
    buttonLabel: 'Me contacter',
    text: 'Chaque accompagnement peut être ajusté selon votre histoire, votre grossesse, votre bébé et vos besoins du moment. Nous pouvons échanger ensemble pour choisir ce qui vous conviendra le mieux.',
    title: 'Besoin d’un accompagnement adapté ?',
  },
  hero: {
    backgroundImageAlt: 'Moment de douceur autour de la maternité et du bébé',
    backgroundImageUrl: '/site-images/home-maternity-baby.jpg',
    subtitle:
      'Un accompagnement en douceur autour de la maternité et de la parentalité, dans le respect du rythme de chacun.',
    title: 'Maternité & Parentalité',
  },
  intro: {
    paragraphs: [
      'Parce que chaque étape, de la grossesse aux premiers mois de vie de votre bébé, est unique, je vous propose des soins et des moments d’accompagnement pensés pour vous apporter bien-être, sérénité et connexion.',
      'Forte de mon expérience d’auxiliaire de puériculture depuis plus de 20 ans, je vous accueille avec écoute, bienveillance et douceur, dans un espace sécurisant où chaque besoin est respecté.',
    ],
    title: 'Des soins pensés pour vous accompagner en douceur',
  },
  services: {
    itemCtaLabel: 'Découvrir ce soin',
    items: [
      {
        description:
          'Un moment de douceur et de connexion pour accompagner la future maman tout au long de sa grossesse.',
        duration: '1h00',
        href: '/maternite-parentalite/massage-prenatal',
        imageAlt: 'Massage prénatal',
        imageUrl: '/site-images/home-maternity-baby.jpg',
        price: '60€',
        title: 'Massage prénatal',
      },
      {
        description:
          'Un moment de partage, de douceur et de connexion pour accompagner votre bébé dans ses premiers instants de vie.',
        duration: '45 min',
        href: '/maternite-parentalite/massage-bebe',
        imageAlt: 'Massage bébé',
        imageUrl: '/site-images/home-audience-baby-care.jpg',
        price: '',
        title: 'Massage bébé',
      },
    ],
  },
}

export const defaultPrenatalMassagePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous ressentez des tensions dans le dos, les jambes ou le bassin.',
      'Vous vous sentez fatiguée, émotive ou parfois submergée.',
      'Vous avez besoin de vous reconnecter à votre corps.',
      'Vous souhaitez créer un moment privilégié avec votre bébé.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Aide à soulager les tensions physiques liées à la grossesse.',
        icon: 'leaf',
        title: 'Tensions soulagées',
      },
      {
        description:
          'Favorise une meilleure circulation et diminue les sensations de jambes lourdes.',
        icon: 'droplets',
        title: 'Circulation améliorée',
      },
      {
        description: 'Apaise le mental, les émotions et améliore la qualité du sommeil.',
        icon: 'wind',
        title: 'Mental apaisé',
      },
      {
        description: 'Renforce le lien avec votre bébé dans un moment de présence et de douceur.',
        icon: 'droplets',
        title: 'Connexion renforcée',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du soin',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/maternite-parentalite',
    secondaryLabel: 'Voir les autres accompagnements',
    text: 'Le massage prénatal est proposé à partir du 4e mois de grossesse et peut aussi être envisagé en forfaits pour vous accompagner dans la durée.',
    title: 'Envie d’un moment de douceur pendant votre grossesse ?',
  },
  hero: {
    backgroundImageAlt: 'Massage prénatal doux et enveloppant',
    backgroundImageUrl: '/site-images/home-maternity-baby.jpg',
    subtitle:
      'Un moment de douceur et de connexion pour accompagner la future maman tout au long de sa grossesse.',
    title: 'Massage prénatal',
  },
  overview: {
    imageAlt: 'Soin prénatal réalisé avec douceur',
    imageUrl: '/site-images/home-maternity-baby.jpg',
    paragraphs: [
      'Le massage prénatal est proposé à partir du 4e mois de grossesse, lorsque le corps commence à évoluer davantage et que les besoins de détente se font ressentir.',
      'En cas de grossesse à risque ou de suivi médical particulier, il est important de demander l’avis de votre professionnel de santé et de m’en informer en amont, afin d’adapter le soin en toute sécurité.',
      'Le massage s’adapte à chaque étape de votre grossesse, en respectant votre corps, vos ressentis et vos besoins du moment.',
      'Les gestes sont doux, enveloppants et sécurisants, permettant une détente profonde et un relâchement global.',
      'Ce moment est aussi une invitation à ralentir, à vous déposer et à vous reconnecter à votre bébé.',
      'En fin de soin, un moment tout particulier vous est proposé : un effleurage à quatre mains, avec vos mains posées sur votre ventre, pour créer un instant de connexion profonde entre vous et votre bébé.',
      'Un moment suspendu, plein de douceur et d’émotion.',
    ],
    scriptTitle: 'Le soin',
    title: 'Un moment de douceur et de connexion pour accompagner la future maman',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce soin',
    duration: '1h00',
    price: '60€',
  },
  slug: 'massage-prenatal',
  title: 'Massage prénatal',
}

export const defaultBabyMassagePage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous souhaitez partager un moment privilégié avec votre bébé.',
      'Vous avez envie d’apprendre des gestes simples pour l’apaiser.',
      'Votre bébé a besoin de détente ou de réconfort.',
      'Vous souhaitez accompagner ses émotions en douceur.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Favorise le renforcement du lien d’attachement entre vous et votre bébé.',
        icon: 'droplets',
        title: 'Lien renforcé',
      },
      {
        description: 'Apaise votre bébé et favorise sa détente ainsi qu’un meilleur sommeil.',
        icon: 'wind',
        title: 'Apaisement et sommeil',
      },
      {
        description: 'Peut soulager certains inconforts comme les gaz ou les tensions.',
        icon: 'leaf',
        title: 'Inconforts soulagés',
      },
      {
        description: 'Participe au développement de sa conscience corporelle dans la douceur.',
        icon: 'droplets',
        title: 'Corps et repères',
      },
    ],
    scriptTitle: 'Les résultats',
    title: 'Les bienfaits du moment',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/maternite-parentalite',
    secondaryLabel: 'Voir les autres accompagnements',
    text: 'Ce moment se vit dans l’écoute, la bienveillance et le respect du rythme de votre bébé. Les deux parents peuvent être présents s’ils le souhaitent.',
    title: 'Envie d’un moment privilégié avec votre bébé ?',
  },
  hero: {
    backgroundImageAlt: 'Massage bébé dans une atmosphère douce et rassurante',
    backgroundImageUrl: '/site-images/home-audience-baby-care.jpg',
    subtitle:
      'Un moment de partage, de douceur et de connexion pour accompagner votre bébé dans ses premiers instants de vie.',
    title: 'Massage bébé',
  },
  overview: {
    imageAlt: 'Accompagnement au massage bébé',
    imageUrl: '/site-images/home-audience-baby-care.jpg',
    paragraphs: [
      'Le massage bébé est bien plus qu’un soin : c’est un véritable moment d’échange, de présence et de communication non verbale entre vous et votre enfant.',
      'Je vous accompagne dans l’apprentissage du massage de votre bébé, avec des gestes simples et adaptés.',
      'Les deux parents peuvent être présents s’ils le souhaitent, pour partager pleinement ce moment.',
      'Le soin se déroule dans une pièce chauffée, calme et apaisante, avec une musique douce, afin de créer un environnement sécurisant et enveloppant.',
      'Le rythme de votre bébé est respecté à chaque instant : une pause peut être faite à tout moment s’il a besoin d’être nourri, changé ou simplement rassuré.',
      'Un moment tout en douceur, dans l’écoute, la bienveillance et le respect de votre bébé.',
    ],
    scriptTitle: 'Le moment',
    title: 'Un moment de partage, de douceur et de connexion avec votre bébé',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Réserver ce moment',
    duration: '45 min',
    price: '',
  },
  slug: 'massage-bebe',
  title: 'Massage bébé',
}

export const defaultNutritionPage: WellnessServiceDetailPageData = {
  audience: {
    items: [
      'Vous souhaitez perdre du poids en douceur et durablement.',
      'Vous manquez d’énergie au quotidien.',
      'Vous souhaitez vous affiner ou tonifier votre silhouette.',
      'Vous avez envie de retrouver un équilibre alimentaire sans frustration.',
      'Vous ressentez le besoin de prendre soin de vous dans votre globalité.',
    ],
    title: 'Pour vous si…',
  },
  benefits: {
    items: [
      {
        description: 'Permet une meilleure compréhension de votre corps et de ses besoins.',
        icon: 'leaf',
        title: 'Corps mieux compris',
      },
      {
        description: 'Vous aide à retrouver plus d’énergie et de stabilité au quotidien.',
        icon: 'wind',
        title: 'Énergie retrouvée',
      },
      {
        description: 'Favorise une relation plus apaisée avec l’alimentation, sans frustration.',
        icon: 'droplets',
        title: 'Relation apaisée',
      },
      {
        description:
          'Vous accompagne vers des objectifs durables : perte de poids, tonification, regain d’énergie ou prise de masse.',
        icon: 'leaf',
        title: 'Objectifs accompagnés',
      },
    ],
    scriptTitle: 'Les bénéfices',
    title: 'Les bienfaits de l’accompagnement',
  },
  cta: {
    primaryHref: '/contact',
    primaryLabel: 'Prendre rendez-vous',
    secondaryHref: '/contact',
    secondaryLabel: 'Demander un premier échange',
    text: 'Le premier bilan est offert afin de faire le point ensemble et de définir un accompagnement adapté à vos besoins, votre mode de vie et votre rythme.',
    title: 'Prêt(e) à retrouver votre équilibre ?',
  },
  hero: {
    backgroundImageAlt: 'Accompagnement nutritionnel et équilibre de vie',
    backgroundImageUrl: '/site-images/wellness-oils.jpg',
    subtitle:
      'Un accompagnement personnalisé pour vous aider à vous sentir bien dans votre corps… et dans votre esprit.',
    title: 'Nutrition & Coaching',
  },
  overview: {
    imageAlt: 'Approche globale nutrition et équilibre de vie',
    imageUrl: '/site-images/wellness-intuitive.jpg',
    paragraphs: [
      'Parce que le bien-être ne passe pas uniquement par le corps, mais aussi par l’alimentation, les habitudes de vie et l’équilibre intérieur, je vous propose un accompagnement global, adapté à vos besoins et à votre rythme.',
      'Je vous propose un suivi personnalisé, basé sur l’écoute, la bienveillance et le respect de votre rythme. Chaque accompagnement est unique, en fonction de vos objectifs, de votre mode de vie et de vos besoins.',
      'Le premier bilan est offert, afin de faire le point ensemble et de définir un accompagnement adapté.',
      'Cet accompagnement peut venir en complément des soins corporels, comme la madérothérapie, pour agir à la fois de l’intérieur et de l’extérieur.',
      'Parce que se sentir bien dans son corps passe aussi par ce que l’on lui apporte au quotidien.',
    ],
    scriptTitle: 'L’accompagnement',
    title:
      'Prendre soin de soi, c’est trouver l’équilibre entre le corps, l’alimentation et l’esprit',
  },
  practicalInfo: {
    ctaHref: '/contact',
    ctaLabel: 'Prendre rendez-vous',
    duration: 'Bilan offert',
    price: '',
  },
  slug: 'nutrition-coaching',
  title: 'Nutrition & Coaching',
}
