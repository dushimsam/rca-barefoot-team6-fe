import { RoomInfo } from "./room.types";
import { UserInfo } from "./user.types";

export type CreateRequest = {
    roomId: number;
    checkIn: string;
    checkOut: string;
    status?: RequestStatuses;
}

export type UpdateRequest = {
    id: number;
} & CreateRequest;

export enum RequestStatuses {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    CANCELLED = 'CANCELLED'
}

export type RequestInfo = {
    id: number;
    createdAt: string;
    userId: number;
    length?: number;
    updatedAt: string;
    User: UserInfo;
    Room: RoomInfo;
} & CreateRequest;