import { InstitutionSelector } from './_components/institution-selector'
import { SecurityFeatures } from './_components/security-features'
import { SupportSection } from './_components/support-section'

export default function OpenFinanceLoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Connect to Your Financial Institution</h1>
        <p className="text-center text-muted-foreground mb-8">
          Securely connect to your financial accounts to access and manage your data.
          Choose your institution below to authorize access and begin.
        </p>
        <InstitutionSelector />
        <SecurityFeatures />
        <SupportSection />
      </div>
    </div>
  )
}

