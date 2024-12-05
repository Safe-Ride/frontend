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
  const mapContainer = useRef(null); // Referência para o container do mapa.
  const map = useRef(null); // Referência para o objeto do mapa.
  const marker = useRef(null); // Referência para o marcador.
  const [lng, setLng] = useState(null); // Longitude atual.
  const [lat, setLat] = useState(null); // Latitude atual.
  const [zoom, setZoom] = useState(18); // Nível de zoom.
  const [dependenteId, setDependenteId] = useState(null); // ID do dependente.


  
  useEffect(() => {
    const fetchLocation = () => {
      api
        .get(`/tempo-real/${sessionStorage.getItem("DEPENDENTE_ID")}`)
        .then((res) => {
          const data = res.data;
          setLng(data.longitude);
          setLat(data.latitude);
          console.log("Atualizando coordenadas:", data.latitude, data.longitude);
        })
        .catch((err) => console.error("Erro ao obter coordenadas:", err));
    };
  
    // Chamada inicial
    fetchLocation();
  
    // Atualiza a cada 10 segundos
    const intervalId = setInterval(fetchLocation, 10000);
  
    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);


useEffect(() => {
  if (lng === null || lat === null) return; // Aguarda até que lng e lat sejam carregados

  const initializeMap = () => {
    if (!map.current) {
      // Criar o mapa apenas na primeira renderização
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: zoom,
      });
       // Criar um elemento HTML para o marcador
    const markerElement = document.createElement("div");
    markerElement.className = "custom-marker"; // Classe CSS definida acima
    markerElement.innerHTML = "📍"; // Opcional: conteúdo ou ícone no marcador

    // Criar o marcador com o elemento HTML
    marker.current = new mapboxgl.Marker({ element: markerElement })
      .setLngLat([lng, lat])
      .addTo(map.current);
    } else {
      map.current.setCenter([lng, lat]); // Atualizar centro do mapa

    }
  };

  initializeMap();

  const intervalId = setInterval(() => {
    initializeMap();
  }, 11000); // Atualiza o mapa a cada 11 segundos

  return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
}, [lng, lat]);

useEffect(() => {
  // Verificar se o marcador está inicializado
  if (!marker.current) return;

  // Atualizar o marcador a cada segundo
  const intervalId = setInterval(() => {
    marker.current.setLngLat([lng, lat]);
    console.log("Marcador atualizado para:", lng, lat);
  }, 1000); // Atualizar a cada 1 segundo

  // Limpar o intervalo ao desmontar o componente
  return () => clearInterval(intervalId);
}, [lng, lat]); // Dependências opcionais




  


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
