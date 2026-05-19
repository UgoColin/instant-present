import type { Metadata } from 'next'

import { LegalPageContent } from '@/components/LegalPageContent'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { getSiteSettings } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Instant Present',
  description: 'Politique de confidentialité du site Instant Present.',
}

export default async function PolitiqueConfidentialitePage() {
  const siteSettings = await getSiteSettings()

  return (
    <div className="overflow-x-hidden bg-brand-cream font-sans text-brand-sage selection:bg-brand-rose selection:text-white">
      <SiteHeader siteSettings={siteSettings} />
      <LegalPageContent
        intro={[
          `La présente politique de confidentialité explique comment ${siteSettings.siteName} collecte, utilise et protège les données personnelles transmises via le site.`,
          'Elle est rédigée pour un site vitrine avec formulaire de contact et prise de rendez-vous. Si des outils supplémentaires sont ajoutés par la suite, notamment des paiements en ligne, newsletters ou statistiques avancées, cette politique devra être mise à jour.',
        ]}
        quickFacts={[
          { label: 'Responsable', value: siteSettings.siteName },
          { label: 'Contact RGPD', value: siteSettings.contact.email },
          {
            label: 'Finalité principale',
            value: 'Réponse aux demandes et gestion des rendez-vous',
          },
          { label: 'Zone', value: 'France / Union européenne sauf mention contraire' },
        ]}
        scriptTitle="Protection des données"
        sections={[
          {
            title: 'Responsable du traitement',
            paragraphs: [
              `${siteSettings.siteName}, joignable à l’adresse ${siteSettings.contact.email} et au ${siteSettings.contact.phone}, agit en qualité de responsable du traitement pour les données collectées via ce site.`,
              'Le responsable du traitement détermine les finalités et les moyens des traitements mis en œuvre dans le cadre de l’activité de bien-être présentée sur le site.',
            ],
          },
          {
            title: 'Données collectées',
            paragraphs: [
              'Selon votre utilisation du site, les données susceptibles d’être collectées sont : nom et prénom, adresse e-mail, numéro de téléphone, contenu du message, prestation souhaitée, ainsi que les informations techniques strictement nécessaires au fonctionnement du site et à sa sécurité.',
              'Les données sont collectées directement auprès de vous lorsque vous remplissez un formulaire, contactez l’éditrice ou échangez en vue d’une prise de rendez-vous.',
            ],
          },
          {
            title: 'Finalités et bases légales',
            paragraphs: [
              'Les données sont traitées pour répondre à vos demandes, organiser les rendez-vous, assurer le suivi de la relation client, gérer d’éventuelles obligations administratives ou comptables, et sécuriser le site.',
              'Les bases légales mobilisées sont, selon les cas, votre consentement, l’exécution de mesures précontractuelles prises à votre demande, l’exécution d’un contrat si une prestation est réservée, le respect d’obligations légales et l’intérêt légitime de sécurisation et d’organisation de l’activité.',
            ],
          },
          {
            title: 'Destinataires des données',
            paragraphs: [
              'Les données sont destinées uniquement à l’éditrice du site et, lorsque cela est nécessaire, à ses sous-traitants techniques intervenant pour l’hébergement, la maintenance, la messagerie ou la sécurisation du site.',
              'Aucune donnée personnelle n’est vendue, louée ou cédée à des tiers à des fins commerciales.',
            ],
          },
          {
            title: 'Durées de conservation',
            paragraphs: [
              'Les messages envoyés via le formulaire de contact sont conservés pendant la durée nécessaire au traitement de la demande, puis archivés pour une durée proportionnée aux besoins de suivi de la relation, sans excéder en principe trois ans pour les prospects inactifs.',
              'Les données liées à une prestation effectivement réalisée peuvent être conservées plus longtemps lorsqu’une obligation légale l’impose, notamment en matière comptable ou de preuve contractuelle.',
            ],
          },
          {
            title: 'Vos droits',
            paragraphs: [
              'Conformément à la réglementation applicable, vous disposez des droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité lorsque ce droit est applicable.',
              `Vous pouvez exercer vos droits en écrivant à ${siteSettings.contact.email}. Une réponse vous sera apportée dans les meilleurs délais, sous réserve de la vérification de votre identité si nécessaire.`,
              'Vous disposez également du droit d’introduire une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas respectés.',
            ],
          },
          {
            title: 'Cookies et mesures d’audience',
            paragraphs: [
              'Le site peut utiliser des cookies ou traceurs strictement nécessaires à son fonctionnement technique et à sa sécurité. Ces cookies ne requièrent pas de consentement préalable lorsqu’ils sont indispensables au service.',
              'Si des cookies de mesure d’audience, de personnalisation ou de services tiers sont ajoutés, un mécanisme d’information et, le cas échéant, de recueil du consentement devra être mis en place avant leur dépôt.',
            ],
          },
          {
            title: 'Sécurité et transferts',
            paragraphs: [
              'Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour préserver la confidentialité, l’intégrité et la disponibilité des données personnelles.',
              'Aucun transfert de données hors de l’Union européenne n’est recherché intentionnellement. Si certains prestataires techniques impliquent un tel transfert, il devra être encadré par les garanties appropriées prévues par la réglementation.',
            ],
          },
        ]}
        siteSettings={siteSettings}
        title="Politique de confidentialité"
      />
      <SiteFooter siteSettings={siteSettings} />
    </div>
  )
}
