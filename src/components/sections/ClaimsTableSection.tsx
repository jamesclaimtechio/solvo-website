import { Car, Home, CreditCard, AlertTriangle, TrendingUp } from 'lucide-react'
import type { ClaimType } from '@/types'

export default function ClaimsTableSection() {
  const claims: ClaimType[] = [
    {
      title: 'Motor‑Finance Mis‑selling',
      subtitle: 'Discretionary Commission Arrangements (DCA) • Hidden / irresponsible lending charges',
      description: 'Overcharged interest and undisclosed commissions on HP & PCP agreements'
    },
    {
      title: 'Housing Disrepair',
      description: 'Compensation for unremedied property defects'
    },
    {
      title: 'Tenancy Deposit Disputes',
      description: 'Late‑protected or non‑protected tenancy deposits'
    },
    {
      title: 'Debt Contention & Unfair Collection',
      description: 'Disputed consumer debts or balances pursued using unfair practices'
    },
    {
      title: 'Future Verticals',
      description: 'SME energy mis‑selling, credit‑card fees, timeshare exits'
    }
  ]

  const getIcon = (index: number) => {
    const icons = [Car, Home, CreditCard, AlertTriangle, TrendingUp]
    return icons[index] || Car
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Claims We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From motor finance mis-selling to housing disputes, we cover a comprehensive range of consumer justice issues.
            </p>
          </div>
          
          {/* Claims Cards */}
          <div className="space-y-4">
            {claims.map((claim, index) => {
              const IconComponent = getIcon(index)
              const isHighlighted = index === 0 || index === 1 // Highlight main services
              
              return (
                <div 
                  key={index} 
                  className={`card hover:shadow-md transition-all duration-200 ${
                    isHighlighted ? 'ring-2 ring-primary-100 bg-primary-50/30' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      isHighlighted ? 'bg-primary-100' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        isHighlighted ? 'text-primary-600' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {claim.title}
                        </h3>
                        {claim.subtitle && (
                          <p className="text-sm text-gray-600 font-medium">
                            {claim.subtitle}
                          </p>
                        )}
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {claim.description}
                      </p>
                    </div>
                    
                    {isHighlighted && (
                      <div className="flex-shrink-0">
                        <span className="badge badge-primary text-xs">
                          Active
                        </span>
                      </div>
                    )}
                    
                    {index === 4 && (
                      <div className="flex-shrink-0">
                        <span className="badge badge-gray text-xs">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-left">
                <p className="text-gray-900 font-medium mb-1">Think you have a claim?</p>
                <p className="text-gray-600 text-sm">Get a free assessment of your case</p>
              </div>
              <button className="btn-primary flex-shrink-0">
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}