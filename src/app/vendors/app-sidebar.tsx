import {
  Calendar,
  LayoutDashboard,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/vendors/",
    icon: LayoutDashboard,
  },
  {
    title: "Activity",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Applications",
    url: "/vendors/applications",
    icon: Calendar,
  },
  {
    title: "User Management",
    url: "#",
    icon: Search,
  },
  {
    title: "Monitoring",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function VendorSidebar() {
  return (
    <Sidebar className="top-[56px] bottom-0">
      <SidebarContent className="">
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
}
