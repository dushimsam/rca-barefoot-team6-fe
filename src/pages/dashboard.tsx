import { useQuery } from "react-query";
import AdminProfile from "../components/AdminProfile";
import ViewProfile from "../components/ViewProfile";
import DashboardLayout from "../layout/DashboardLayout";
import useProfileQuery from "../utils/useProfileQuery";

export default function Dashboard() {
  const { data } = useProfileQuery();
  return (
    <DashboardLayout>
      {data?.role === "ADMIN" ?
        <AdminProfile />
        : <ViewProfile />
      }
    </DashboardLayout>
  )
}
