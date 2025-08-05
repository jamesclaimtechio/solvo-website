import { Scale, Shield } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50/30 section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm border border-primary-100">
            <Shield className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">FCA Regulated Claims Management</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Fair redress,{' '}
            <span className="text-primary-600">done right.</span>
          </h1>
          
          {/* Sub-headline */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4">
              Solvo Solutions is an FCA‑regulated claims‑management firm devoted to advancing{' '}
              <strong className="text-gray-900">consumer justice</strong>—from mis‑sold motor finance to unsafe housing—through ethical, transparent, and tech‑driven processes.
            </p>
            <p className="text-base text-gray-500 italic">
              (No hard sales pitch—just an overview of who we are and what we stand for.)
            </p>
          </div>
          
          {/* Information Notice */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary-50 rounded-lg px-4 py-2">
              <Scale className="w-4 h-4 text-primary-600" />
              <span className="text-primary-800 font-medium">Information & Educational Resource</span>
            </div>
          </div>
          
          {/* Key Stats Preview */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">50,000+</div>
              <div className="text-sm text-gray-600">Claims Handled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">£60M+</div>
              <div className="text-sm text-gray-600">Compensation Pursued</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">4.5/5</div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-primary-100/50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-primary-100/30 blur-3xl"></div>
      </div>
    </section>
  )
}