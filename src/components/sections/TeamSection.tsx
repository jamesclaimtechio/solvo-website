import { Scale, Code, TrendingUp, Shield } from 'lucide-react'

export default function TeamSection() {
  const expertiseAreas = [
    {
      icon: Scale,
      title: 'Claims & Compliance',
      stats: '20+ Years',
      subtitle: 'Combined Experience',
      points: [
        'Former CMC operations heads',
        'FCA compliance specialists',
        'Tens of thousands of cases',
        'Proven redress track record'
      ]
    },
    {
      icon: Code,
      title: 'Technology & AI',
      stats: 'Enterprise',
      subtitle: 'Grade Platforms',
      points: [
        'Senior engineering leaders',
        'AI-driven automation',
        'Secure fintech platforms',
        'Superior user experience'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Growth & Marketing',
      stats: 'Millions',
      subtitle: 'Customers Reached',
      points: [
        'Proven growth strategists',
        'Consumer-centric brands',
        'Educational outreach',
        'Customer success focus'
      ]
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      {/* Background Lens Effects */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-100/60 to-primary-100/60 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-primary-100/50 to-blue-200/50 rounded-full blur-3xl opacity-30" />
      
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="section-subheader mb-8">
              Who We Are
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 text-subheading">
                <span className="text-heading gradient-text">Multidisciplinary partnership</span> uniting decades of expertise across claims, technology, and growth.
              </p>
              <p className="text-lg text-gray-600 text-body">
                Each partner built excellence first—then combined strengths for industry-leading consumer justice.
              </p>
            </div>
          </div>
          
          {/* Gradient Divider */}
          <div className="gradient-divider" />
          
          {/* Expertise Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={index} className="card-elevated group hover:scale-105 transition-all duration-500">
                  {/* Header with Icon & Stats */}
                  <div className="text-center mb-6">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-3xl text-display gradient-text">
                        {area.stats}
                      </div>
                      <div className="text-sm text-gray-600 text-caption">
                        {area.subtitle}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl text-heading text-gray-900 mb-6 text-center">
                    {area.title}
                  </h3>
                  
                  {/* Key Points */}
                  <div className="space-y-3">
                    {area.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-700 text-body">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Leadership Philosophy - Redesigned */}
          <div className="card-elevated bg-gradient-to-r from-primary-50 via-white to-blue-50 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl text-heading gradient-text">Our Formula</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-primary-600 mb-2">+</div>
                <div className="text-lg text-subheading text-gray-900">Rigorous Compliance</div>
                <div className="text-sm text-gray-600 text-body">FCA standards</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">+</div>
                <div className="text-lg text-subheading text-gray-900">Cutting-Edge Tech</div>
                <div className="text-sm text-gray-600 text-body">AI automation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary-700 mb-2">=</div>
                <div className="text-lg text-subheading text-gray-900">Consumer Justice</div>
                <div className="text-sm text-gray-600 text-body">Fair & transparent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}