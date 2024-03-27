import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import Menu from "./components/Menu"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Contact = () => {
    const geoData = ({lat: -25.4249668 , lng: -49.2748809})
    const position = [-25.4249668,-49.2748809]
    return(
        <>
        <Menu/>
        <div>
            <h1>Contato</h1>
            <div>
                <h2>Mapa</h2>
                <div>
                <MapContainer center={[geoData.lat, geoData.lng]} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "700px"}}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[geoData.lat, geoData.lng]}>
                    <Popup>
                    <a target="_blank" href={`https://www.google.com.br/maps/place/Sistema+Fiep+-+Unidade+Centro/@${geoData.lat},${geoData.lng},17z/data=!3m1!4b1!4m6!3m5!1s0x94dce41197a84179:0x142fc7abe5169a05!8m2!3d-25.4249717!4d-49.272306!16s%2Fg%2F1ptznr269?entry=ttu`}>Google maps</a><br></br>
                    <p>R. Paula Gomes, 270 - São Francisco, Curitiba - PR, 80510-070</p>
                    </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
        </div>
        </>
    )
}