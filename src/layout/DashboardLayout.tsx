import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/molecules/Sidebar'
import Cookies from 'js-cookie';
interface DashboardProps {
    children: React.ReactNode
}
function DashboardLayout(props: DashboardProps) {
    const navigate = useNavigate();
    React.useEffect(() => {
        const token = Cookies.get('token');
        if (!token) {
          navigate('/auth/login');
        }
      }, []);
    return (
        <div className="flex">
            <Sidebar ChildrenProps={props} />
        </div>
    )
}

export default DashboardLayout