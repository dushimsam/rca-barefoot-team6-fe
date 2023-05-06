import { useMutation, useQuery } from 'react-query';
import { requestService } from '../services/request.service';

class RequestStore {
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

    getRequestsByRoomId(roomId: number) {
        return useQuery(['requests/room/id', roomId], async () => requestService.getRequestsByRoomId(roomId), {
            enabled: Boolean(roomId)
        });
    }

    getRequestsByHotel(hotelId: number) {
        return useQuery(['requests/hotel/id', hotelId], async () => requestService.getRequestsByHotel(hotelId), {
            enabled: Boolean(hotelId)
        });
    }
}

export const requestStore = new RequestStore();