import { VendorSidebar } from "@/app/vendors/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopBar from "@/components/ui/topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <TopBar />
      <VendorSidebar />
      <main className="pt-24 pl-16 pr-16">{children}</main>
    </SidebarProvider>
  );
}
