import type { Metadata } from 'next'

import { LegalPageContent } from '@/components/LegalPageContent'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Mentions légales | Instant Present',
  description: 'Mentions légales du site Instant Present.',
}

export default async function MentionsLegalesPage() {
  const siteSettings = await getSiteSettings()

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <LegalPageContent
        intro={[
          `Les présentes mentions légales encadrent l’utilisation du site ${siteSettings.siteName}. Elles ont pour objet d’identifier l’éditeur du site et de préciser les conditions générales d’accès à son contenu.`,
          'Elles s’appliquent à l’ensemble des contenus, fonctionnalités et moyens de contact proposés sur le site.',
        ]}
        quickFacts={[
          { label: 'Site', value: siteSettings.siteName },
          { label: 'Activité', value: 'Prestations de bien-être et prise de rendez-vous' },
          {
            label: 'Contact',
            value: `${siteSettings.contact.phone} · ${siteSettings.contact.email}`,
          },
          { label: 'Adresse', value: siteSettings.contact.address.replace(/\n/g, ', ') },
        ]}
        scriptTitle="Cadre légal"
        sections={[
          {
            title: 'Éditeur du site',
            content: (
              <div className="space-y-4 text-sm leading-7 text-brand-sage md:text-base">
                <p>
                  <strong className="font-semibold text-brand-forest">Nom commercial :</strong>{' '}
                  {siteSettings.siteName}
                </p>
                <p>
                  <strong className="font-semibold text-brand-forest">
                    Responsable de la publication :
                  </strong>{' '}
                  {siteSettings.shortSiteName}
                </p>
                <p>
                  <strong className="font-semibold text-brand-forest">Adresse de contact :</strong>{' '}
                  <span className="whitespace-pre-line">{siteSettings.contact.address}</span>
                </p>
                <p>
                  <strong className="font-semibold text-brand-forest">Téléphone :</strong>{' '}
                  {siteSettings.contact.phone}
                </p>
                <p>
                  <strong className="font-semibold text-brand-forest">E-mail :</strong>{' '}
                  {siteSettings.contact.email}
                </p>
              </div>
            ),
          },
          {
            title: 'Hébergement',
            paragraphs: [
              'Le présent site est hébergé sur une infrastructure technique dédiée assurant son accessibilité, sa maintenance et sa sécurité.',
              'Les paramètres d’hébergement et d’administration sont gérés par la responsable du site ou par ses prestataires techniques habilités.',
            ],
          },
          {
            title: 'Accès au site',
            paragraphs: [
              'Le site est accessible en principe 24h/24 et 7j/7, sous réserve des opérations de maintenance, des mises à jour ou d’événements indépendants de la volonté de l’éditrice.',
              'L’éditrice ne pourra être tenue responsable d’une indisponibilité temporaire du site, d’un dysfonctionnement technique ou d’une interruption liée au réseau internet.',
            ],
          },
          {
            title: 'Propriété intellectuelle',
            paragraphs: [
              'L’ensemble des contenus présents sur le site, notamment les textes, visuels, photographies, logos, éléments graphiques, mises en page et structure générale, est protégé par le droit de la propriété intellectuelle.',
              'Sauf mention contraire, ces éléments sont la propriété exclusive de l’éditrice ou font l’objet d’une autorisation d’utilisation. Toute reproduction, représentation, adaptation, diffusion ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite.',
            ],
          },
          {
            title: 'Responsabilité',
            paragraphs: [
              'Le site a pour vocation de présenter une activité de bien-être et de faciliter la prise de contact. Les informations diffusées le sont à titre informatif et peuvent être modifiées à tout moment.',
              'Les prestations présentées sur le site relèvent du bien-être et de la relaxation. Elles ne constituent ni un acte médical, ni un diagnostic, ni un traitement thérapeutique, et ne se substituent pas à un suivi par un professionnel de santé.',
            ],
          },
          {
            title: 'Liens hypertextes et données personnelles',
            paragraphs: [
              'Le site peut contenir des liens vers des sites tiers. L’éditrice n’exerce aucun contrôle sur leur contenu et décline toute responsabilité quant aux informations, politiques ou pratiques qui y sont appliquées.',
              `Les modalités de collecte et de traitement des données personnelles sont détaillées dans la page « Politique de confidentialité ». Pour toute demande relative à vos données, vous pouvez écrire à ${siteSettings.contact.email}.`,
            ],
          },
        ]}
        siteSettings={siteSettings}
        title="Mentions légales"
      />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
