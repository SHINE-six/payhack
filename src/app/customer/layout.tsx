import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/customer/_components/app-sidebar";
import TopBar from "@/components/ui/topbar";

export default function CutomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <TopBar isCustomer />
      <AppSidebar />
      <main className="w-full pt-24 pl-16 pr-16">{children}</main>
    </SidebarProvider>
  );
}
