import React, { useRef, useState, useEffect } from "react";
import styles from "./TempoReal.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import mapboxgl from 'mapbox-gl';
import FotoPerfil from "../../../utils/functions/FotoPerfil";

mapboxgl.accessToken = 'pk.eyJ1IjoiaGlkZWtpMTkiLCJhIjoiY2x3cXcwZGx4MDZ0NDJrcTNtODlhZHYzNSJ9.XDo6sDF-eMr7z6_oFtyw8w';

const titulo = "tempo real";

const TempoReal = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-46.661759);
  const [lat, setLat] = useState(-23.557987);
  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles['container']}>
        <div className={styles['dependente']}>
          <img src="" alt="foto perfil" />
          <span>Bruno Henrique</span>
        </div>
        <div ref={mapContainer} className={styles['map-container']} />
      </div>
      <NavBarBot />
    </>
  );
};

export default TempoReal;
