"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { API } from "../../dummy";
import { MessageCircleQuestion } from "lucide-react";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

export default function APIAuthorization({ apis }: { apis: API[] }) {
  const [searchQuery, setSearchQuery] = useState("");

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
                  <div className="flex space-x-2">
                    <a href="#" className="link">
                      {api.name}
                    </a>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipContent>
                          <div className="bg-black text-white z-[100] relative px-2 py-1">
                            Budgetly can read all your personal account info
                            like email, name, and profile image, click to learn
                            more
                          </div>
                        </TooltipContent>
                        <TooltipTrigger asChild>
                          <MessageCircleQuestion className="h-4 w-4 text-blue-500 cursor-pointer" />
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </h3>
                <p className="text-xs text-zinc-500">
                  API Identifier:{" "}
                  <span className="font-mono bg-zinc-200 text-zinc-500 py-0.5 px-2">
                    {api.identifier}
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-2 opacity-50 cursor-not-allowed">
                <Switch
                  id={`api-auth-${api.id}`}
                  checked={api.authorized}
                  className="cursor-not-allowed"
                />
                <Label
                  className="w-24 cursor-not-allowed"
                  htmlFor={`api-auth-${api.id}`}
                >
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
