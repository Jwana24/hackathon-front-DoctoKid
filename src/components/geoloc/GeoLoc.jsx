// import module
import React, { useState, useEffect } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// import css
import "../../../node_modules/leaflet/dist/leaflet.css";

const GeoLoc = ({ deseases }) => {
    const [lat, setLat] = useState(44.87031);
    const [long, setLong] = useState(0.5587);
    const [zoom, setZoom] = useState(13);

    const position = {
        lat: lat,
        lng: long,
        zoom: zoom,
    };

    const specialists = [
        {
            id: 1,
            praticien: "Dino Zore",
            specialite: "dentiste",
            ville: "Bordeaux",
            lat: 44.87031,
            lng: 0.5587,
        },
        {
            id: 2,
            praticien: "Gerard Ptore",
            specialite: "medecin traitant",
            ville: "Bordeaux",
            lat: 44.50000,
            lng: 0.5000,
        },
        {
            id: 3,
            praticien: "Rex Petit",
            specialite: "medecin traitant",
            ville: "Bordeaux",
            lat: 44.80031,
            lng: 0.5507,
        },
    ];

    const searchSpe = specialists.map((specialist, index) => {
        if(deseases[0] && deseases[0].name === 'La varicelle infantile'){
            return specialist.specialite === "medecin traitant" && {lat:specialist.lat, lng:specialist.lng};
        }
        else if(deseases[0] && deseases[0].name == 'La carie dentaire'){
            return specialist.specialite === "dentiste" && [specialist.lat, specialist.lng];
        }
        else if(deseases[0] && deseases[0].name == 'La gastro entérite'){
            return specialist.specialite === "medecin traitant" && [specialist.lat, specialist.lng];
        }
        else if(deseases[0] && deseases[0].name == 'Les poux'){
            return specialist.specialite === "medecin traitant" && [specialist.lat, specialist.lng];
        }
        else{
            return null;
        }
    });

    console.log(searchSpe[1]); // {lat:44.5, lng:0.5} 
    console.log(searchSpe[2]);

    const myIcon = L.icon({
        iconUrl:
            "https://as2.ftcdn.net/jpg/02/15/63/83/500_F_215638318_SlbQIEYjWNrygcHacXL0qk9bjc13yMiH.jpg",
        iconSize: [128, 128],
        iconAnchor: [12, 40],
        popupAnchor: [0, 40],
    });

    return (
        <Map style={{ height: "50vh" }} center={position} zoom={position.zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={myIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    );
};

export default GeoLoc;
