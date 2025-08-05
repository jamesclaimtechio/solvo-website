import { CheckCircle, Eye, FileSearch, MessageSquare, RotateCcw } from 'lucide-react'

export default function ConsumerJusticeSection() {
  const processes = [
    {
      icon: Eye,
      title: 'Spot',
      subtitle: 'unfair practices',
      description: 'mis‑selling, non‑compliance, or breaches of duty.'
    },
    {
      icon: FileSearch,
      title: 'Secure',
      subtitle: 'the information and records',
      description: 'needed to prove the case.'
    },
    {
      icon: MessageSquare,
      title: 'Advocate',
      subtitle: 'for clients',
      description: 'via negotiation, formal complaint, or litigation through trusted solicitors.'
    },
    {
      icon: RotateCcw,
      title: 'Restore',
      subtitle: 'what\'s owed',
      description: 'compensation, interest, and peace of mind.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Championing Consumer Justice
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every day we help people put right a wide range of wrongs—unfair fees, irresponsible lending, unsafe homes, withheld deposits, and more.
              </p>
              <p className="text-lg text-gray-900 font-medium">
                Our mission is simple: <strong>identify injustice, secure evidence, and deliver redress—so ordinary consumers get the fair outcome the system promises.</strong>
              </p>
            </div>
          </div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processes.map((process, index) => {
              const IconComponent = process.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4 group-hover:bg-primary-100 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <strong className="text-primary-600">{process.title}</strong> {process.subtitle}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              )
            })}
          </div>
          
          {/* Key Promise */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-primary-600" />
              <span className="text-lg font-semibold text-primary-900">Our Promise</span>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We keep clients informed at every stage and charge a{' '}
              <strong className="text-primary-800">success‑only fee that is capped at 30% + VAT.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}