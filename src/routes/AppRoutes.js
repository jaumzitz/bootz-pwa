import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register/Register";
import { ForgotMyPassword } from "../pages/ForgotMyPassword/ForgotMyPassword";
import { TrailDetail } from "../pages/Trail/TrailDetail"
import Onboarding from "../pages/Onboarding/Onboarding";
import { NewTrail } from "../pages/Trail/NewTrail";
import { Profile } from "../pages/Profile/Profile";
import Events from "../pages/Events/Events";
import { useAuth } from "../context/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { Explore } from "../pages/Explore/Explore";
import { ScrollToTop } from "../utils/ScrollToTop";

export function AppRoutes() {

    const { session, loading } = useAuth()

    return (
        <BrowserRouter>
                <ScrollToTop />
            <Routes>
                {/* Rotas públicas */}
                <Route path="/" element={
                    <PublicRoute>
                        <Onboarding />
                    </PublicRoute>} />

                <Route path="/welcome" element={
                    <PublicRoute>
                        <Onboarding />
                    </PublicRoute>
                } />

                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />

                <Route path="/register" element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                } />


                <Route path="/forgotMyPassword" element={
                    <PublicRoute>
                        <ForgotMyPassword />
                    </PublicRoute>
                } />

                {/* Rotas privadas */}

                <Route path="/home" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />

                <Route path="/trail" element={
                    <PrivateRoute>
                        <NewTrail />
                    </PrivateRoute>
                } />

                <Route path="/trail/:id" element={
                    <PrivateRoute>
                        <TrailDetail />
                    </PrivateRoute>
                } />

                <Route path="/profile" element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                } />

                <Route path="/profile/:username" element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                } />

                <Route path="/events" element={
                    <PrivateRoute>
                        <Events />
                    </PrivateRoute>
                } />

                <Route path="/explore" element={
                    <PrivateRoute>
                        <Explore />
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>

    );
}