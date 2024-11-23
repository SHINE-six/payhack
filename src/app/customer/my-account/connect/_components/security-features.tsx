import { Shield, Lock, CheckCircle } from 'lucide-react'

export function SecurityFeatures() {
  return (
    <div className="mt-8 p-4 bg-muted rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Security Assurance</h2>
      <p className="mb-4">
        Your login credentials are never stored and are handled directly by your financial institution.
        All connections are encrypted and comply with Open Finance security standards.
      </p>
      <div className="flex flex-wrap justify-around">
        <div className="flex items-center space-x-2 mb-2">
          <Shield className="h-5 w-5" />
          <span>Powered by Open Banking APIs</span>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Lock className="h-5 w-5" />
          <span>PCI DSS Compliant</span>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <CheckCircle className="h-5 w-5" />
          <span>ISO 27001 Certified</span>
        </div>
      </div>
    </div>
  )
}

