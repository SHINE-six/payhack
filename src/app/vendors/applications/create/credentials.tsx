import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eye, Copy } from "lucide-react";

export default function AuthSettings() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Application Authentication</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-sm font-medium">Authentication Method</h2>
          <RadioGroup defaultValue="client-secret-post" className="space-y-3">
            <div className="flex items-center justify-between border rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="client-secret-post"
                  id="client-secret-post"
                />
                <Label htmlFor="client-secret-post">Client Secret (Post)</Label>
              </div>
            </div>

            <div className="flex items-center justify-between border rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="client-secret-basic"
                  id="client-secret-basic"
                />
                <Label htmlFor="client-secret-basic">
                  Client Secret (Basic)
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Method used to authenticate your application with the authorization
            server.{" "}
            <a href="#" className="text-primary hover:underline">
              Learn more about authentication methods
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <Label htmlFor="client-secret">Client Secret</Label>
          <div className="relative">
            <Input
              id="client-secret"
              type="password"
              className="pr-20"
              placeholder="Enter client secret"
              defaultValue={"w0RPzj3e3Whff2VjTDQcFZB1CUnPSRmt"}
            />
            <div className="absolute right-2 top-2 flex space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                aria-label="Show client secret"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                aria-label="Copy client secret"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            The Client Secret is not base64 encoded.
          </p>
        </div>

        <div className="flex space-x-2 justify-end">
          <Button variant="secondary">Cancel</Button>
          <Button>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
}
