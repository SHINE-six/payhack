import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/customer/_components/app-sidebar";
import TopBar from "@/components/ui/topbar";

export default function CutomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <TopBar />
      <AppSidebar />
      <main className="mt-[56px]">
        <SidebarTrigger />
        <div className="px-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
