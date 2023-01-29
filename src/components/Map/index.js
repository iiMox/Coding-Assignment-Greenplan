import { Map, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import "./Map.css";
import marker from "../../images/marker.png";

const MapWrapper = ({ coords }) => {
    console.log(coords[0]);
    return (
        <Map
            mapboxAccessToken='pk.eyJ1Ijoibmltb3UiLCJhIjoiY2xkZ3VhbWcwMDJteTNxbWt5OWF5bTAxZiJ9.Y7J-oF3Si03fJxW-H0zuVw'
            initialViewState={{
                longitude: 10.4515,
                latitude: 51.1657,
                zoom: 5,
            }}
            style={{
                width: "calc(100% - 40px)",
                height: "450px",
            }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
        >
            {coords.map((coord, index) => {
                return (
                    <Marker
                        longitude={coord[1]}
                        latitude={coord[0]}
                        key={index}
                    >
                        <img src={marker} alt='Marker' />
                    </Marker>
                );
            })}
        </Map>
    );
};

export default MapWrapper;
