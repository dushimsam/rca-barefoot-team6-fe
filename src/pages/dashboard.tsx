import AdminProfile from "../components/AdminProfile";
import DashboardLayout from "../layout/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* <ProfileSetting /> */}
      <AdminProfile />
    </DashboardLayout>
  )
}
