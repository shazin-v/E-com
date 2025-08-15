import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <SidebarProvider>
        {/* Fixed width sidebar area */}
        <div className="flex-shrink-0">
          <AppSidebar />
        </div>

        {/* Main content column */}
        <div className="flex flex-col flex-1 min-h-screen">
          <main className="flex-1">
            <SidebarTrigger />
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AdminLayout;
