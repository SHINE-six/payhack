"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import Image from "next/image";

type Institution = {
  id: string;
  name: string;
  lastSync: string;
  image: string;
  endsWith: string;
};

export function ConnectedInstitutions() {
  const [institutions, setInstitutions] = useState<Institution[]>([
    {
      id: "1",
      name: "Maybank",
      image:
        "https://play-lh.googleusercontent.com/tKvJp1TadWbY9YjwbkUC-h97-sBjn0BEb1ztaGdonVZvqqzenMy_PGyc_qGsKIxCiZk",
      lastSync: "2023-05-14 09:00 AM",
      endsWith: "3491",
    },
    {
      id: "2",
      name: "RHB Bank",
      image:
        "https://ik.imagekit.io/kkbzr2uz4cp/stock/klse/rhbbank.png?tr=w-200",
      lastSync: "2023-05-13 11:30 AM",
      endsWith: "1940",
    },
    {
      id: "3",
      name: "CIMB Bank",
      image:
        "https://www.e-spincorp.com/wp-content/uploads/2021/07/logo-cimb-bank-600x600-1-700x700_c.png",
      lastSync: "2023-05-12 03:45 PM",
      endsWith: "5103",
    },
  ]);

  const handleDisconnect = (id: string) => {
    setInstitutions(institutions.filter((inst) => inst.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connected Institutions</CardTitle>
        <CardDescription>
          Manage your connected financial accounts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {institutions.map((institution) => (
            <div
              key={institution.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <Image
                src={institution.image}
                width={40}
                height={40}
                alt="Image Logo"
              />
              <div>
                <div>
                  <h3 className="font-semibold">{institution.name}</h3>
                  <div className="text-sm text-zinc-500">
                    Account ending with {institution.endsWith}
                  </div>
                </div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Disconnect</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will disconnect your account from {institution.name}.
                      You can always reconnect later.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDisconnect(institution.id)}
                    >
                      Disconnect
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
          {institutions.length === 0 && (
            <p>
              No institutions connected. Connect your first institution from the
              home page.
            </p>
          )}
          <div className="flex justify-center">
            <Button variant="default">
              <Link href="/customer/my-account/connect">
                Connect New Institution
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
