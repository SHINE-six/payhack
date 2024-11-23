import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function AccountOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Overview</CardTitle>
        <CardDescription>Manage your Open Finance account settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>user@example.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Last Login</h3>
            <p>May 15, 2023 at 10:30 AM</p>
          </div>
          <div>
            <h3 className="font-semibold">Two-Factor Authentication</h3>
            <p>Enabled</p>
          </div>
          <Button variant="outline">Update Account Settings</Button>
        </div>
      </CardContent>
    </Card>
  )
}

