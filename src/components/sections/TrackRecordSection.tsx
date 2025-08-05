import { TrendingUp, Users, PoundSterling, Star } from 'lucide-react'
import type { Metric } from '@/types'

export default function TrackRecordSection() {
  const metrics: Metric[] = [
    {
      value: '50,000+',
      label: 'active claims handled'
    },
    {
      value: '£60 million+',
      label: 'compensation pursued'
    },
    {
      value: '4.5/5',
      label: 'average rating across all brands'
    }
  ]

  const getIcon = (index: number) => {
    const icons = [Users, PoundSterling, Star]
    return icons[index] || TrendingUp
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Track Record<span className="text-primary-600">*</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our results speak for themselves. Here&apos;s what we&apos;ve achieved for consumers seeking justice.
            </p>
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {metrics.map((metric, index) => {
              const IconComponent = getIcon(index)
              return (
                <div key={index} className="text-center group">
                  <div className="card hover:shadow-lg transition-all duration-300">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4 group-hover:bg-primary-100 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary-600" />
                      </div>
                    </div>
                    
                    <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                      {metric.value}
                    </div>
                    
                    <p className="text-gray-600 font-medium capitalize">
                      {metric.label}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Success Stories Preview */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-primary-900 mb-4">
                Making a Real Difference
              </h3>
              <p className="text-primary-800 max-w-2xl mx-auto">
                Behind every number is a person who received the justice they deserved. Our track record reflects years of dedicated service to consumer rights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold text-primary-900">Growing Impact</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Our success rate continues to improve as we refine our processes and expand our expertise.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold text-primary-900">Client Satisfaction</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    High ratings across all our brands reflect our commitment to transparent, ethical service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              *Metrics last updated June 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}