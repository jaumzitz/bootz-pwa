import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register/Register";
import { ForgotMyPassword } from "./pages/ForgotMyPassword/ForgotMyPassword";
import { Trail } from "./pages/Trail/Trail"
import Onboarding from "./pages/Onboarding/Onboarding";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Onboarding />} />
                <Route path="/welcome" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotMyPassword" element={<ForgotMyPassword />} />
                <Route path="/home" element={<Home />} />
                <Route path="/trail" element={<Trail />} />

            </Routes>
        </BrowserRouter>
        
    );
}