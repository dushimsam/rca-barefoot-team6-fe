import {useMutation, useQuery} from 'react-query';
import {requestService} from '../services/request.service';

class RequestStore {
    getAllRequests() {
        return useQuery('requests', requestService.getAllRequests);
    }

    createRequest() {
        return useMutation(requestService.createRequest);
    }

    updateRequest() {
        return useMutation(requestService.updateRequest);
    }

    deleteRequest() {
        return useMutation(requestService.deleteRequest);
    }

    approveRequest() {
        return useMutation(requestService.approveRequest);
    }

    rejectRequest() {
        return useMutation(requestService.rejectRequest);
    }

    cancelRequest() {
        return useMutation(requestService.cancelRequest);
    }

    getRequestsByUserId(userId: number) {
        return useQuery(['requests/user/id', userId], async ()=> requestService.getRequestsByUserId(userId),{
            enabled: Boolean(userId)
        });
    }

    getRequestsByRoomId(roomId: number) {
        return useQuery(['requests/room/id', roomId], async()=>requestService.getRequestsByRoomId(roomId),{
            enabled: Boolean(roomId)
        });
    }

    getRequestsByHotel(hotelId: number) {
        return useQuery(['requests/hotel/id', hotelId], async()=> requestService.getRequestsByHotel(hotelId),{
            enabled: Boolean(hotelId)
        });
    }
}

export const requestStore = new RequestStore();