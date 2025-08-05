import { Scale, Shield } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Solvo Solutions</h1>
              <p className="text-sm text-gray-600">Claims Management</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-primary-600 transition-colors">
              Services
            </a>
            <a href="#team" className="text-gray-600 hover:text-primary-600 transition-colors">
              Team
            </a>
            <a href="#values" className="text-gray-600 hover:text-primary-600 transition-colors">
              Values
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">
              Contact
            </a>
          </nav>
          
          {/* FCA Badge */}
          <div className="flex items-center gap-2 bg-primary-50 rounded-full px-3 py-1">
            <Shield className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">FCA Regulated</span>
          </div>
        </div>
      </div>
    </header>
  )
}