"use client";

import APIAuthorization from "@/app/vendors/applications/create/api-authorization";
import AuthSettings from "@/app/vendors/applications/create/credentials";
import TechnologySelector from "@/app/vendors/applications/create/tech-selector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Server } from "lucide-react";
import Link from "next/link";

const VendorApplicationsPage = () => {
  return (
    <div>
      <div className="container pt-4 mb-2">
        <Link
          href="/vendors/applications?completed=true"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Applications
        </Link>
      </div>
      <div className="container pb-6">
        <div className="flex items-start gap-4 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-zinc-100">
            <Server className="w-6 h-6 text-zinc-600" />
          </div>
          <div className="">
            <h1 className="text-2xl font-medium">Budgetly</h1>
            <div className="flex items-center gap-4 text-sm -mt-1">
              <p className="text-zinc-500">Regular Web Application</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-500">Client ID: </span>
                <code className="bg-zinc-200 px-2 py-0.5 text-xs font-mono">
                  w0RPzj3e3Whff2VjTDQcFZB1CUnPSRmt
                </code>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="quickstart" className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="quickstart"
              className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
            >
              Quickstart
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
            >
              Settings
            </TabsTrigger>
            <TabsTrigger
              value="credentials"
              className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
            >
              Credentials
            </TabsTrigger>
            <TabsTrigger
              value="apis"
              className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
            >
              APIs
            </TabsTrigger>
            <TabsTrigger
              value="addons"
              className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
            >
              Addons
            </TabsTrigger>
            <TabsTrigger
              value="connections"
              className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
            >
              Connections
            </TabsTrigger>
            <TabsTrigger
              value="organizations"
              className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
            >
              Organizations
            </TabsTrigger>
          </TabsList>
          <TabsContent value="quickstart" className="p-4">
            <TechnologySelector />
          </TabsContent>
          <TabsContent value="credentials" className="p-4">
            <AuthSettings />
          </TabsContent>
          <TabsContent value="apis" className="p-4">
            <APIAuthorization />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorApplicationsPage;
