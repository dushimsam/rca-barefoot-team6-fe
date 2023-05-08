import type {Axios, AxiosResponse, AxiosRequestConfig} from 'axios';
import appAxios from '../plugins/axios';
import type {CreateHotel, HotelInfo, HotelInfos} from '../types/services/hotel.types';


class HotelService {

	public async createHotel(newHotel: CreateHotel): Promise<AxiosResponse<HotelInfos>> {
		return appAxios.post('/hotels', newHotel);
	}

    public async getHotels(): Promise<AxiosResponse<HotelInfos>> {
		return appAxios.get('/hotels');
	}
    public async getAllHotels(config?: AxiosRequestConfig): Promise<AxiosResponse<{hotels:HotelInfo[]}>> {
        return appAxios.get('/hotels', config);
    }
    
    
    public async getHotel(id: string): Promise<AxiosResponse<HotelInfos>> {
		return appAxios.get(`/hotels/${id}`);
	}

	public async updateHotel(id: string, updatedHotel: CreateHotel): Promise<AxiosResponse<HotelInfos>> {
		return appAxios.put(`/hotels/${id}`, updatedHotel);
	}

	public async deleteHotel(id: string): Promise<AxiosResponse<HotelInfos>> {
		return appAxios.delete(`/hotels/${id}`);
	}
	

}
export const hotelService = new HotelService();