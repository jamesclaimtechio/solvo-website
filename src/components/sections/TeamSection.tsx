import { Scale, Code, TrendingUp, Shield } from 'lucide-react'

export default function TeamSection() {
  const expertiseAreas = [
    {
      icon: Scale,
      title: 'Claims & Compliance Expertise',
      description: 'With a combined two decades of claims‑management experience, our former heads of CMC operations and FCA compliance specialists have overseen tens of thousands of successful consumer redress cases.',
      highlight: '20+ years experience'
    },
    {
      icon: Code,
      title: 'Technology & Automation',
      description: 'Senior engineers and product leaders with years of tech experience—delivering secure, AI‑driven platforms that create a superior product for both customers and partners.',
      highlight: 'AI-driven platforms'
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Customer Experience',
      description: 'Growth strategists with proven success in reaching, educating, and supporting millions of customers.',
      highlight: 'Millions served'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                Solvo Solutions is led by a multidisciplinary partnership that unites decades of seasoned expertise across claims management, technology, regulation, and growth marketing. Each partner first built a track record of excellence—running high‑volume claims operations, architecting secure fintech platforms, or scaling consumer‑centric brands—before combining their strengths to create an industry‑leading claims‑management company.
              </p>
            </div>
          </div>
          
          {/* Expertise Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={index} className="card hover:shadow-lg transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4 group-hover:bg-primary-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="badge badge-primary mb-3">
                      {area.highlight}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center">
                    {area.description}
                  </p>
                </div>
              )
            })}
          </div>
          
          {/* Team Mission Statement */}
          <div className="bg-gradient-to-r from-gray-50 to-primary-50/30 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary-600" />
              <span className="text-lg font-semibold text-primary-900">Our Leadership Philosophy</span>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Together, our leadership blends{' '}
              <strong className="text-primary-800">rigorous compliance</strong>,{' '}
              <strong className="text-primary-800">cutting‑edge technology</strong>, and{' '}
              <strong className="text-primary-800">empathetic customer engagement</strong>{' '}
              to deliver fair redress—efficiently and transparently.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}