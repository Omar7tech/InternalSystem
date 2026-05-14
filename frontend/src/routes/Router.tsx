import { Routes, Route } from "react-router";
import NotFound from "@/pages/errors/NotFound";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/Home";
import MainLayout from "@/layouts/MainLayout";
import DashboardHome from "@/pages/dashboard/DashboardHome";

export default function Router() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="dashboard" element={<MainLayout />}>
        <Route index element={<DashboardHome />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}