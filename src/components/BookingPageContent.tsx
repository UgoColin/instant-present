'use client'
/* eslint-disable @next/next/no-img-element */

import {
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Clock3,
  CreditCard,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'

import {
  createEmptyContactFormValues,
  getContactFieldError,
  sanitizePhoneInput,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormField,
  type ContactFormValues,
} from '@/lib/contact-form'
import type { BookingPageData, SiteSettingsData } from '@/lib/site-model'

import { FadeInSection } from './FadeInSection'

type BookingPageContentProps = {
  content: BookingPageData
  siteSettings: SiteSettingsData
}

type ToastState = {
  message: string
  type: 'error' | 'success'
} | null

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.2c0-.9.2-1.5 1.5-1.5H16V5.1c-.2 0-1-.1-2-.1-2 0-3.4 1.2-3.4 3.6V11H8v3h2.6v7h2.9Z" />
    </svg>
  )
}

const faqIcons = {
  'alert-circle': AlertCircle,
  clock: Clock3,
  'credit-card': CreditCard,
  'heart-handshake': HeartHandshake,
  'shield-check': ShieldCheck,
} as const

type AccordionItemProps = {
  description: string
  icon: keyof typeof faqIcons
  isOpen: boolean
  onClick: () => void
  title: string
}

function AccordionItem({ description, icon, isOpen, onClick, title }: AccordionItemProps) {
  const Icon = faqIcons[icon]

  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-brand-rose/20 bg-white transition-all duration-300">
      <button
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-brand-cream/50 focus:outline-none"
        onClick={onClick}
        type="button"
      >
        <div className="flex items-center">
          <Icon className="mr-4 h-5 w-5 flex-shrink-0 text-brand-rose" />
          <span className="font-subtitle text-xl font-medium text-brand-forest">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-brand-sage" />
        ) : (
          <ChevronDown className="h-5 w-5 text-brand-sage" />
        )}
      </button>
      <div
        className={[
          'overflow-hidden transition-all duration-500 ease-in-out',
          isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="border-t border-brand-cream p-5 pt-0 text-sm font-light leading-relaxed text-brand-sage">
          {description.split('\n\n').map((paragraph) => (
            <p className="mt-5" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null
  }

  return <p className="mt-2 text-sm font-medium text-[#b64545]">{message}</p>
}

function GiftCardPreviewSection({ email, facebookUrl }: { email: string; facebookUrl: string }) {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-3rem] top-16 z-0 w-[16rem] opacity-[0.1] md:left-[-1rem] md:w-[20rem] lg:left-0 lg:w-[24rem]"
        src="/illustrations/illu-logo.svg"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <FadeInSection>
            <div className="relative z-10 max-w-xl">
              <h3 className="mb-2 font-script text-4xl text-brand-rose">Offrir un moment</h3>
              <h2 className="mb-6 font-subtitle text-3xl text-brand-forest md:text-4xl">
                La carte cadeau
              </h2>
              <p className="text-base leading-8 text-brand-sage">
                Vous pouvez offrir une carte cadeau pour un soin, un rituel ou une parenthèse
                bien-être personnalisée. C’est une jolie attention pour un anniversaire, une
                naissance, une fête ou simplement pour faire plaisir.
              </p>
              <p className="mt-5 text-base leading-8 text-brand-sage">
                Pour la préparer, il suffit de me contacter avec le prénom de la personne, la
                prestation souhaitée ou le montant à offrir. Je vous guiderai ensuite pour la remise
                et le règlement.
              </p>

              <div className="mt-8 rounded-3xl border border-brand-rose/15 bg-brand-cream px-6 py-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-rose">
                  Commander une carte cadeau
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-brand-forest">
                  <p>Par e-mail : {email}</p>
                  <p>
                    Via Facebook :{' '}
                    <a
                      className="font-medium text-brand-rose transition-colors hover:text-brand-forest"
                      href={facebookUrl}
                    >
                      message privé
                    </a>
                  </p>
                  <p>Ou directement via le formulaire de cette page.</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <div className="relative z-10 grid gap-8">
            <FadeInSection delay={150}>
              <figure className="group overflow-hidden rounded-[2rem] border border-brand-rose/15 bg-brand-cream p-3 shadow-[0_24px_70px_rgba(21,87,77,0.08)]">
                <div className="overflow-hidden rounded-[1.4rem] bg-white">
                  <img
                    alt="Carte cadeau Instant Présent - recto"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    src="/branding/Carte_cadeau.png"
                  />
                </div>
              </figure>
            </FadeInSection>

            <FadeInSection delay={300}>
              <figure className="group overflow-hidden rounded-[2rem] border border-brand-rose/15 bg-brand-cream p-3 shadow-[0_24px_70px_rgba(21,87,77,0.08)]">
                <div className="overflow-hidden rounded-[1.4rem] bg-white">
                  <img
                    alt="Carte cadeau Instant Présent - verso"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    src="/branding/Carte_cadeau2.png"
                  />
                </div>
              </figure>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}

const getFieldInputClassName = (hasError: boolean, type: 'input' | 'select' = 'input') =>
  [
    'w-full rounded-none border bg-brand-cream/50 px-4 py-3 text-sm outline-none transition-colors',
    type === 'select' ? 'text-brand-sage' : 'text-brand-forest',
    hasError ? 'border-[#d96c6c] bg-[#fff6f6]' : 'border-brand-cream focus:border-brand-rose',
  ].join(' ')

export function BookingPageContent({ content, siteSettings }: BookingPageContentProps) {
  const [openAccordion, setOpenAccordion] = useState(0)
  const [formValues, setFormValues] = useState<ContactFormValues>(() =>
    createEmptyContactFormValues(),
  )
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<ToastState>(null)

  const contactAddress = `${siteSettings.contact.address.replace(/\n/g, ', ')}, France`
  const encodedContactAddress = encodeURIComponent(contactAddress)
  const openStreetMapEmbedUrl =
    'https://www.openstreetmap.org/export/embed.html?bbox=2.8191%2C50.5916%2C2.8261%2C50.5950&layer=mapnik&marker=50.59327431197072%2C2.8226227860279547'

  useEffect(() => {
    if (!toast) {
      return
    }

    const timeout = window.setTimeout(() => {
      setToast(null)
    }, 5000)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [toast])

  const updateFieldError = (
    field: ContactFormField,
    nextValues: ContactFormValues,
    currentErrors: ContactFormErrors,
  ) => {
    const nextError = getContactFieldError(field, nextValues)

    if (!nextError) {
      const { [field]: _removed, ...remainingErrors } = currentErrors
      return remainingErrors
    }

    return {
      ...currentErrors,
      [field]: nextError,
    }
  }

  const setFieldValue = (field: keyof ContactFormValues, value: string) => {
    setFormValues((currentValues) => {
      const nextValues = {
        ...currentValues,
        [field]: value,
      }

      if (
        field === 'name' ||
        field === 'phone' ||
        field === 'email' ||
        field === 'service' ||
        field === 'message'
      ) {
        setFieldErrors((currentErrors) => {
          if (!currentErrors[field]) {
            return currentErrors
          }

          return updateFieldError(field, nextValues, currentErrors)
        })
      }

      return nextValues
    })
  }

  const handleBlur = (field: ContactFormField) => {
    setFieldErrors((currentErrors) => updateFieldError(field, formValues, currentErrors))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateContactForm(formValues)
    setFieldErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setToast({
        message: 'Merci de corriger les champs indiqués avant de valider.',
        type: 'error',
      })
      return
    }

    setIsSubmitting(true)
    setToast(null)

    try {
      const response = await fetch('/api/contact', {
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const data = (await response.json()) as {
        fieldErrors?: ContactFormErrors
        message?: string
        ok?: boolean
      }

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors)
        }

        setToast({
          message:
            data.message ||
            "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
          type: 'error',
        })
        return
      }

      setFieldErrors({})
      setFormValues(createEmptyContactFormValues())
      setToast({
        message: data.message || 'Votre demande a bien été envoyée.',
        type: 'success',
      })
    } catch (error) {
      console.error('Contact form request failed', error)
      setToast({
        message: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
        type: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-x-hidden bg-brand-cream">
      <div
        aria-atomic="true"
        aria-live="polite"
        className={[
          'fixed left-1/2 top-24 z-[80] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 transition-all duration-300',
          toast
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-4 opacity-0',
        ].join(' ')}
      >
        {toast ? (
          <div
            className={[
              'rounded-2xl border px-5 py-4 text-sm shadow-xl backdrop-blur-sm',
              toast.type === 'success'
                ? 'border-brand-forest/20 bg-brand-forest text-brand-cream'
                : 'border-[#d79b9b] bg-[#fff3f3] text-[#8a2e2e]',
            ].join(' ')}
          >
            {toast.message}
          </div>
        ) : null}
      </div>

      <section className="relative flex min-h-[350px] items-center justify-center overflow-hidden md:min-h-[45vh]">
        <div className="absolute inset-0 z-0 bg-brand-forest">
          <img
            alt={content.hero.backgroundImageAlt}
            className="h-full w-full object-cover object-center opacity-30 mix-blend-overlay"
            src={content.hero.backgroundImageUrl}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <FadeInSection>
            <h1 className="mb-6 font-subtitle text-5xl text-brand-cream md:text-6xl">
              {content.hero.title}
            </h1>
            <p className="font-script text-3xl tracking-wide text-brand-rose md:text-5xl">
              {content.hero.quote}
            </p>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <FadeInSection>
            <h2 className="mb-6 font-subtitle text-3xl text-brand-forest md:text-4xl">
              {content.intro.title}
            </h2>
            <div className="space-y-4 text-lg font-light leading-relaxed text-brand-sage">
              {content.intro.paragraphs.map((paragraph, index) => (
                <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-cream py-20">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-3rem] top-28 z-0 w-[18rem] opacity-[0.12] md:right-[-1rem] md:w-[22rem] lg:right-0 lg:w-[26rem]"
          src="/illustrations/illu-flyer.svg"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="w-full lg:w-1/3">
              <FadeInSection>
                <h3 className="mb-2 font-script text-4xl text-brand-rose">
                  {content.reservation.scriptTitle}
                </h3>
                <h2 className="mb-8 font-subtitle text-3xl text-brand-forest">
                  {content.reservation.title}
                </h2>

                <p className="mb-10 text-sm font-light text-brand-sage">
                  {content.reservation.description}
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-forest shadow-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-subtitle text-lg text-brand-forest">
                        Par téléphone
                      </h4>
                      <p className="font-light text-brand-sage">{siteSettings.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-forest shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-subtitle text-lg text-brand-forest">Par e-mail</h4>
                      <p className="font-light text-brand-sage">{siteSettings.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-forest shadow-sm">
                      <FacebookIcon />
                    </div>
                    <div>
                      <h4 className="mb-1 font-subtitle text-lg text-brand-forest">Via Facebook</h4>
                      <a
                        className="text-sm font-medium text-brand-rose transition-colors hover:text-brand-forest"
                        href={content.reservation.facebookUrl}
                      >
                        {content.reservation.facebookLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            <div className="w-full lg:w-2/3">
              <FadeInSection delay={200}>
                <div className="rounded-2xl border border-brand-rose/10 bg-white p-8 shadow-sm md:p-12">
                  <h3 className="mb-8 font-subtitle text-2xl text-brand-forest">
                    {content.form.title}
                  </h3>

                  <form className="space-y-6" noValidate onSubmit={handleSubmit}>
                    <input
                      autoComplete="off"
                      className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden opacity-0"
                      onChange={(event) => setFieldValue('website', event.target.value)}
                      tabIndex={-1}
                      type="text"
                      value={formValues.website}
                    />
                    <input name="formStartedAt" type="hidden" value={formValues.formStartedAt} />

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-sage">
                          {content.form.nameLabel}
                        </label>
                        <input
                          aria-invalid={Boolean(fieldErrors.name)}
                          autoComplete="name"
                          className={getFieldInputClassName(Boolean(fieldErrors.name))}
                          onBlur={() => handleBlur('name')}
                          onChange={(event) => setFieldValue('name', event.target.value)}
                          type="text"
                          value={formValues.name}
                        />
                        <FieldError message={fieldErrors.name} />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-sage">
                          {content.form.phoneLabel}
                        </label>
                        <input
                          aria-invalid={Boolean(fieldErrors.phone)}
                          autoComplete="tel"
                          className={getFieldInputClassName(Boolean(fieldErrors.phone))}
                          inputMode="tel"
                          onBlur={() => handleBlur('phone')}
                          onChange={(event) =>
                            setFieldValue('phone', sanitizePhoneInput(event.target.value))
                          }
                          placeholder="06 61 85 56 89"
                          type="tel"
                          value={formValues.phone}
                        />
                        <FieldError message={fieldErrors.phone} />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-sage">
                        {content.form.emailLabel}
                      </label>
                      <input
                        aria-invalid={Boolean(fieldErrors.email)}
                        autoComplete="email"
                        className={getFieldInputClassName(Boolean(fieldErrors.email))}
                        onBlur={() => handleBlur('email')}
                        onChange={(event) => setFieldValue('email', event.target.value)}
                        type="email"
                        value={formValues.email}
                      />
                      <FieldError message={fieldErrors.email} />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-sage">
                        {content.form.serviceLabel}
                      </label>
                      <select
                        aria-invalid={Boolean(fieldErrors.service)}
                        className={getFieldInputClassName(Boolean(fieldErrors.service), 'select')}
                        onBlur={() => handleBlur('service')}
                        onChange={(event) => setFieldValue('service', event.target.value)}
                        value={formValues.service}
                      >
                        <option value="">{content.form.servicePlaceholder}</option>
                        {content.form.serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <FieldError message={fieldErrors.service} />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-sage">
                        {content.form.messageLabel}
                      </label>
                      <textarea
                        aria-invalid={Boolean(fieldErrors.message)}
                        className={getFieldInputClassName(Boolean(fieldErrors.message))}
                        onBlur={() => handleBlur('message')}
                        onChange={(event) => setFieldValue('message', event.target.value)}
                        placeholder={content.form.messagePlaceholder}
                        rows={5}
                        value={formValues.message}
                      />
                      <FieldError message={fieldErrors.message} />
                    </div>

                    <button
                      className="flex w-full items-center justify-center bg-brand-forest px-8 py-4 text-sm uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-rose hover:!text-white disabled:cursor-not-allowed disabled:bg-brand-sage disabled:hover:!text-white"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isSubmitting ? 'Envoi en cours...' : content.form.submitLabel}
                      <Send className="ml-2 h-4 w-4" />
                    </button>

                    <p className="text-center text-xs uppercase tracking-[0.18em] text-brand-sage/70">
                      {content.form.description}
                    </p>
                  </form>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      <GiftCardPreviewSection
        email={siteSettings.contact.email}
        facebookUrl={content.reservation.facebookUrl}
      />

      <section className="bg-brand-forest py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <FadeInSection>
            <AlertCircle className="mx-auto mb-6 h-10 w-10 text-brand-rose" />
            <h2 className="mb-6 font-subtitle text-3xl">{content.importantInfo.title}</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 text-left md:grid-cols-3">
              {content.importantInfo.items.map((item, index) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/5 p-6"
                  key={`${item.slice(0, 24)}-${index}`}
                >
                  <p className="text-sm font-light leading-relaxed text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col items-center justify-between rounded-3xl bg-brand-cream p-8 md:flex-row md:p-12">
              <div className="mb-8 md:mb-0 md:w-1/2 md:pr-12">
                <h3 className="mb-2 font-script text-4xl text-brand-rose">
                  {content.access.scriptTitle}
                </h3>
                <h2 className="mb-6 font-subtitle text-3xl text-brand-forest md:text-4xl">
                  {content.access.title}
                </h2>
                <div className="mb-6 flex items-start">
                  <MapPin className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-brand-rose" />
                  <div>
                    <p className="text-lg font-medium text-brand-forest">
                      {siteSettings.contact.address.split('\n')[1]}
                    </p>
                    <p className="mt-2 border-l-2 border-brand-rose pl-3 font-light italic text-brand-sage">
                      Retrouvez ici l’adresse du salon pour préparer facilement votre venue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-[1.75rem] border-4 border-white bg-white shadow-md">
                  <iframe
                    className="h-72 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={openStreetMapEmbedUrl}
                    title={`Carte OpenStreetMap - ${contactAddress}`}
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-brand-rose/10 bg-white/70 px-5 py-4 text-sm leading-7 text-brand-sage">
                  <p className="font-medium text-brand-forest">{siteSettings.contact.address}</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-brand-cream py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-subtitle text-3xl text-brand-forest md:text-4xl">
                {content.faq.title}
              </h2>
              <p className="font-light text-brand-sage">{content.faq.introText}</p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-2">
              {content.faq.items.map((item, index) => (
                <AccordionItem
                  description={item.description}
                  icon={item.icon}
                  isOpen={openAccordion === index}
                  key={`${item.title}-${index}`}
                  onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                  title={item.title}
                />
              ))}
            </div>

            <p className="mt-8 text-center text-xs uppercase tracking-widest text-brand-sage/60">
              {content.faq.acceptanceText}
            </p>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
