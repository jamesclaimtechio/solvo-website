import { Mail, Phone, MapPin, Shield, Database, Cloud, FileCheck } from 'lucide-react'
import { contactInfo, trustBadges } from '@/lib/utils'

export default function ContactSection() {
  const trustIcons = [Shield, FileCheck, Cloud, Database]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Want to Know More?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              If you&apos;d like further information about any of our services—or simply want to understand your rights—feel free to reach out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Email</p>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Phone</p>
                      <a 
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">Address</p>
                      <p className="text-gray-600 leading-relaxed">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Trust & Compliance
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {trustBadges.map((badge, index) => {
                    const IconComponent = trustIcons[index] || Shield
                    return (
                      <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-200">
                        <IconComponent className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">
                          {badge}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Free Case Assessment
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john.smith@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+44 7XXX XXXXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="claimType" className="block text-sm font-medium text-gray-700 mb-2">
                    Claim Type *
                  </label>
                  <select
                    id="claimType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select claim type</option>
                    <option value="motor-finance">Motor Finance Mis-selling</option>
                    <option value="housing-disrepair">Housing Disrepair</option>
                    <option value="tenancy-deposit">Tenancy Deposit Disputes</option>
                    <option value="debt-collection">Debt Contention & Unfair Collection</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your situation
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Please provide details about your case..."
                  ></textarea>
                </div>
                
                <div className="space-y-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-600">
                      I consent to Solvo Solutions processing my personal data for the purpose of assessing my potential claim. *
                    </span>
                  </label>
                  
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-600">
                      I would like to receive updates about my case and relevant legal news.
                    </span>
                  </label>
                </div>
                
                <button type="submit" className="btn-primary w-full justify-center">
                  Get Free Assessment
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}