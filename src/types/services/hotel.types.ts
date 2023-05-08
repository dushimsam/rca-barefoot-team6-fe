export type CreateHotel = {
	name: string;
	email: string;
	address: string;
    province: string;
    district: string;
    sector: string;
    cell: string;
    village: string;
    website: string;
   [key: string]: any;
};

export type HotelCoordinates = {
    latitude: string|number;
    longitude: string|number ;
}
export type HotelInfo= {
    name: string ;
    email: string;
    address: string;
    province: string;
    district: string;
    sector: string;
    cell: string;
    village: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    website: string;
};

export type HotelInfos = {
	id: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
	createdAt: string;
	updatedAt: string;
} & CreateHotel & HotelCoordinates;