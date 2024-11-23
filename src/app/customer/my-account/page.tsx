import { AccountOverview } from './_components/account-overview'
import { ConnectedInstitutions } from './_components/connected-institutions'

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <AccountOverview />
        <ConnectedInstitutions />
      </div>
    </div>
  )
}
