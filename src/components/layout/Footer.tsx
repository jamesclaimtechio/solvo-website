import { Mail, Phone, MapPin, Shield, Database, Cloud, FileCheck } from 'lucide-react'
import { contactInfo, trustBadges } from '@/lib/utils'

export default function Footer() {
  const trustIcons = [Shield, FileCheck, Cloud, Database]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
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
        </div>
        
        {/* Regulatory Information */}
        <div className="border-t border-gray-700 pt-12 mb-8">
          <div className="text-center max-w-4xl mx-auto">
            <h5 className="text-lg font-semibold text-white mb-6">Regulatory Information</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 mb-6">
              <div>
                <p className="text-sm text-gray-400">Company Number</p>
                <p className="font-semibold">14760023</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">FCA Number</p>
                <p className="font-semibold">1013195</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Authorized for</p>
                <p className="font-semibold">Claims Management</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Registered Office: Suite 3, 2nd Floor, Didsbury House, 748-754 Wilmslow Road, Manchester, M20 2DW
            </p>
          </div>
        </div>
        
        {/* Important Notice */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 mb-8 border border-gray-600">
          <div className="text-center text-gray-300">
            <p className="text-sm leading-relaxed">
              Solvo Solutions Ltd is authorized and regulated by the Financial Conduct Authority for claims management activities. 
              We connect consumers with specialist legal partners. Success-only fee basis capped at 30% + VAT.
            </p>
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
                Company Number: 14760023 | FCA Number: 1013195
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