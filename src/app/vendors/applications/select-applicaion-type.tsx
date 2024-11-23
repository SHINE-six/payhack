"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, Server, Settings2 } from "lucide-react";

interface ApplicationType {
  id: string;
  title: string;
  description: string;
  examples: string;
  icon: React.ComponentType<{ className?: string }>;
}

const applicationTypes: ApplicationType[] = [
  {
    id: "native",
    title: "Native",
    description: "Mobile, desktop, CLI and smart device apps running natively.",
    examples: "e.g.: iOS, Electron, Apple TV apps",
    icon: Smartphone,
  },
  {
    id: "spa",
    title: "Single Page Web Applications",
    description: "A JavaScript front-end app that uses an API.",
    examples: "e.g.: Angular, React, Vue",
    icon: Monitor,
  },
  {
    id: "regular",
    title: "Regular Web Applications",
    description: "Traditional web app using redirects.",
    examples: "e.g.: Node.js Express, ASP.NET, Java, PHP",
    icon: Server,
  },
  {
    id: "m2m",
    title: "Machine to Machine Applications",
    description: "CLIs, daemons or services running on your backend.",
    examples: "e.g.: Shell script",
    icon: Settings2,
  },
];

interface ApplicationTypeSelectorProps {
  onSelect?: (id: string) => void;
  defaultSelected?: string;
}

export default function ApplicationTypeSelector({
  onSelect,
}: ApplicationTypeSelectorProps) {
  const [selected, setSelected] = useState("");

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelect?.(id);
  };

  return (
    <div className="">
      <h2 className="text-sm font-medium mb-3 mt-8 text-black">
        Choose an application type
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {applicationTypes.map((type) => (
          <Card
            key={type.id}
            className={cn(
              "cursor-pointer transition-all hover:shadow-md rounded-sm",
              selected === type.id
                ? "border-primary ring-[1px] ring-primary"
                : ""
            )}
            onClick={() => handleSelect(type.id)}
          >
            <CardContent className="p-6 text-center">
              <div className="mb-4 bg-zinc-200/50 w-12 h-12 rounded-sm flex items-center justify-center mx-auto">
                <type.icon className="w-6 h-6 text-zinc-600" />
              </div>
              <h3 className="font-semibold mb-2">{type.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {type.description}
              </p>
              <p className="text-sm text-muted-foreground">{type.examples}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
