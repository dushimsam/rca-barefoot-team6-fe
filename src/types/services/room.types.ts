export type CreateRoom = {
    name: string;
    description: string;
    maxAccomodate: number;
    floor: number;
    roomType: RoomTypes;
}

export type RoomInfo = {
    id: number;
    hotelId: number;
    createdAt: number;
    updatedAt: number;
    Hotel: {
        id: number;
        // add other fiels or import hotel types
    }
} & CreateRoom;

export enum RoomTypes{
    SINGLE = 'SINGLE',
    DOUBLE = 'DOUBLE',
    TRIPLE = 'TRIPLE',
}