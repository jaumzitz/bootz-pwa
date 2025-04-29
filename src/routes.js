import { Login } from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
        
    );
}