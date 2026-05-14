
import { Route } from "react-router";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/Home";

function PublicRoutes() {
  return (
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
}

export default PublicRoutes