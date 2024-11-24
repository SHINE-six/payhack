"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Institution {
  id: string;
  name: string;
  category: string;
}

interface AuthorizationSectionProps {
  institution: Institution;
}

export function AuthorizationSection({
  institution,
}: AuthorizationSectionProps) {
  const [consentGiven, setConsentGiven] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuthorize = async () => {
    if (!consentGiven) {
      setError("Please agree to the data sharing consent before proceeding.");
      return;
    }

    // Here you would typically redirect to the institution's OAuth flow
    // For this example, we'll just simulate a successful authorization
    console.log(`Authorizing with ${institution.name}...`);
    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(`Successfully authorized with ${institution.name}`);
  };

  return (
    <div className="w-full space-y-4">
      <h3 className="text-lg font-semibold">Authorize {institution.name}</h3>
      <p>
        You are connecting to {institution.name}. Please log in to authorize
        access to your account. By authorizing, you allow us to securely access
        your account details per Open Banking standards.
      </p>
      <div>
        <h4 className="font-semibold mb-2">
          We will access the following data:
        </h4>
        <ul className="list-disc list-inside">
          <li>Account Balance</li>
          <li>Transaction History</li>
          <li>Account Holder Information</li>
          <li>Investment Details</li>
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="consent"
          checked={consentGiven}
          onCheckedChange={(checked) => setConsentGiven(checked as boolean)}
        />
        <label
          htmlFor="consent"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to securely share my Financial data with FinAuth App and
          authorize access to my account.
        </label>
      </div>
      {error && (
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button onClick={handleAuthorize} className="w-full">
        Log in to {institution.name}
      </Button>
      <p className="text-sm text-muted-foreground">
        Your data will only be used for the purposes outlined in our Terms of
        Use and Privacy Policy. We comply with Open Banking and financial data
        protection regulations.
      </p>
    </div>
  );
}

export const ExclamationTriangleIcon = ({
  className,
}: {
  className?: string;
}) => (
  <div className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </svg>
  </div>
);
