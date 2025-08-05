import { Car, Home, CreditCard, AlertTriangle, TrendingUp, Award } from 'lucide-react'
import type { ClaimType } from '@/types'

export default function ClaimsTableSection() {
  const claims: ClaimType[] = [
    {
      title: 'Motor Finance Mis‑selling',
      subtitle: 'Discretionary Commission Arrangements (DCA) • Hidden lending charges • Irresponsible lending',
      description: 'When car dealerships receive secret commissions from lenders without disclosure, or when finance agreements contain unfair terms, hidden fees, or were sold irresponsibly without proper affordability checks.',
      badge: 'High Volume'
    },
    {
      title: 'Housing Disrepair',
      subtitle: 'Property defects • Landlord negligence • Health & safety violations',
      description: 'When landlords fail to maintain rental properties in habitable condition, including persistent damp, mold, heating failures, electrical issues, structural problems, or other defects that affect health, safety, or quality of life.',
      badge: 'Active Cases'
    },
    {
      title: 'Tenancy Deposit Protection',
      subtitle: 'Unprotected deposits • Late protection • Unlawful deductions',
      description: 'When landlords fail to protect tenancy deposits in government-approved schemes within required timeframes, or when they make unreasonable deductions for normal wear and tear, cleaning, or damages you did not cause.',
      badge: 'Quick Resolution'
    },
    {
      title: 'Debt Contention',
      subtitle: 'Unenforceable debts • Statute-barred claims • Disputed balances • Invalid agreements',
      description: 'When you face collection attempts for debts that cannot be legally enforced, including statute-barred debts, agreements lacking proper documentation, debts with missing terms and conditions, or balances with incorrect calculations that make them unenforceable.',
      badge: 'Consumer Protection'
    },
    {
      title: 'Emerging Claims',
      subtitle: 'SME energy mis‑selling • Credit card fees • Timeshare exits • Financial product mis‑selling',
      description: 'Emerging areas of consumer harm including business energy mis-selling, unfair credit card fees, timeshare exit issues, pension transfer advice problems, and other financial product mis-selling affecting consumers and small businesses.',
      badge: 'New Opportunities'
    }
  ]

  const getIcon = (index: number) => {
    const icons = [Car, Home, CreditCard, AlertTriangle, TrendingUp]
    return icons[index] || Car
  }

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
      {/* Background Lens Effects */}
      <div className="absolute top-0 -left-32 w-80 h-80 bg-gradient-to-br from-blue-100/50 to-primary-100/50 rounded-full blur-3xl opacity-35" />
      <div className="absolute bottom-32 -right-16 w-72 h-72 bg-gradient-to-br from-primary-200/40 to-blue-200/40 rounded-full blur-3xl opacity-30" />
      
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="section-subheader mb-8">
              Expertise Across Consumer Claims
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 text-subheading">
                <span className="text-heading gradient-text">Understanding your rights</span> across the most common areas of consumer detriment.
              </p>
              <p className="text-lg text-gray-600 text-body">
                From motor finance overcharging to housing disrepair—learn about the issues that may entitle you to compensation and how we can connect you with specialist legal expertise.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-12">
              <div className="text-center">
                <div className="text-xl sm:text-2xl text-display gradient-text">5+</div>
                <div className="text-xs sm:text-sm text-gray-600 text-caption">Claim Types</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="w-full sm:w-auto block sm:hidden h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-2" />
              <div className="text-center">
                <div className="text-xl sm:text-2xl text-display gradient-text">UK Wide</div>
                <div className="text-xs sm:text-sm text-gray-600 text-caption">Coverage</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="w-full sm:w-auto block sm:hidden h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-2" />
              <div className="text-center">
                <div className="text-xl sm:text-2xl text-display gradient-text">Success Fee</div>
                <div className="text-xs sm:text-sm text-gray-600 text-caption">Only Model</div>
              </div>
            </div>
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
                  <div className="flex items-start gap-3 sm:gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ${
                      isHighlighted 
                        ? 'bg-gradient-to-br from-primary-500 to-primary-600' 
                        : 'bg-gradient-to-br from-gray-400 to-gray-500'
                    }`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Header with Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                        <div className="flex-1 mb-2 sm:mb-0">
                          <h3 className="text-lg sm:text-xl text-heading gradient-text mb-1 sm:mb-2">
                            {claim.title}
                          </h3>
                          {claim.subtitle && (
                            <p className="text-xs sm:text-sm text-gray-600 text-caption leading-relaxed">
                              {claim.subtitle}
                            </p>
                          )}
                        </div>
                        {claim.badge && (
                          <span className={`badge self-start sm:ml-4 flex-shrink-0 text-xs sm:text-sm ${
                            isHighlighted ? 'badge-primary' : 'badge-gray'
                          }`}>
                            {claim.badge}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-700 text-base sm:text-lg text-body mb-3 sm:mb-4 leading-relaxed">
                        {claim.description}
                      </p>

                    </div>
                    
                    {isHighlighted && (
                      <div className="flex-shrink-0 hidden sm:block">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                    )}
                    
                    {index === 4 && (
                      <div className="flex-shrink-0 hidden sm:block">
                        <span className="badge badge-gray text-xs sm:text-sm">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile-only badges row */}
                  <div className="flex sm:hidden items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    {isHighlighted && (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs text-green-700 font-medium">Priority Service</span>
                      </div>
                    )}
                    {index === 4 && (
                      <span className="badge badge-gray text-xs">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Enhanced Information Notice */}
          <div className="text-center mt-16 sm:mt-20">
            <div className="card-elevated bg-gradient-to-r from-blue-50 via-white to-primary-50 text-center max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl text-heading gradient-text">Success-Only Fee Structure</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div className="py-2">
                  <div className="text-2xl sm:text-3xl font-black text-primary-600 mb-1 sm:mb-2">No</div>
                  <div className="text-xs sm:text-sm text-gray-600 text-body">Upfront Costs</div>
                </div>
                <div className="py-2 border-t sm:border-t-0 sm:border-l sm:border-r border-gray-200 sm:px-4">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-1 sm:mb-2">30%</div>
                  <div className="text-xs sm:text-sm text-gray-600 text-body">Max Fee + VAT</div>
                </div>
                <div className="py-2 border-t sm:border-t-0 border-gray-200">
                  <div className="text-2xl sm:text-3xl font-black text-green-600 mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600 text-body">Transparent Process</div>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 text-body mt-4 sm:mt-6 border-t border-gray-200 pt-4 sm:pt-6">
                Understanding your rights in claims management and consumer protection—we connect you with trusted legal partners with complete transparency on costs and outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}