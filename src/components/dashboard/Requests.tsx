import DashboardLayout from "../../layout/DashboardLayout";
import ManageRequests from "../../pages/requests";
import useProfileQuery from "../../utils/useProfileQuery";
import UserRequests from "./UserRequests";
export default function Requests() {
    const { data } = useProfileQuery();
    return (
        <DashboardLayout>
            {data?.role === "ADMIN" ?
                <ManageRequests />
                : <UserRequests />
            }

        </DashboardLayout>
    )
}
