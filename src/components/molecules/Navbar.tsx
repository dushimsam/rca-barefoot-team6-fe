import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <div>
                <Link to="/" className="font-extrabold text-[#1A0B3E] text-2xl">Barefoot</Link>
            </div>
            <ul className="flex justify-between space-x-6">
                <li>
                    <Link to="/" className="text-base">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-base">Why Barefoot</Link>
                </li>
                <li>
                    <Link to="/#contact" className="text-base">Contact Us</Link>
                </li>
            </ul>
            <div className="flex justify-between space-x-6  items-center">
                <Link to="/auth/register" className="text-base">Register</Link>
                <Link to="/auth/login" className="px-4 py-2 rounded-md bg-primary text-white">Login</Link>
            </div>
        </nav>
    )
}
