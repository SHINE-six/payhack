import { ToyBrick, LayoutDashboard, ScrollText, Landmark, Settings, LogOut } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar"

// Menu items
const items = [
    {
        title: "Dashboard",
        url: "./dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "App Access",
        url: "./app-access",
        icon: ToyBrick,
    },
    {
        title: "Request Log",
        url: "./request-log",
        icon: ScrollText,
    },
    {
        title: "My Account",
        url: "./my-account",
        icon: Landmark,
    },
]

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
    }
]
  
export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup className="mt-2" />
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
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
            <SidebarFooter>
                {footerItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <a href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarFooter>
        </Sidebar>
    )
}
