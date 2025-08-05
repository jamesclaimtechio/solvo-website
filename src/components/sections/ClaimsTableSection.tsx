import { Car, Home, CreditCard, AlertTriangle, TrendingUp, Clock, Award } from 'lucide-react'
import type { ClaimType } from '@/types'

export default function ClaimsTableSection() {
  const claims: ClaimType[] = [
    {
      title: 'Motor Finance Mis‑selling',
      subtitle: 'Discretionary Commission Arrangements (DCA) • Hidden lending charges • Irresponsible lending',
      description: 'We identify mis-sold finance products and connect you with specialist legal partners who can recover overcharged interest and undisclosed commissions on HP & PCP agreements.',
      badge: 'High Volume',
      timeline: '6-12 months'
    },
    {
      title: 'Housing Disrepair',
      subtitle: 'Property defects • Landlord negligence • Health & safety violations',
      description: 'We connect you with housing law specialists who can secure compensation for unremedied property defects that impact your quality of life. From damp and mold to heating failures—our legal partners ensure landlords meet their obligations.',
      badge: 'Active Cases',
      timeline: '3-8 months'
    },
    {
      title: 'Tenancy Deposit Protection',
      subtitle: 'Unprotected deposits • Late protection • Unlawful deductions',
      description: 'We connect you with tenancy law experts who can challenge landlords failing to protect deposits properly or making unfair deductions. Our legal partners can recover your full deposit plus statutory compensation where applicable.',
      badge: 'Quick Resolution',
      timeline: '2-6 months'
    },
    {
      title: 'Debt Collection Issues',
      subtitle: 'Unfair practices • Disputed balances • Harassment • Incorrect charges',
      description: 'We connect you with debt and consumer law specialists who can fight back against aggressive debt collectors and challenge disputed balances. Our legal partners ensure collection practices comply with regulations and protect your rights.',
      badge: 'Consumer Protection',
      timeline: '4-10 months'
    },
    {
      title: 'Emerging Claims',
      subtitle: 'SME energy mis‑selling • Credit card fees • Timeshare exits • Financial product mis‑selling',
      description: 'We continuously expand our network of legal partners to address new areas of consumer detriment. Contact us to discuss emerging claims and how our specialist partners can assist with potential compensation opportunities.',
      badge: 'New Opportunities',
      timeline: 'Varies'
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
                <span className="text-heading gradient-text">Comprehensive coverage</span> across the most impactful areas of consumer justice.
              </p>
              <p className="text-lg text-gray-600 text-body">
                From motor finance recovery to housing compensation—we connect you with trusted legal partners who deliver results through proven expertise and ethical practice.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl text-display gradient-text">5+</div>
                <div className="text-sm text-gray-600 text-caption">Claim Types</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="text-center">
                <div className="text-2xl text-display gradient-text">UK Wide</div>
                <div className="text-sm text-gray-600 text-caption">Coverage</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="text-center">
                <div className="text-2xl text-display gradient-text">Success Fee</div>
                <div className="text-sm text-gray-600 text-caption">Only Model</div>
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
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      isHighlighted 
                        ? 'bg-gradient-to-br from-primary-500 to-primary-600' 
                        : 'bg-gradient-to-br from-gray-400 to-gray-500'
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Header with Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl text-heading gradient-text mb-2">
                            {claim.title}
                          </h3>
                          {claim.subtitle && (
                            <p className="text-sm text-gray-600 text-caption leading-relaxed">
                              {claim.subtitle}
                            </p>
                          )}
                        </div>
                        {claim.badge && (
                          <span className={`badge ml-4 flex-shrink-0 ${
                            isHighlighted ? 'badge-primary' : 'badge-gray'
                          }`}>
                            {claim.badge}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-700 text-lg text-body mb-4 leading-relaxed">
                        {claim.description}
                      </p>
                      
                      {/* Timeline Indicator */}
                      {claim.timeline && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-caption">Typical timeline: {claim.timeline}</span>
                        </div>
                      )}
                    </div>
                    
                    {isHighlighted && (
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Award className="w-6 h-6 text-white" />
                        </div>
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
          
          {/* Enhanced Information Notice */}
          <div className="text-center mt-20">
            <div className="card-elevated bg-gradient-to-r from-blue-50 via-white to-primary-50 text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-heading gradient-text">Success-Only Fee Structure</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-primary-600 mb-2">No</div>
                  <div className="text-sm text-gray-600 text-body">Upfront Costs</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-600 mb-2">30%</div>
                  <div className="text-sm text-gray-600 text-body">Max Fee + VAT</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 text-body">Transparent Process</div>
                </div>
              </div>
              
              <p className="text-gray-600 text-body mt-6 border-t border-gray-200 pt-6">
                Understanding your rights in claims management and consumer protection—we connect you with trusted legal partners with complete transparency on costs and outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}