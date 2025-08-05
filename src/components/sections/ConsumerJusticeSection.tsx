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
    <section className="section-padding bg-gradient-to-b from-white to-slate-50/50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="section-subheader mb-8">
              Championing Consumer Justice
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Every day we help people put right a wide range of wrongs—unfair fees, irresponsible lending, unsafe homes, withheld deposits, and more.
              </p>
              <p className="text-xl text-gray-800 font-medium leading-relaxed">
                Our mission is simple: <span className="font-semibold gradient-text">identify injustice, secure evidence, and deliver redress—so ordinary consumers get the fair outcome the system promises.</span>
              </p>
            </div>
          </div>
          
          {/* Gradient Divider */}
          <div className="gradient-divider" />
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {processes.map((process, index) => {
              const IconComponent = process.icon
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    <span className="font-bold gradient-text">{process.title}</span>{' '}
                    <span className="font-light text-gray-700">{process.subtitle}</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              )
            })}
          </div>
          
          {/* Key Promise */}
          <div className="card-elevated bg-gradient-to-r from-primary-50 via-white to-blue-50 text-center shadow-2xl hover:shadow-3xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">Our Promise</span>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We keep clients informed at every stage and charge a{' '}
              <span className="font-semibold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">success‑only fee that is capped at 30% + VAT.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}