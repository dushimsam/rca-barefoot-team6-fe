import type { AxiosResponse } from 'axios';
import appAxios from '../plugins/axios';
import { CreateRequest, RequestInfo, UpdateRequest } from '../types/services/request.types';

class RequestService {
    public async getAllRequests(): Promise<AxiosResponse<{ data: RequestInfo[] }>> {
        return appAxios.get('/requests');
    }

    public async createRequest(requestData: CreateRequest): Promise<AxiosResponse<RequestInfo>> {
        return appAxios.post('/requests', requestData);
    }

    public async updateRequest(requestData: UpdateRequest): Promise<AxiosResponse<RequestInfo>> {
        return appAxios.patch(`/requests/${requestData.id}`, requestData);
    }

    public async deleteRequest(requestId: number): Promise<AxiosResponse<RequestInfo>> {
        return appAxios.delete(`/requests/${requestId}`);
    }

    public async approveRequest(id: number): Promise<AxiosResponse<RequestInfo>> {
        return appAxios.patch(`/requests/approve/${id}`);
    }

    public async rejectRequest(id: number): Promise<AxiosResponse<RequestInfo>> {
        return appAxios.patch(`/requests/reject/${id}`);
    }

    public async cancelRequest(id: number): Promise<AxiosResponse<RequestInfo>> {
        return appAxios.patch(`/requests/cancel/${id}`);
    }

    public async getRequestsByUserId(userId: number): Promise<AxiosResponse<{ data: RequestInfo[] }>> {
        return appAxios.get(`/requests/user/${userId}`);
    }

    public async getRequestsByRoomId(roomId: number): Promise<AxiosResponse<RequestInfo[]>> {
        return appAxios.get(`/requests/room/${roomId}`);
    }

    public async getRequestsByHotel(hotelId: number): Promise<AxiosResponse<RequestInfo[]>> {
        return appAxios.get(`/requests/hotel/${hotelId}`);
    }
}

export const requestService = new RequestService();