

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { MainProviders } from "@/providers/MainProviders"
import { Outlet } from "react-router"

function MainLayout() {
  return (
    <MainProviders>
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
    </MainProviders>
  )
}

export default MainLayout