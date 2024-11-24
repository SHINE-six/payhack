"use client";

import RequestLogPage from "./_components/request-log";
import APIAuthorization from "./_components/api-authorization";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { applications } from "../dummy";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const VendorApplicationsPage = () => {
  const router = useRouter();
  const { app_name } = useParams() as { app_name: string };
  const [showDialog, setShowDialog] = useState(false);
  const [creating, setCreating] = useState(false);

  const title_case_app_name =
    app_name.charAt(0).toUpperCase() + app_name.slice(1);
  const application = applications.find(
    (app) => app.name === title_case_app_name
  );

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
            <Image src={application.image} width={40} height={40} alt="Logo" />
            <div className="">
              <h1 className="text-2xl font-medium">{title_case_app_name}</h1>
              <div className="flex items-center gap-4 text-sm -mt-1">
                <p className="text-zinc-500">{application.type}</p>
              </div>
            </div>
          </div>
          <div>
            <Button
              className="w-32"
              variant={"destructive"}
              onClick={() => {
                setShowDialog(true);
              }}
            >
              Disconnect
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="apis" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="apis"
            className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
          >
            Permissions
          </TabsTrigger>
          <TabsTrigger
            value="Request Log"
            className="rounded-none border-b-2 border-transparent px-4 py-3 font-medium data-[state=active]:border-primary"
          >
            Request Log
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
          <RequestLogPage requestLogs={application.detail["Request Log"]} />
        </TabsContent>
        <TabsContent value="apis" className="p-4">
          <APIAuthorization apis={application.detail.APIs} />
        </TabsContent>
      </Tabs>
      <Dialog
        open={showDialog}
        onOpenChange={() => {
          setShowDialog(false);
        }}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Confirm to Disconnect?</DialogTitle>
            <DialogDescription>
              <div className="mt-8">
                Are you sure you want to disconnect <b>Budgetly</b>? This will
                remove all the permissions and data access from this
                application.{" "}
                <b>This may affect the functionality of the application.</b>
              </div>
              <div className="flex justify-end mt-5 space-x-3">
                <Button loading={creating} variant="outline">
                  Cancel
                </Button>
                <Button
                  loading={creating}
                  variant={"destructive"}
                  onClick={() => {
                    setCreating(true);
                    setTimeout(() => {
                      setCreating(false);
                      setShowDialog(false);
                      handleDisconnect();
                    }, 2000);
                  }}
                >
                  Disconnect
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VendorApplicationsPage;
