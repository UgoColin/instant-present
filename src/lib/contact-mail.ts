import nodemailer from 'nodemailer'

import type { ContactFormValues } from '@/lib/contact-form'

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const formatMultilineHtml = (value: string) =>
  escapeHtml(value)
    .split('\n')
    .map((line) => (line.trim() ? line : '&nbsp;'))
    .join('<br />')

const formatDateTime = () =>
  new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Europe/Paris',
  }).format(new Date())

const getRequiredEnv = (name: string) => {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

const getOptionalEnv = (name: string) => {
  const value = process.env[name]

  if (!value) {
    return undefined
  }

  return value
}

let cachedTransporter: nodemailer.Transporter | null = null

const getTransporter = () => {
  if (cachedTransporter) {
    return cachedTransporter
  }

  const host = getRequiredEnv('SMTP_HOST')
  const port = Number(getRequiredEnv('SMTP_PORT'))
  const user = getOptionalEnv('SMTP_USER')
  const pass = getOptionalEnv('SMTP_PASS')
  const secure = process.env.SMTP_SECURE === 'true' || port === 465

  if ((user && !pass) || (!user && pass)) {
    throw new Error('SMTP_USER and SMTP_PASS must either both be set or both be empty')
  }

  cachedTransporter = nodemailer.createTransport({
    ...(user && pass
      ? {
          auth: {
            pass,
            user,
          },
        }
      : {}),
    host,
    port,
    secure,
  })

  return cachedTransporter
}

const renderContactMailHtml = (values: ContactFormValues, siteName: string) => `
  <div style="margin:0;padding:32px;background:#faf1e8;font-family:Arial,sans-serif;color:#15574d;">
    <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid rgba(204,135,135,0.18);box-shadow:0 20px 60px rgba(21,87,77,0.08);">
      <div style="padding:28px 32px;background:#15574d;color:#faf1e8;">
        <div style="font-size:12px;letter-spacing:0.28em;text-transform:uppercase;color:#cc8787;">Nouvelle demande</div>
        <h1 style="margin:12px 0 0;font-size:30px;line-height:1.2;font-weight:600;">Formulaire de contact ${escapeHtml(siteName)}</h1>
      </div>

      <div style="padding:32px;">
        <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#48615c;">
          Une nouvelle demande a été envoyée depuis le site le ${escapeHtml(formatDateTime())}.
        </p>

        <table style="width:100%;border-collapse:collapse;">
          <tbody>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f2e4d9;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#48615c;">Nom</td>
              <td style="padding:12px 0;border-bottom:1px solid #f2e4d9;font-size:15px;color:#15574d;">${escapeHtml(values.name.trim())}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f2e4d9;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#48615c;">Téléphone</td>
              <td style="padding:12px 0;border-bottom:1px solid #f2e4d9;font-size:15px;color:#15574d;">${escapeHtml(values.phone.trim())}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f2e4d9;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#48615c;">E-mail</td>
              <td style="padding:12px 0;border-bottom:1px solid #f2e4d9;font-size:15px;color:#15574d;">${escapeHtml(values.email.trim())}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f2e4d9;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#48615c;">Prestation</td>
              <td style="padding:12px 0;border-bottom:1px solid #f2e4d9;font-size:15px;color:#15574d;">${escapeHtml(values.service.trim())}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top:28px;">
          <div style="margin-bottom:10px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#48615c;">Message</div>
          <div style="padding:20px;background:#faf1e8;border-left:4px solid #cc8787;font-size:15px;line-height:1.8;color:#15574d;">
            ${formatMultilineHtml(values.message.trim())}
          </div>
        </div>
      </div>
    </div>
  </div>
`

const renderContactMailText = (
  values: ContactFormValues,
  siteName: string,
) => `Nouvelle demande depuis ${siteName}

Date: ${formatDateTime()}
Nom: ${values.name.trim()}
Téléphone: ${values.phone.trim()}
E-mail: ${values.email.trim()}
Prestation: ${values.service.trim()}

Message:
${values.message.trim()}
`

export const sendContactFormEmail = async (values: ContactFormValues, siteName: string) => {
  const transporter = getTransporter()
  const to = getRequiredEnv('CONTACT_FORM_TO_EMAIL')
  const from = getRequiredEnv('CONTACT_FORM_FROM_EMAIL')

  await transporter.sendMail({
    from,
    html: renderContactMailHtml(values, siteName),
    replyTo: values.email.trim(),
    subject: `[${siteName}] Nouvelle demande de ${values.name.trim()}`,
    text: renderContactMailText(values, siteName),
    to,
  })
}
