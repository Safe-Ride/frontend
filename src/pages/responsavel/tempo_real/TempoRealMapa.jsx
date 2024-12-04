import React, { useRef, useState, useEffect } from "react";
import styles from "./TempoRealMapa.module.css";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import mapboxgl from "mapbox-gl";
import api from "../../../api";
import FotoPerfil from "../../../utils/functions/FotoPerfil";
import Imagem from "../../../utils/assets/perfil/usuario.png";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGlkZWtpMTkiLCJhIjoiY2x3cXcwZGx4MDZ0NDJrcTNtODlhZHYzNSJ9.XDo6sDF-eMr7z6_oFtyw8w";

const titulo = "tempo real";

const TempoReal = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [zoom, setZoom] = useState(18);
  const [dependenteId, setDependenteId] = useState(null);

  
  useEffect(() => {
    // Obtém o ID do dependente do sessionStorage
    const storedDependenteId = sessionStorage.getItem("DEPENDENTE_ID");
    setDependenteId(storedDependenteId); // Atualiza o estado com o ID

    if (storedDependenteId) {
      const fetchLocation = () => {
        api
          .get(`/tempo-real/${storedDependenteId}`)
          .then((res) => {
            const data = res.data;
            setLng(data.longitude);
            setLat(data.latitude);
            console.log(lat, lng)
          })
          .catch((err) => console.error("Erro ao obter coordenadas:", err));
      };

      // Chamada inicial
      fetchLocation();

      // Configura o intervalo de 10 segundos
      const intervalId = setInterval(fetchLocation, 10000);

      // Limpa o intervalo ao desmontar o componente
      return () => clearInterval(intervalId);
    }
  }, []);


  useEffect(() => {
    if (lng === null || lat === null) return; // Aguarde até que lng e lat sejam carregados

    if (!map.current) {
      // Criar o mapa na primeira renderização
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: zoom,
      });

      // Criar um marcador no centro do mapa
      marker.current = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map.current);
      marker.current.addTo(map.current)
    } else {
      // Atualizar o centro do mapa
      map.current.setCenter([lng, lat]);

      // Atualizar a posição do marcador
      marker.current.setLngLat([lng, lat]);
    }
  }, [lng, lat, zoom]);  // Atualizar quando lng ou lat mudarem
  const handleImageError = (e) => {
    e.target.src = Imagem;
  }

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <div className={styles["dependente"]}>
          <img src={FotoPerfil()} alt="foto perfil" onError={handleImageError}/>
          <span>Bruno Henrique</span>
        </div>
        <div ref={mapContainer} className={styles["map-container"]} />
      </div>
      <NavBarBot />
    </>
  );
};

export default TempoReal;
