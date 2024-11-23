"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface API {
  id: string;
  name: string;
  identifier: string;
  authorized: boolean;
}

export default function APIAuthorization() {
  const [searchQuery, setSearchQuery] = useState("");
  const [apis, setApis] = useState<API[]>([
    {
      id: "1",
      name: "Get Accounts",
      identifier: "/accounts",
      authorized: false,
    },
    {
      id: "2",
      name: "Get Account Details",
      identifier: "/accounts/{AccountId}",
      authorized: false,
    },
    {
      id: "3",
      name: "Get Balances",
      identifier: "/accounts/{AccountId}/balances",
      authorized: false,
    },
    {
      id: "4",
      name: "Get Transactions",
      identifier: "/accounts/{AccountId}/transactions",
      authorized: false,
    },
    {
      id: "5",
      name: "Get Beneficiaries",
      identifier: "/accounts/{AccountId}/beneficiaries",
      authorized: false,
    },
    {
      id: "6",
      name: "Get Standing Orders",
      identifier: "/accounts/{AccountId}/standing-orders",
      authorized: false,
    },
    {
      id: "7",
      name: "Get Direct Debits",
      identifier: "/accounts/{AccountId}/direct-debits",
      authorized: false,
    },
    {
      id: "8",
      name: "Get Products",
      identifier: "/accounts/{AccountId}/product",
      authorized: false,
    },
    {
      id: "9",
      name: "Create Account Request",
      identifier: "/account-requests",
      authorized: false,
    },
    {
      id: "10",
      name: "Webhook Subscriptions",
      identifier: "/webhooks",
      authorized: false,
    },
    {
      id: "11",
      name: "Payment Initiation",
      identifier: "/payments",
      authorized: false,
    },
    {
      id: "12",
      name: "Get Payment Details",
      identifier: "/payments/{PaymentId}",
      authorized: false,
    },
    {
      id: "13",
      name: "Funds Confirmation",
      identifier: "/funds-confirmations",
      authorized: false,
    },
    {
      id: "14",
      name: "Scheduled Payments",
      identifier: "/accounts/{AccountId}/scheduled-payments",
      authorized: false,
    },
    {
      id: "15",
      name: "International Payments",
      identifier: "/international-payments",
      authorized: false,
    },
    {
      id: "16",
      name: "Get International Payment Status",
      identifier: "/international-payments/{PaymentId}",
      authorized: false,
    },
    {
      id: "17",
      name: "Create Consent for Payment",
      identifier: "/payment-consents",
      authorized: false,
    },
    {
      id: "18",
      name: "Get Consent Status",
      identifier: "/payment-consents/{ConsentId}",
      authorized: false,
    },
    {
      id: "19",
      name: "Account Access Revocation",
      identifier: "/account-requests/{AccountRequestId}",
      authorized: false,
    },
    {
      id: "20",
      name: "Bulk Account Balances",
      identifier: "/balances",
      authorized: false,
    },
  ]);

  const filteredApis = apis.filter(
    (api) =>
      api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      api.identifier.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      <div className="space-y-4">
        <p className="text-zinc-500 text-sm">
          Here is a list of your APIs. You can authorize this application to
          request access tokens for these APIs by executing a client credentials
          exchange.
        </p>
        <Input
          type="text"
          placeholder="Filter by API Name or Identifier"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-full"
        />
      </div>

      <div className="space-y-4">
        {filteredApis.map((api) => (
          <div className="border-b-2 border-zinc-100 pb-4" key={api.id}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
              <div className="space-y-1">
                <h3 className="font-medium">
                  <a href="#" className="link">
                    {api.name}
                  </a>
                </h3>
                <p className="text-xs text-zinc-500">
                  API Identifier:{" "}
                  <span className="font-mono bg-zinc-200 text-zinc-500 py-0.5 px-2">
                    {api.identifier}
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id={`api-auth-${api.id}`}
                  checked={api.authorized}
                  onCheckedChange={(checked) => {
                    // Handle authorization toggle
                    setApis((prev) =>
                      prev.map((item) =>
                        item.id === api.id
                          ? { ...item, authorized: checked }
                          : item
                      )
                    );
                  }}
                />
                <Label className="w-24" htmlFor={`api-auth-${api.id}`}>
                  {api.authorized ? "Requesting" : "Not requesting"}
                </Label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
