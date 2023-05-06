import { UseQueryResult, useQuery } from "react-query";
import { UserInfo } from "../types/services/user.types";
import { authService } from "../services/auth.service";

export const useViewUsers = (setPageCount?: React.Dispatch<React.SetStateAction<number>>): UseQueryResult<UserInfo[]> => {
    const PAGE_LIMIT = 5
    return useQuery<UserInfo[]>(
        'viewUsers',
        async () => {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await authService.viewUsers(config);
            if (setPageCount) {
                setPageCount(Math.ceil(response.data.length / PAGE_LIMIT));
            }
            return response.data;
        },
    );
};
