"use client";

import { ChevronRight, Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";
import { applications } from "./dummy";
import Image from "next/image";

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
                className="hover:bg-zinc-50 px-4 py-4 cursor-pointer grid grid-cols-[2fr,1fr,1fr,1fr] items-center border-b-2 border-b-zinc-200"
                onClick={() =>
                  router.push(`/customer/app-access/${app.name.toLowerCase()}`)
                }
              >
                <div className="flex items-center">
                  <Image src={app.image} width={40} height={40} alt="Logo" />
                  <div className="ml-2">
                    <span className="link text-sm font-medium">{app.name}</span>
                  </div>
                </div>
                <div>
                  <span className="text-zinc-500">{app.latestRequest}</span>
                </div>
                <div>
                  <span className="text-zinc-500">{app.givenAccessOn}</span>
                </div>
                <div className="justify-self-end">
                  <Ellipsis />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAccessPage;
