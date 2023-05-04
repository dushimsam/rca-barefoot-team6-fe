import DashboardLayout from "../../layout/DashboardLayout";
import useProfileQuery from "../../utils/useProfileQuery";
import ManageRequests from "./ManageRequests";
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
