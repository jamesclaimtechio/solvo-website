export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ')
}

export const contactInfo = {
  email: 'support@solvosolutions.co.uk',
  address: 'Suite 3, 2nd Floor, Didsbury House, 748-754 Wilmslow Road, Manchester, M20 2DW'
}

export const trustBadges = [
  'FCA Authorised',
  'ICO Registered', 
  'AWS Secure Hosting',
  'GDPR Compliant'
]