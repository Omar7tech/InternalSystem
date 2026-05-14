import MainLayout from "@/layouts/MainLayout"
import DashboardHome from "@/pages/dashboard/DashboardHome"
import { Route } from "react-router"

function AuthRoutes() {
  return (
    <Route path="dashboard" element={<MainLayout />}>
      <Route index element={<DashboardHome />} />
    </Route>
  )
}

export default AuthRoutes