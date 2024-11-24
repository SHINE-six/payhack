import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AccountOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Overview</CardTitle>
        <CardDescription>
          Manage your Open Finance account settings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>dylantan@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Last Login</h3>
            <p>November 24, 2024 at 12:30 PM</p>
          </div>
          <div>
            <h3 className="font-semibold">Two-Factor Authentication</h3>
            <p>Enabled</p>
          </div>
          <Button variant="outline">Update Account Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
}
