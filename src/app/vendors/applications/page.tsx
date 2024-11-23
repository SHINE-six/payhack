"use client";
import ApplicationTypeSelector from "@/app/vendors/applications/select-applicaion-type";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, Copy, Ellipsis, Plus, Server } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

const VendorApplicationsPage = () => {
  const searchParams = useSearchParams();
  const completed = searchParams.get("completed") === "true";
  const [showDialog, setShowDialog] = useState(false);
  const [creating, setCreating] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-2">Applications</h1>
        <Button
          onClick={() => {
            setShowDialog(true);
          }}
          Icon={Plus}
        >
          Create Application
        </Button>
      </div>
      <div className="text-zinc-500">
        Setup a mobile, web or IoT applications to use FinAuth for Open Finance
        API.
        <a className="link mx-2 inline-flex items-center space-x-1" href="#">
          <span>Show more</span>
          <ChevronRight className="inline" size={20} />
        </a>
      </div>
      <div className="mt-12">
        <div>
          <Link
            className="flex hover:bg-zinc-50 px-4 py-4 items-center"
            href="/vendors/applications/create"
          >
            <div className="bg-zinc-200/50 w-10 h-10 rounded-sm flex items-center justify-center mx-auto">
              <Server className="w-6 h-6 text-zinc-600" />
            </div>
            <div className="ml-2">
              <span className="link text-sm font-medium">BudgetPls</span>
              <div className="text-zinc-500 text-sm -mt-1">
                Regular Web Application
              </div>
            </div>
            <div className="flex-1" />
            <div className="text-xs text-zinc-500">
              Client ID:{" "}
              <span className="bg-zinc-200 px-1 py-0.5 font-mono">
                Kf8Z0F5LaFKyERnya1HurHSmSyqXYN0h
              </span>
              <Copy className="ml-2 inline-block text-black" size={14} />
            </div>
            <div className="flex-1" />
            <div>
              <Ellipsis />
            </div>
          </Link>
          <div className="border-b-2 border-b-zinc-200" />
        </div>
        {completed ? (
          <div>
            <Link
              className="flex hover:bg-zinc-50 px-4 py-4 items-center"
              href="/vendors/applications/create"
            >
              <div className="bg-zinc-200/50 w-10 h-10 rounded-sm flex items-center justify-center mx-auto">
                <Server className="w-6 h-6 text-zinc-600" />
              </div>
              <div className="ml-2">
                <span className="link text-sm font-medium">Budgetly</span>
                <div className="text-zinc-500 text-sm -mt-1">
                  Regular Web Application
                </div>
              </div>
              <div className="flex-1" />
              <div className="text-xs text-zinc-500">
                Client ID:{" "}
                <span className="bg-zinc-200 px-1 py-0.5 font-mono">
                  Y5aZ0F5LaFKyERnya1HurHSmSyqXYN0h
                </span>
                <Copy className="ml-2 inline-block text-black" size={14} />
              </div>
              <div className="flex-1" />
              <div>
                <Ellipsis />
              </div>
            </Link>
            <div className="border-b-2 border-b-zinc-200" />
          </div>
        ) : null}
      </div>

      <Dialog
        open={showDialog}
        onOpenChange={() => {
          setShowDialog(false);
        }}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Create Application</DialogTitle>
            <DialogDescription>
              <div className="mt-8">
                <Label>Name *</Label>
                <Input className="mt-1" defaultValue="My App" />
              </div>
              <div className="mt-8">
                <Label>The purpose of data</Label>
                <Input className="mt-1" defaultValue="" />
              </div>
              <div>
                <ApplicationTypeSelector />
              </div>
              <div className="flex justify-end mt-5 space-x-3">
                <Button loading={creating} variant="outline">
                  Cancel
                </Button>
                <Button
                  loading={creating}
                  onClick={() => {
                    setCreating(true);
                    setTimeout(() => {
                      setCreating(false);
                      setShowDialog(false);
                      router.push("/vendors/applications/create");
                    }, 2000);
                  }}
                >
                  Create
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <VendorApplicationsPage />
  </Suspense>
);

export default Page;
