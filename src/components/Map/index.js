import { Map, Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import "./Map.css";
import marker from "../../images/marker.png";

import mapboxgl from "mapbox-gl";
/* eslint import/no-webpack-loader-syntax: off */
mapboxgl.workerClass =
    require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MapWrapper = ({ coords }) => {
    return (
        <Map
            mapboxAccessToken='pk.eyJ1Ijoibmltb3UiLCJhIjoiY2xkZ3VhbWcwMDJteTNxbWt5OWF5bTAxZiJ9.Y7J-oF3Si03fJxW-H0zuVw'
            initialViewState={{
                longitude: 10.4515,
                latitude: 51.1657,
                zoom: 5,
            }}
            style={{
                width: `${
                    window.innerWidth <= 991.98 ? "90%" : "calc(100% - 40px)"
                }`,
                margin: "0 auto",
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
