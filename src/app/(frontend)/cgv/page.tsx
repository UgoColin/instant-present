import type { Metadata } from 'next'

import { LegalPageContent } from '@/components/LegalPageContent'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'CGV | Instant Present',
  description: 'Conditions générales de vente du site Instant Present.',
}

export default async function CgvPage() {
  const siteSettings = await getSiteSettings()

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <LegalPageContent
        intro={[
          `Les présentes conditions générales de vente régissent les prestations proposées par ${siteSettings.siteName} dans le cadre de son activité de bien-être sur rendez-vous.`,
          'Elles s’appliquent à toute réservation de prestation, à tout achat de bon ou carte cadeau si ce service est proposé, et plus généralement à toute relation contractuelle conclue avec la clientèle particulière.',
        ]}
        quickFacts={[
          { label: 'Prestations', value: 'Soins bien-être, accompagnements et rendez-vous' },
          { label: 'Réservation', value: 'Sur demande puis confirmation par la praticienne' },
          { label: 'Annulation', value: 'Prévenir au moins 24h à l’avance' },
          { label: 'Paiement', value: 'Le jour du rendez-vous sauf accord particulier' },
        ]}
        scriptTitle="Conditions de vente"
        sections={[
          {
            title: 'Objet',
            paragraphs: [
              'Les présentes CGV définissent les droits et obligations respectifs de la praticienne et de la cliente ou du client dans le cadre de la réservation et de la réalisation des prestations proposées.',
              'Toute prise de rendez-vous implique l’acceptation pleine et entière des présentes conditions, sous réserve des dispositions légales impératives applicables aux consommateurs.',
            ],
          },
          {
            title: 'Nature des prestations',
            paragraphs: [
              'Les prestations proposées relèvent exclusivement du bien-être, de la relaxation et de l’accompagnement non médical. Elles ne constituent ni un acte de kinésithérapie, ni un soin infirmier, ni un traitement médical, ni une prestation à caractère sexuel.',
              'La cliente ou le client est invité à signaler toute contre-indication, grossesse à risque, pathologie ou situation particulière susceptible d’avoir un impact sur le déroulement de la séance.',
            ],
          },
          {
            title: 'Réservation et confirmation',
            paragraphs: [
              'Les demandes de rendez-vous peuvent être effectuées par les moyens de contact indiqués sur le site. La réservation n’est considérée comme définitive qu’après confirmation expresse de la praticienne.',
              'La praticienne se réserve le droit de refuser une demande de réservation lorsqu’elle ne peut être honorée dans des conditions satisfaisantes de sécurité, de disponibilité ou de respect du cadre professionnel.',
            ],
          },
          {
            title: 'Tarifs',
            paragraphs: [
              'Les tarifs applicables sont ceux affichés sur le site ou communiqués à la cliente ou au client au moment de la réservation. Ils sont exprimés en euros et s’entendent toutes taxes comprises lorsque la réglementation l’impose.',
              'Une fois le rendez-vous confirmé, le tarif annoncé pour la prestation réservée reste applicable, sauf demande de modification de la part de la cliente ou du client.',
            ],
          },
          {
            title: 'Modalités de paiement',
            paragraphs: [
              'Sauf mention contraire ou demande particulière, le règlement intervient le jour de la prestation selon les moyens de paiement acceptés par la praticienne.',
              'Lorsqu’un bon ou une carte cadeau est proposé, son paiement intervient au moment de l’achat. Les conditions spécifiques de validité, d’utilisation et de remboursement doivent alors être précisées au support de vente concerné.',
            ],
          },
          {
            title: 'Annulation, retard et absence',
            paragraphs: [
              'En cas d’empêchement, la cliente ou le client s’engage à prévenir au moins 24 heures à l’avance afin de permettre une réorganisation du planning.',
              'Tout retard peut entraîner une réduction de la durée effective de la séance, sans diminution du prix, lorsque cela est nécessaire pour préserver les rendez-vous suivants.',
              'Un rendez-vous non honoré ou annulé tardivement, sans justification suffisante, peut conduire au refus d’une réservation ultérieure.',
            ],
          },
          {
            title: 'Obligations de la cliente ou du client',
            paragraphs: [
              'La cliente ou le client s’engage à fournir des informations exactes, à signaler tout élément utile à l’adaptation de la prestation et à adopter un comportement respectueux dans le cadre de la séance.',
              'Toute attitude déplacée, agressive, équivoque ou contraire au cadre professionnel autorise la praticienne à interrompre immédiatement la prestation, sans que cela ouvre droit à un remboursement.',
            ],
          },
          {
            title: 'Responsabilité',
            paragraphs: [
              'La praticienne met en œuvre tous les moyens raisonnables pour fournir des prestations de qualité, adaptées à l’activité de bien-être proposée. Sa responsabilité ne saurait toutefois être engagée en cas d’information incomplète ou erronée communiquée par la cliente ou le client sur son état de santé ou ses besoins.',
              'Le site et les prestations n’ont pas vocation à se substituer à un avis médical. En cas de doute, la cliente ou le client doit consulter un professionnel de santé avant toute réservation.',
            ],
          },
          {
            title: 'Données personnelles, droit applicable et litiges',
            paragraphs: [
              `Les données personnelles traitées dans le cadre des réservations le sont conformément à la politique de confidentialité accessible sur le site. Toute question relative à ce traitement peut être adressée à ${siteSettings.contact.email}.`,
              'Les présentes CGV sont soumises au droit français. En cas de litige, les parties rechercheront une solution amiable en priorité.',
              'À défaut d’accord amiable, le litige pourra être porté devant les juridictions compétentes dans les conditions prévues par le droit français applicable.',
            ],
          },
        ]}
        siteSettings={siteSettings}
        title="Conditions générales de vente"
      />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
