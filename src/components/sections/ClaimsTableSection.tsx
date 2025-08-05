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
    <section className="section-padding bg-gradient-to-b from-slate-50/50 to-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="section-subheader mb-8">
              Claims We Handle
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto text-body">
              From motor finance mis-selling to housing disputes, we cover a comprehensive range of consumer justice issues.
            </p>
          </div>
          
          {/* Gradient Divider */}
          <div className="gradient-divider" />
          {/* Claims Cards */}
          <div className="space-y-6">
            {claims.map((claim, index) => {
              const IconComponent = getIcon(index)
              const isHighlighted = index === 0 || index === 1 // Highlight main services
              
              return (
                <div 
                  key={index} 
                  className={`card-elevated transition-all duration-300 ${
                    isHighlighted 
                      ? 'bg-gradient-to-r from-primary-50 via-white to-blue-50 border-primary-200 ring-1 ring-primary-100 shadow-xl hover:shadow-2xl' 
                      : 'hover:border-gray-200 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      isHighlighted 
                        ? 'bg-gradient-to-br from-primary-500 to-primary-600' 
                        : 'bg-gradient-to-br from-gray-400 to-gray-500'
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="mb-4">
                        <h3 className="text-xl text-heading gradient-text mb-2">
                          {claim.title}
                        </h3>
                        {claim.subtitle && (
                          <p className="text-sm text-gray-600 text-caption">
                            {claim.subtitle}
                          </p>
                        )}
                      </div>
                      <p className="text-gray-700 text-lg text-body">
                        {claim.description}
                      </p>
                    </div>
                    
                    {isHighlighted && (
                      <div className="flex-shrink-0">
                        <span className="badge badge-primary">
                          Active
                        </span>
                      </div>
                    )}
                    
                    {index === 4 && (
                      <div className="flex-shrink-0">
                        <span className="badge badge-gray">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Information Notice */}
          <div className="text-center mt-16">
            <div className="card-elevated bg-gradient-to-r from-blue-50 via-white to-primary-50 text-center max-w-2xl mx-auto">
              <h3 className="text-xl text-heading gradient-text mb-3">Consumer Rights Information</h3>
              <p className="text-gray-600 text-body">Understanding your options in claims management processes and consumer protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}