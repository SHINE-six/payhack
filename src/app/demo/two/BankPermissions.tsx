"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon as InfoCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

interface Bank {
  id: string;
  name: string;
  logo: string;
  permissions: {
    transactions: boolean;
    webhooks: boolean;
    directDebits: boolean;
  };
}

export default function BankPermissions() {
  const [banks, setBanks] = useState<Bank[]>([
    {
      id: "1",
      name: "Maybank",
      logo: "https://play-lh.googleusercontent.com/tKvJp1TadWbY9YjwbkUC-h97-sBjn0BEb1ztaGdonVZvqqzenMy_PGyc_qGsKIxCiZk",
      permissions: {
        transactions: false,
        webhooks: false,
        directDebits: false,
      },
    },
    {
      id: "2",
      name: "RHB Bank",
      logo: "https://ik.imagekit.io/kkbzr2uz4cp/stock/klse/rhbbank.png?tr=w-200",
      permissions: {
        transactions: false,
        webhooks: false,
        directDebits: false,
      },
    },
    {
      id: "3",
      name: "CIMB Bank",
      logo: "https://www.e-spincorp.com/wp-content/uploads/2021/07/logo-cimb-bank-600x600-1-700x700_c.png",
      permissions: {
        transactions: false,
        webhooks: false,
        directDebits: false,
      },
    },
  ]);

  const handlePermissionChange = (
    bankId: string,
    permission: keyof Bank["permissions"]
  ) => {
    setBanks(
      banks.map((bank) => {
        if (bank.id === bankId) {
          return {
            ...bank,
            permissions: {
              ...bank.permissions,
              [permission]: !bank.permissions[permission],
            },
          };
        }
        return bank;
      })
    );
  };

  return (
    <div className="">
      <div className="space-y-4">
        {banks.map((bank) => (
          <Card key={bank.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    className="w-10 h-10 rounded"
                    width={40}
                    height={40}
                  />
                  <h2 className="font-semibold">{bank.name}</h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${bank.id}-transactions`}
                    checked={bank.permissions.transactions}
                    onCheckedChange={() =>
                      handlePermissionChange(bank.id, "transactions")
                    }
                  />
                  <label
                    htmlFor={`${bank.id}-transactions`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Get Transactions
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Access to view transaction history</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${bank.id}-webhooks`}
                    checked={bank.permissions.webhooks}
                    onCheckedChange={() =>
                      handlePermissionChange(bank.id, "webhooks")
                    }
                  />
                  <label
                    htmlFor={`${bank.id}-webhooks`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Webhook Subscriptions
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Receive real-time updates about account activity</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${bank.id}-direct-debits`}
                    checked={bank.permissions.directDebits}
                    onCheckedChange={() =>
                      handlePermissionChange(bank.id, "directDebits")
                    }
                  />
                  <label
                    htmlFor={`${bank.id}-direct-debits`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Get Direct Debits
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View scheduled direct debit payments</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
