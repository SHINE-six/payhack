"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Documentation from "@/app/vendors/applications/create/documentation";

interface Technology {
  name: string;
  logo: string;
  backgroundColor: string;
  hasUserIcon?: boolean;
}

const technologies: Technology[] = [
  {
    name: "ASP.NET Core",
    logo: "https://cdn.pellerex.com/public/ecosystem/web/content/api-set-up/asp-net-core-web-api-setup.png",
    backgroundColor: "#68217A",
  },
  {
    name: "Django",
    logo: "https://www.svgrepo.com/show/353657/django-icon.svg",
    backgroundColor: "#092E20",
  },
  {
    name: "Go",
    logo: "https://img.icons8.com/?size=512&id=44442&format=png",
    backgroundColor: "#00ADD8",
  },
  {
    name: "Java Spring Boot",
    logo: "https://lh3.googleusercontent.com/proxy/ybDG8XDUy5dYfaaU26-fPyG95PFbWSIEEz-0LJJ7nAga2VrIVV8Gv_m42GgBYlCwmH353t1q-w-NPueVkjUzGlVxC_mwVPSv3kc_ZMqRY-SbQQ_XCHwlZeFS6QSRV37COKsgfMMZ76Yna1r2EXs0",
    backgroundColor: "#f5f5f5",
  },
  {
    name: "Next.js",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    backgroundColor: "#f5f5f5",
  },
  {
    name: "Node.js (Express)",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
    backgroundColor: "#f5f5f5",
  },
  {
    name: "PHP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    backgroundColor: "#8993BE",
  },
  {
    name: "PHP (Laravel)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s",
    backgroundColor: "#FF2D20",
  },
];

export default function TechnologySelector() {
  const [searchQuery, setSearchQuery] = useState("");
  const [clicked, setClicked] = useState(false);

  const filteredTechnologies = technologies.filter((tech) =>
    tech.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (clicked) {
    return <Documentation />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        What technology are you using for your project?
      </h1>

      <div className="max-w-xl mx-auto mb-12 relative">
        <Input
          type="text"
          placeholder="Search by technology name"
          className="w-full pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {filteredTechnologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => {
              setClicked(true);
            }}
          >
            <div className="relative">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: tech.backgroundColor }}
              >
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              {tech.hasUserIcon && (
                <div className="absolute -bottom-1 -right-1 bg-gray-900 rounded-full p-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              )}
            </div>
            <span className="text-sm font-medium text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
