import { Scale, Shield } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-blue-100 via-60% to-slate-100 section-padding overflow-hidden">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 mb-12 shadow-lg border border-gray-100">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">FCA Regulated Claims Management</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-display mb-8">
            <span className="gradient-text">Fair redress,</span>{' '}
            <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-primary-700 bg-clip-text text-transparent">
              done right.
            </span>
          </h1>
          
          {/* Sub-headline */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl sm:text-2xl text-gray-600 text-body mb-6">
              Solvo Solutions is an FCA‑regulated claims‑management firm devoted to advancing{' '}
              <span className="font-semibold text-gray-800">consumer justice</span>—from mis‑sold motor finance to unsafe housing—through ethical, transparent, and tech‑driven processes.
            </p>
            <p className="text-lg text-gray-500 italic text-body">
              (No hard sales pitch—just an overview of who we are and what we stand for.)
            </p>
          </div>
          
          {/* Information Notice */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl px-6 py-4 border border-primary-100 shadow-sm">
              <Scale className="w-5 h-5 text-primary-600" />
              <span className="text-primary-800 text-caption">Information & Educational Resource</span>
            </div>
          </div>
          
          {/* Key Stats Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '50,000+', label: 'Claims Handled' },
              { value: '£60M+', label: 'Compensation Pursued' },
              { value: '4.5/5', label: 'Client Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-3xl sm:text-4xl text-display bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 text-caption">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modern Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary-200/40 via-blue-200/30 to-blue-100/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-200/30 via-primary-100/30 to-white/0 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-primary-50/60 via-blue-50/40 to-white/0 blur-2xl"></div>
      </div>
    </section>
  )
}