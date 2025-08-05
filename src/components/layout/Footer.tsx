import { Mail, Phone, MapPin, Shield, Database, Cloud, FileCheck } from 'lucide-react'
import { contactInfo, trustBadges } from '@/lib/utils'

export default function Footer() {
  const trustIcons = [Shield, FileCheck, Cloud, Database]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Solvo Solutions</h3>
                <p className="text-gray-400">Claims Management</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              An FCA‑regulated claims‑management firm devoted to advancing consumer justice through ethical, transparent, and tech‑driven processes.
            </p>
            <p className="text-sm text-gray-400">
              Fair redress, done right.
            </p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
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
            <h4 className="text-lg font-semibold mb-6">Trust & Compliance</h4>
            <div className="grid grid-cols-1 gap-3">
              {trustBadges.map((badge, index) => {
                const IconComponent = trustIcons[index] || Shield
                return (
                  <div key={index} className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
                    <IconComponent className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">
                      {badge}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Solvo Solutions Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}