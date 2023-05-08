import { AxiosRequestConfig } from 'axios';
import { hotelService } from './../services/hotel.service';
import {useMutation, useQuery} from 'react-query';

class HotelStore {
	create() {
		return useMutation(hotelService.createHotel);
	}

	getHotel(id: string) {
		return useMutation(() => hotelService.getHotel(id));
	}

    async getAllHotels(config?: AxiosRequestConfig) {
        try {
            const response = await hotelService.getAllHotels();
            return response.data;
        } catch (error) {
            console.log("Error: ", error);
            throw new Error('Failed to get all hotels');
        }
    }
    
    getHotels() {
		return useMutation(hotelService.getHotels);
	}

	
}
export default new HotelStore();