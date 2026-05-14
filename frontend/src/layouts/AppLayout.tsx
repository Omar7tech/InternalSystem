
import { Outlet } from "react-router"

function AuthLayout() {
  return (
    <>
      <div>
        This is AuthLayout
      </div>
      <Outlet />
    </>
  )
}

export default AuthLayout