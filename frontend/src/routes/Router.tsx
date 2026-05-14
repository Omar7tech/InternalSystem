import { Routes, Route } from "react-router";
import NotFound from "@/pages/errors/NotFound";

import PublicRoutes from "./Public/PublicRoutes";
import AuthRoutes from "./Auth/AuthRoutes";



export default function Router() {

  return (
    <Routes>
      <PublicRoutes />
      <AuthRoutes />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}