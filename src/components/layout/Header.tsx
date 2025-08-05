import { Scale, Shield } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4 sm:py-6">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg">
              <Scale className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl text-heading bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent truncate">
                Solvo Solutions
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 text-caption">Claims Management</p>
            </div>
          </div>
          
          {/* FCA Badge */}
          <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-primary-50 to-blue-50 rounded-full px-2 sm:px-4 py-1 sm:py-2 border border-primary-100 shadow-sm">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-caption text-primary-700 whitespace-nowrap">
              <span className="hidden sm:inline">Industry </span>Leaders
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}