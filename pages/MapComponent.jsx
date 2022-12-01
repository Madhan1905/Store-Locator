import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const MapComponent = (props) => {
    const myIcon = new Icon({iconUrl: '/marker.png', iconSize: [25, 41], iconAnchor: [12, 41]})
    return (
        <MapContainer center={props.position} zoom={25} scrollWheelZoom={true} style={{height: '100%', width: "100%"}}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[12.962404214087867, 77.6491492108949]} icon={myIcon}>
                <Popup>
                    Besant Technologies
                </Popup>
            </Marker>
            <Marker position={[12.913892255384056, 77.61516638432306]} icon={myIcon}>
                <Popup>
                    Besant Technologies
                </Popup>
            </Marker>
            <Marker position={[12.955820828141741, 77.7148484806242]} icon={myIcon}>
                <Popup>
                    Besant Technologies
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapComponent;