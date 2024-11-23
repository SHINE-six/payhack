import {
  ToyBrick,
  LayoutDashboard,
  ScrollText,
  Landmark,
  Settings,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/customer/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Apps",
    url: "/customer/app-access",
    icon: ToyBrick,
  },
  {
    title: "Access Logs",
    url: "/customer/request-log",
    icon: ScrollText,
  },
  {
    title: "My Accounts",
    url: "/customer/my-account",
    icon: Landmark,
  },
];

// Footer items
const footerItems = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="pt-4">
      <SidebarContent>
        <SidebarGroup className="mt-4" />
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        {footerItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarFooter>
    </Sidebar>
  );
}
