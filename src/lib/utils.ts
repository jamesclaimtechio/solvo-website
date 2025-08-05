export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ')
}

export const contactInfo = {
  email: 'info@solvosolutions.co.uk',
  phone: '+44 (0)20 xxxx xxxx',
  address: 'Solvo Solutions Ltd, 75 Bulkeley Road, Cheadle, Cheshire, SK8 2AD'
}

export const trustBadges = [
  'FCA Authorised',
  'ICO Registered', 
  'AWS Secure Hosting',
  'GDPR Compliant'
]