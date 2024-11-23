"use client";

import RequestLogPage from "./_components/request-log";
import APIAuthorization from "./_components/api-authorization";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Server } from "lucide-react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { applications } from "../dummy";
import { Button } from "@/components/ui/button";

const VendorApplicationsPage = () => {
  const router = useRouter();
  const { app_name } = useParams() as { app_name: string };
  const title_case_app_name = app_name.charAt(0).toUpperCase() + app_name.slice(1);
  const application = applications.find((app) => app.name === title_case_app_name);

  if (!app_name || !application) {
    return null;
  }

  const handleDisconnect = () => {
    // Remove application from the list
    applications.splice(applications.indexOf(application), 1);
    // Redirect to the app access page
    router.push("/customer/app-access");
  };

  return (
    <div>
      <div className="container pt-4 mb-2">
        <div
          onClick={() => router.back()}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground cursor-pointer"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </div>
      </div>
      <div className="container pb-6">
        <div className="flex justify-between">
          <div className="flex items-start gap-4 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-zinc-100">
              <Server className="w-6 h-6 text-zinc-600" />
            </div>
            <div className="">
              <h1 className="text-2xl font-medium">{title_case_app_name}</h1>
              <div className="flex items-center gap-4 text-sm -mt-1">
                <p className="text-zinc-500">{application.type}</p>
              </div>
            </div>
          </div>
          <div>
            <Button className="w-32" variant={"destructive"} onClick={handleDisconnect}>Disconnect</Button>
          </div>
        </div>
      </div>

        <Tabs defaultValue="Request Log" className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="Request Log"
              className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
            >
              Request Log
            </TabsTrigger>
            <TabsTrigger
              value="apis"
              className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
            >
              APIs
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
          <TabsContent value="Request Log" className="p-4">
            <RequestLogPage requestLogs={application.detail['Request Log']}/>
          </TabsContent>
          <TabsContent value="apis" className="p-4">
            <APIAuthorization apis={application.detail.APIs}/>
          </TabsContent>
        </Tabs>
    </div>
  );
};

export default VendorApplicationsPage;
