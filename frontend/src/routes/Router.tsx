import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import NotFound from "@/pages/errors/NotFound";



export default function Router() {
    
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
           
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}