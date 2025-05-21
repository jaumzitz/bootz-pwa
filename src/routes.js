import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register/Register";
import UploadProfilePicture from "./pages/Register/UploadProfilePicture";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register/uploadProfilePicture" element={<UploadProfilePicture />} />

            </Routes>
        </BrowserRouter>
        
    );
}