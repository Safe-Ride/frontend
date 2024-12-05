import React, { useEffect, useRef, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './mapbox_trajetos.css';
import api from "../../../api";

const MapboxExample = ({ trajetoId }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [directions, setDirections] = useState([]);
  const [stops, setStops] = useState([]);
  const [escolaCoords, setEscolaCoords] = useState(null);
  const [motoristaCoords, setMotoristaCoords] = useState(null);
  const [dadosCarregados, setDadosCarregados] = useState(false);
  const idMotorista = sessionStorage.getItem("ID_USUARIO");

  // Inicializar o mapa apenas uma vez
  useEffect(() => {
    if (!mapRef.current) {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWxpbiIsImEiOiJjbTA1cWljYW0wMWJvMmtxNzFtcDN1aXBlIn0.TeNRFYQW2OC9Wd4bJc_EyQ';
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [0, 0], // Centro inicial genérico
        zoom: 9,
      });
    }
  }, []); // Dispara apenas uma vez

  // Buscar dados da API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [stopsRes, escolaRes, motoristaRes] = await Promise.all([
          api.get(`/rotas/map-box/listar-enderecos/${trajetoId}`),
          api.get(`/rotas/map-box/listar-escola-endereco/${trajetoId}`),
          api.get(`/tempo-real/${idMotorista}`),
        ]);

        setStops(stopsRes.data);
        setEscolaCoords(escolaRes.data);
        setMotoristaCoords(motoristaRes.data);
        setDadosCarregados(true);
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
      }
    };

    fetchData();
  }, [trajetoId, idMotorista]); // Executa quando o trajetoId ou idMotorista mudar

  // Atualizar o mapa com marcadores e rota
  useEffect(() => {
    if (dadosCarregados && mapRef.current) {
      getLocation();
    }
  }, [dadosCarregados]);

  // Função para adicionar marcadores e rota
  const getLocation = useCallback(() => {
    if (!motoristaCoords || !escolaCoords || stops.length === 0) return;

    const map = mapRef.current;

    // Limpa a rota anterior, se existir
    if (map.getLayer('route')) {
      map.removeLayer('route');
      map.removeSource('route');
    }

    // Adiciona marcadores
    new mapboxgl.Marker({ color: 'blue' })
      .setLngLat([motoristaCoords.longitude, motoristaCoords.latitude])
      .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Endereço do Motorista'))
      .addTo(map);

    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([escolaCoords.longitude, escolaCoords.latitude])
      .setPopup(new mapboxgl.Popup({ offset: 25 }).setText('Escola'))
      .addTo(map);

    stops.forEach((stop, index) => {
      new mapboxgl.Marker({ color: 'green' })
        .setLngLat([stop.longitude, stop.latitude])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(`Parada ${index + 1}`))
        .addTo(map);
    });

    // Fetch rota
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${motoristaCoords.longitude},${motoristaCoords.latitude};${stops
        .map(stop => `${stop.longitude},${stop.latitude}`)
        .join(';')};${escolaCoords.longitude},${escolaCoords.latitude}?geometries=geojson&steps=true&access_token=${mapboxgl.accessToken}`
    )
      .then(response => response.json())
      .then(data => {
        if (!data.routes || data.routes.length === 0) {
          throw new Error('Nenhuma rota encontrada.');
        }

        const route = data.routes[0].geometry.coordinates;

        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: { type: 'LineString', coordinates: route },
            },
          },
          layout: { 'line-join': 'round', 'line-cap': 'round' },
          paint: { 'line-color': '#3887be', 'line-width': 5, 'line-opacity': 0.75 },
        });

        const bounds = route.reduce((b, coord) => b.extend(coord), new mapboxgl.LngLatBounds(route[0], route[0]));
        map.fitBounds(bounds, { padding: 20 });
      })
      .catch(error => {
        console.error('Erro ao buscar rota:', error);
      });
  }, [motoristaCoords, escolaCoords, stops]);

  return (
    <div className="map-wrapper">
      <div ref={mapContainerRef} className="map-container" />
    </div>
  );
};

export default MapboxExample;
