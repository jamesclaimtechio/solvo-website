import { Mail, MapPin, Shield, Database, Cloud, FileCheck } from 'lucide-react'
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
            
            {/* Information Panel */}
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Consumer Rights Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Areas We Cover</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Motor Finance Mis-selling Claims</li>
                    <li>• Housing Disrepair Compensation</li>
                    <li>• Tenancy Deposit Disputes</li>
                    <li>• Debt Collection Issues</li>
                    <li>• Consumer Justice Cases</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Our Approach</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We connect consumers with trusted legal partners who operate on a success-only fee basis. Our service is capped at 30% + VAT. Our process is transparent, 
                    ethical, and designed to ensure consumers are connected with the right legal expertise for legitimate claims.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Regulatory Compliance</h4>
                  <p className="text-gray-600 leading-relaxed">
                    As an FCA-regulated firm, we adhere to strict guidelines ensuring consumer protection, 
                    transparent communication, and ethical business practices in all our operations.
                  </p>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-sm text-primary-800 font-medium mb-2">
                    Educational Resource
                  </p>
                  <p className="text-sm text-primary-700">
                    This website serves as an informational resource about consumer rights and claims management processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}