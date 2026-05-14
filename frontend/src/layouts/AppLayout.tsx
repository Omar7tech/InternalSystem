
import { Outlet } from "react-router"

function AppLayout() {
  return (
    <>
      <div>
        This is AppLayout
      </div>
      <Outlet />
    </>
  )
}

export default AppLayout