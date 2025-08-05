import { Scale, Shield } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Solvo Solutions
              </h1>
              <p className="text-sm text-gray-500 font-medium">Claims Management</p>
            </div>
          </div>
          
          {/* FCA Badge */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-primary-50 to-blue-50 rounded-full px-4 py-2 border border-primary-100 shadow-sm">
            <Shield className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">FCA Regulated</span>
          </div>
        </div>
      </div>
    </header>
  )
}