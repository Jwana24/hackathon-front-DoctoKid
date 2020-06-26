// import module
import React, { useState, useEffect } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import IconDentiste from '../../img/tooth.png';
import IconDocteur from '../../img/stethoscope.png';

// import css
import "../../../node_modules/leaflet/dist/leaflet.css";

const GeoLoc = ({ deseases }) => {
    const [lat, setLat] = useState(44.844117);
    const [long, setLong] = useState(-0.621556);
    const [zoom, setZoom] = useState(13);

    const [latGeneralist, setLatGeneralist] = useState(44.85031);
    const [longGeneralist, setLongGeneralist] = useState(0.5087);

    // icon initialization
    const generalistIcon = L.icon({
        iconUrl: IconDocteur,
        iconSize: [45, 45],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });

    const dentistIcon = L.icon({
        iconUrl: IconDentiste,
        iconSize: [40, 40],
        iconAnchor: [12, 40],
        popupAnchor: [0, 40],
    });

    const position = {
        lat: lat,
        lng: long,
        zoom: zoom,
    };

    const positionGeneralist0 = {
        lat:44.844117,
        lng:-0.621556
    }
    const positionGeneralist1 = {
        lat:44.848507,
        lng:-0.496622
    }
    const positionGeneralist2 = {
        lat:44.856792,
        lng:-0.567602
    };

    const specialists = [
        {
            id: 1,
            praticien: "Gerard Menvusa",
            specialite: "dentiste",
            ville: "Bordeaux",
            lat: 44.87031,
            lng: 0.5587,
            icon: dentistIcon,
        },
        {
            id: 2,
            praticien: "Gerard Ptore",
            specialite: "medecin traitant",
            ville: "Bordeaux",
            lat: 44.50000,
            lng: 0.5000,
            icon: generalistIcon
        },
        {
            id: 3,
            praticien: "Rex Petit",
            specialite: "medecin traitant",
            ville: "Bordeaux",
            lat: 44.80031,
            lng: 0.5507,
            icon: generalistIcon
        },
        {
            id: 3,
            praticien: "Dino Zore",
            specialite: "medecin traitant",
            ville: "Bordeaux",
            lat: 44.80031,
            lng: 0.5507,
            icon: generalistIcon
        },
    ];

    const searchSpe = specialists.map((specialist, index) => {
        if(deseases[0] && deseases[0].name === 'La varicelle infantile'){
            return specialist.specialite === "medecin traitant" && {lat:specialist.lat, lng:specialist.lng};
        }
        else if(deseases[0] && deseases[0].name == 'La carie dentaire'){
            return specialist.specialite === "dentiste" && {lat:specialist.lat, lng:specialist.lng};
        }
        else if(deseases[0] && deseases[0].name == 'La gastro entérite'){
            return specialist.specialite === "medecin traitant" && {lat:specialist.lat, lng:specialist.lng};
        }
        else if(deseases[0] && deseases[0].name == 'Les poux'){
            return specialist.specialite === "medecin traitant" && {lat:specialist.lat, lng:specialist.lng};
        }
        else{
            return null;
        }
    });

    return (
        <Map style={{ height: "50vh" }} center={position} zoom={position.zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positionGeneralist0} icon={generalistIcon}>
                <Popup>
                    Dr Gerard Ptore. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Marker position={positionGeneralist1} icon={generalistIcon}>
                <Popup>
                    Rex Petit. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Marker position={positionGeneralist2} icon={generalistIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    );
};

export default GeoLoc;
