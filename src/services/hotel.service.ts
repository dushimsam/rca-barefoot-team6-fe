import { HotelInfo } from './../types/services/hotel.types';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import appAxios from '../plugins/axios';


class HotelService {
	
    public async getAllHotels(config?: AxiosRequestConfig): Promise<AxiosResponse<{hotels:HotelInfo[]}>> {
        return appAxios.get('/hotels', config);
    }
    
}
export const hotelService = new HotelService();