import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import { authService } from '../services/auth.service';


function useAuthorizedQuery(queryKey: string, queryFunction: Function) {
    const token = Cookies.get('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return useQuery(queryKey, async () => {
        const response = await queryFunction(config);
        return response.data;
    });
}

function useProfileQuery() {
    return useAuthorizedQuery('viewProfile', authService.viewProfile);
}

export default useProfileQuery;