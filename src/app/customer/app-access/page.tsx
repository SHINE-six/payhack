"use client";

import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, Copy, Ellipsis, Server } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { applications } from "./dummy";


const AppAccessPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-2">Applications</h1>
      </div>
      <div className="text-zinc-500">
        Application that hace access to your account
        <a className="link mx-2 inline-flex items-center space-x-1" href="#">
          <span>Show more</span>
          <ChevronRight className="inline" size={20} />
        </a>
      </div>
      <div className="mt-12">
        <div>
          <div className="px-4 py-4 grid grid-cols-[2fr,1fr,1fr,1fr] items-center">
            {/* Table Header */}
            <div className="text-zinc-500">Application</div>
            <div className="text-zinc-500">Latest Request</div>
            <div className="text-zinc-500">Given Access on</div>
            <div className="text-zinc-500 justify-self-end">Actions</div>
          </div>

          <div className="gap-y-2 grid grid-col">
            {applications.map((app) => (
              <div
                key={app.name}
                className="hover:bg-zinc-50 px-4 py-4 cursor-pointer grid grid-cols-[2fr,1fr,1fr,1fr] items-center"
                onClick={() => router.push(`/customer/app-access/${(app.name).toLowerCase()}`)}
              >
                <div className="flex">
                  <div className="bg-zinc-200/50 w-10 h-10 rounded-sm flex items-center justify-center">
                    <Server className="w-6 h-6 text-zinc-600" />
                  </div>
                  <div className="ml-2">
                    <span className="link text-sm font-medium">{app.name}</span>
                    <div className="text-zinc-500 text-sm -mt-1">
                      {app.type}
                    </div>
                  </div>
                </div>
                <div>Latest Request: <span className="text-zinc-500">{app.latestRequest}</span></div>
                <div>Given Access on: <span className="text-zinc-500">{app.givenAccessOn}</span></div>
                <div className="justify-self-end">
                  <Ellipsis />
                </div>
              </div>
            ))}
          </div>
          {/* <div
            className="hover:bg-zinc-50 px-4 py-4 cursor-pointer grid grid-cols-[2fr,1fr,1fr,1fr] items-center"
            onClick={() => router.push("/customer/app-access/create")}
          >
            <div className="flex">
              <div className="bg-zinc-200/50 w-10 h-10 rounded-sm flex items-center justify-center">
                <Server className="w-6 h-6 text-zinc-600" />
              </div>
              <div className="ml-2">
                <span className="link text-sm font-medium">Budgetly</span>
                <div className="text-zinc-500 text-sm -mt-1">
                  Regular Web Application
                </div>
              </div>
            </div>
            
            <div>Latest Request: <span className="text-zinc-500">2 minutes ago</span></div>
            <div>Given Access on: <span className="text-zinc-500">12/12/2021</span></div>
            
            <div className="justify-self-end">
              <Ellipsis />
            </div>
          </div> */}
          <div className="border-b-2 border-b-zinc-200" />
        </div>
      </div>
    </div>
  );
};

export default AppAccessPage;
