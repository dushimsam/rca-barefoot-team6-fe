import DashboardLayout from '../../layout/DashboardLayout';
import { useQuery } from "react-query";
import { authService } from "../../services/auth.service";
import AdminProfile from '../../components/AdminProfile';
import ViewProfile from '../../components/ViewProfile';
const Settings = () => {
	const { data } = useQuery('viewProfile', async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await authService.viewProfile(config);
    return response.data;
  });
	return (

		<DashboardLayout>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 mt-10 ml-5">Account Settings</h2>
      {data?.role === "ADMIN" ?
        <AdminProfile />
        : <ViewProfile />
      }
		</DashboardLayout>
	);
};

export default Settings;
