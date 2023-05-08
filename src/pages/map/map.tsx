import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./style.css"
import "leaflet/dist/leaflet.css"
import { hotelService } from "../../services/hotel.service";
import { useQuery } from "react-query";
import Cookies from 'js-cookie';
import DashboardLayout from "../../layout/DashboardLayout";

export default function Map() {

  const { data } = useQuery('getAllHotels', async () => {

    console.log(data?.hotels)
    const token = Cookies.get('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await hotelService.getAllHotels(config);
    console.log(response.data);
    return response.data;
  });


  const center = {
    lat: -1.9437057,
    lng: 29.8805778
  }



  return (
    <DashboardLayout>
      <MapContainer center={center} zoom={9} >
        <TileLayer
          url="https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=P9a2DSc1jdhsZIwOEyNe"
          attribution={"\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e"}
        />
        {data && data.hotels.map((hotel: any) => (
          <Marker key={hotel.id} position={[hotel.coordinates.latitude, hotel.coordinates.longitude]}>
            <Popup>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{hotel.name}</h1>
                <p className="text-sm">{hotel.description}</p>
                <p className="text-sm">{hotel.address}</p>
                <p className="text-sm">{hotel.phone}</p>
                <p className="text-sm">{hotel.email}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </DashboardLayout>

  )
}

