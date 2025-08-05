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
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-lg">
              © 2025 Solvo Solutions Ltd. All rights reserved.
            </p>
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