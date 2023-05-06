// the global layout for this app

import { Outlet } from 'react-router-dom'
import Navbar from "../components/molecules/Navbar";

export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <div id="navbar" className="container sticky top-0 bg-white py-2">
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
}
