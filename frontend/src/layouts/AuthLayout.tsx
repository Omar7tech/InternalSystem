
import { MainProviders } from "@/providers/MainProviders"
import { Outlet } from "react-router"

function AuthLayout() {
  return (
    <MainProviders>
      <div>
        This is AuthLayout
      </div>
      <Outlet />
    </MainProviders>
  )
}

export default AuthLayout