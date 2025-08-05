import { Mail, Phone, MapPin, Shield, Database, Cloud, FileCheck } from 'lucide-react'
import { contactInfo, trustBadges } from '@/lib/utils'

export default function Footer() {
  const trustIcons = [Shield, FileCheck, Cloud, Database]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Solvo Solutions
                </h3>
                <p className="text-gray-400 font-medium">Claims Management</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              An FCA‑regulated claims‑management firm devoted to advancing consumer justice through ethical, transparent, and tech‑driven processes.
            </p>
            <p className="text-primary-400 font-semibold">
              Fair redress, done right.
            </p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-lg">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-lg">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust & Compliance */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8">Trust & Compliance</h4>
            <div className="grid grid-cols-1 gap-4">
              {trustBadges.map((badge, index) => {
                const IconComponent = trustIcons[index] || Shield
                return (
                  <div key={index} className="flex items-center gap-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-200 font-medium">
                      {badge}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* Regulatory Information */}
        <div className="border-t border-gray-700 pt-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Registration */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Company Information</h5>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-gray-400">Company Name:</span> Solvo Solutions Ltd</p>
                <p><span className="text-gray-400">Company Number:</span> [TO BE VERIFIED]</p>
                <p><span className="text-gray-400">Incorporated:</span> [DATE FROM COMPANIES HOUSE]</p>
                <p><span className="text-gray-400">VAT Number:</span> [IF APPLICABLE]</p>
              </div>
            </div>
            
            {/* FCA Authorization */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">FCA Authorization</h5>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-gray-400">FCA Number:</span> [FCA REFERENCE NUMBER]</p>
                <p><span className="text-gray-400">Authorized for:</span> Claims Management</p>
                <p><span className="text-gray-400">Regulated Activities:</span> Claims Management Services</p>
                <p>
                  <a 
                    href="https://register.fca.org.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors underline"
                  >
                    Verify on FCA Register →
                  </a>
                </p>
              </div>
            </div>
            
            {/* Registered Address */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4">Registered Office</h5>
              <div className="text-gray-300">
                <p className="leading-relaxed">
                  [REGISTERED OFFICE ADDRESS]<br/>
                  [FROM COMPANIES HOUSE]<br/>
                  [POSTCODE]<br/>
                  United Kingdom
                </p>
                <p className="mt-3">
                  <a 
                    href="https://find-and-update.company-information.service.gov.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors underline text-sm"
                  >
                    Verify on Companies House →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Important Notice */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 mb-8 border border-gray-600">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="text-gray-300">
              <h6 className="font-semibold text-white mb-2">Regulatory Information</h6>
              <p className="text-sm leading-relaxed">
                Solvo Solutions Ltd is authorized and regulated by the Financial Conduct Authority (FCA) for claims management activities. 
                We connect consumers with specialist legal partners who provide representation and advice. Our service operates on a 
                success-only fee basis capped at 30% + VAT. Full terms and conditions apply.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-lg mb-2">
                © 2025 Solvo Solutions Ltd. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Company Number: [TO BE VERIFIED] | FCA Number: [TO BE VERIFIED]
              </p>
            </div>
            <div className="flex items-center gap-8 text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors font-medium">Terms of Service</a>
              <a href="#" className="hover:text-primary-400 transition-colors font-medium">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}