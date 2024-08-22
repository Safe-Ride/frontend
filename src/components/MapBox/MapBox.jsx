import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxExample = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWxpbiIsImEiOiJjbTA1cWljYW0wMWJvMmtxNzFtcDN1aXBlIn0.TeNRFYQW2OC9Wd4bJc_EyQ';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Adicione o estilo do mapa
      center: [-23.5667456, -46.661632], // Posição inicial [lng, lat]
      zoom: 9 // Zoom inicial
    });


    getLocation();

    //const intervalId = setInterval(getLocation, 10000); // Corrigido: agora getLocation é uma referência

    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); 
      }
      clearInterval(intervalId); // Limpa o intervalo quando o componente desmonta
    };
  }, []); 

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const coords = {
          lng: (Math.random()*180).toFixed(3),
          lat: (Math.random()*90).toFixed(3)
        };
        console.log()
        setUserLocation(coords);

        mapRef.current.setCenter([coords.lng, coords.lat]);
        mapRef.current.setZoom(14); 
        new mapboxgl.Marker().setLngLat([coords.lng, coords.lat]).addTo(mapRef.current)
      });
    } else {
      alert("Seu navegador não suporta a API de Geolocalização.");
    }
  };
  return (
    <div
      style={{ height: '100vh', width: '100%' }} // Certifique-se de que o contêiner tenha dimensões definidas
      ref={mapContainerRef}
      className="map-container"
    >
       
    </div>
  );
};

export default MapboxExample;

