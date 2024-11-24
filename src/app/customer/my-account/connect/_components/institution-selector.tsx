"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuthorizationSection } from "./authorization-section";
import Image from "next/image";

const popularInstitutions = [
  {
    id: "bofa",
    name: "Maybank",
    category: "Banks",
    image:
      "https://play-lh.googleusercontent.com/tKvJp1TadWbY9YjwbkUC-h97-sBjn0BEb1ztaGdonVZvqqzenMy_PGyc_qGsKIxCiZk",
  },
  {
    id: "allianz",
    name: "RHB Bank",
    category: "Bank",
    image: "https://ik.imagekit.io/kkbzr2uz4cp/stock/klse/rhbbank.png?tr=w-200",
  },
  {
    id: "fidelity",
    name: "CIMB Bank",
    category: "Bank",
    image:
      "https://www.e-spincorp.com/wp-content/uploads/2021/07/logo-cimb-bank-600x600-1-700x700_c.png",
  },
];

const allInstitutions = [
  ...popularInstitutions,
  { id: "chase", name: "UOB Bank", category: "Bank" },
  { id: "wellsfargo", name: "Bank Rakyat", category: "Bank" },
  { id: "statefarm", name: "Standard Chartered", category: "Bank" },
  { id: "vanguard", name: "IBKR", category: "Investment Firms" },
];

export function InstitutionSelector() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState<string | null>(
    null
  );

  const filteredInstitutions = allInstitutions.filter((inst) =>
    inst.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="max-w-1/3 mx-auto">
      <CardHeader>
        <CardTitle>Select Your Institution</CardTitle>
        <CardDescription>
          Choose from popular options or search for your institution
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="popular">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="all">All Institutions</TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {popularInstitutions.map((inst) => (
                <Button
                  key={inst.id}
                  variant="outline"
                  className="h-20 flex items-center justify-center space-x-3"
                  onClick={() => setSelectedInstitution(inst.id)}
                >
                  <div className="flex space-x-2">
                    <Image src={inst.image} width={40} height={40} alt="Logo" />
                    <div className="text-left">
                      <div className="font-semibold">{inst.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {inst.category}
                      </div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="all">
            <div className="space-y-4 mt-4">
              <Input
                type="search"
                placeholder="Search for your institution (e.g., ABC Bank, XYZ Insurance)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredInstitutions.map((inst) => (
                  <Button
                    key={inst.id}
                    variant="outline"
                    className="h-16 flex flex-col items-start justify-center"
                    onClick={() => setSelectedInstitution(inst.id)}
                  >
                    <span className="font-semibold">{inst.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {inst.category}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        {selectedInstitution && (
          <AuthorizationSection
            institution={
              allInstitutions.find((inst) => inst.id === selectedInstitution)!
            }
          />
        )}
      </CardFooter>
    </Card>
  );
}
