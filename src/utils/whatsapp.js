const WHATSAPP_NUMBER = '919811207119'

export function redirectToWhatsApp(formData) {
  const whatsappMessage = [
    'Hello The Parking Advisor,',
    '',
    `Full Name: ${formData.fullName.trim()}`,
    `Email: ${formData.email.trim()}`,
    `Phone: ${formData.phone.trim()}`,
    `Subject: ${formData.subject.trim()}`,
    `Message: ${formData.message.trim()}`,
  ].join('\n')

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
  window.location.assign(whatsappUrl)
}
