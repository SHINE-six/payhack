import Link from 'next/link'

export function SupportSection() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
      <div className="space-y-2">
        <p>
          <Link href="/help/login" className="text-primary hover:underline">
            Having trouble logging in?
          </Link>
        </p>
        <p>
          <Link href="/contact" className="text-primary hover:underline">
            Don&apos;t see your institution?
          </Link>
        </p>
      </div>
      <h3 className="text-lg font-semibold mt-4 mb-2">Frequently Asked Questions</h3>
      <div className="space-y-2">
        <p>
          <Link href="/faq/open-finance" className="text-primary hover:underline">
            What is Open Finance?
          </Link>
        </p>
        <p>
          <Link href="/faq/data-protection" className="text-primary hover:underline">
            How is my data protected?
          </Link>
        </p>
      </div>
    </div>
  )
}

