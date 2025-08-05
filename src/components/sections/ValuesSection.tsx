import { Heart, Shield, Eye, Lightbulb, CheckCircle } from 'lucide-react'
import type { ValueItem } from '@/types'

export default function ValuesSection() {
  const values: ValueItem[] = [
    {
      title: 'Consumer‑First',
      description: 'Every decision starts with what delivers the best outcome for our clients.',
      icon: 'heart'
    },
    {
      title: 'Compliance',
      description: 'FCA, SRA, GDPR, and Consumer Duty requirements are baked into our workflows.',
      icon: 'shield'
    },
    {
      title: 'Transparency',
      description: 'Clear fees, real‑time progress tracking, and open communication.',
      icon: 'eye'
    },
    {
      title: 'Innovation',
      description: 'AI‑powered automation cuts delay and cost, passing the benefit to consumers.',
      icon: 'lightbulb'
    },
    {
      title: 'Integrity',
      description: 'Honest advice and ethical partnerships underpin everything we do.',
      icon: 'check'
    }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart': return Heart
      case 'shield': return Shield
      case 'eye': return Eye
      case 'lightbulb': return Lightbulb
      case 'check': return CheckCircle
      default: return Heart
    }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-slate-50/30 relative overflow-hidden">
      {/* Background Lens Effects */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-100/40 to-blue-100/40 rounded-full blur-3xl opacity-25" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-primary-200/30 rounded-full blur-3xl opacity-20" />
      
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Five core principles that guide every decision we make and every consumer we help connect with legal expertise.
            </p>
          </div>
          
          {/* Values Grid - First row with 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {values.slice(0, 3).map((value, index) => {
              const IconComponent = getIcon(value.icon)
              
              return (
                <div 
                  key={index} 
                  className="card hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4 group-hover:bg-primary-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Values Grid - Second row with 2 items centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {values.slice(3, 5).map((value, index) => {
              const IconComponent = getIcon(value.icon)
              
              return (
                <div 
                  key={index + 3} 
                  className="card hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4 group-hover:bg-primary-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                      {String(index + 4).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}