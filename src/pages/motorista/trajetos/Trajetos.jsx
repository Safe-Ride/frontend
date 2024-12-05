import React, { useEffect, useState } from "react";
import api from "../../../api";
import NavBarBot from "../../../components/NavBar/NavBarBot";
import NavBarTop from "../../../components/NavBar/NavBarTop";
import TrajetosAtivos from "../../../components/motorista/Trajetos/TrajetosAtivos";
import TrajetosGerais from "../../../components/motorista/Trajetos/TrajetosGerais";
import styles from "./Trajetos.module.css";
import MapboxExample from "../../../components/motorista/Trajetos/mapbox_trajetos";  

const Trajetos = () => {
  const titulo = "trajetos";
  const [dados, setDados] = useState({});
  const [trajetoAtivo, setTrajetoAtivo] = useState(false);
  const [statusTrajeto, setStatusTrajeto] = useState(false);
  const [idTrajetoMapBox, setIdTrajetoMapBox] = useState();
  const id = sessionStorage.getItem("ID_USUARIO");
  const token = sessionStorage.getItem("token");

  // Função para atualizar a geolocalização
  const updateGeolocation = (callback) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          callback(latitude, longitude);
        },
        (error) => {
          console.error("Erro ao obter localização:", error.message);
        }
      );
    } else {
      console.error("Geolocalização não suportada neste navegador.");
    }
  };

  // Função para enviar as coordenadas para a API
  const sendRealTimeCoordinates = (latitude, longitude) => {
    if (trajetoAtivo?.id && latitude && longitude) {
      const coords = { latitude, longitude };

      api
        .post(`/tempo-real/${id}`, coords, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("Localização enviada:", res.data);
          setDados(res.data);
          console.log(res.data)

          const trajetoAtivoEncontrado = res.data.find(
            (trajeto) => trajeto.ativo
          );
          setTrajetoAtivo(trajetoAtivoEncontrado || null);
          setIdTrajetoMapBox(trajetoAtivoEncontrado?.id);
        })
        .catch((err) => {
          console.error("Erro ao enviar localização:", err);
        });
    }
  };

  // Busca os trajetos e verifica o trajeto ativo
  useEffect(() => {
    setStatusTrajeto(false);
    api
      .get(`/trajetos/motorista/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDados(res.data);

        const trajetoAtivoEncontrado = res.data.find((trajeto) => trajeto.ativo);
        setTrajetoAtivo(trajetoAtivoEncontrado || null);
      })
      .catch((err) => {
        console.error("Erro ao buscar trajetos:", err);
      });
  }, [id, token, statusTrajeto]);

  // Atualiza a localização em intervalos regulares se o trajeto estiver ativo
  useEffect(() => {
    let interval;
    if (trajetoAtivo) {
      updateGeolocation((latitude, longitude) => {
        sendRealTimeCoordinates(latitude, longitude); // Envia localização imediatamente
      });

      interval = setInterval(() => {
        updateGeolocation((latitude, longitude) => {
          sendRealTimeCoordinates(latitude, longitude);
        });
      }, 15000);
    }

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar ou desativar o trajeto
  }, [trajetoAtivo]);

  const handleAtivoChange = (trajetoId) => {
    if (trajetoAtivo && trajetoAtivo.id === trajetoId) {
      setTrajetoAtivo(null);
    } else {
      const novoTrajetoAtivo = dados.find((trajeto) => trajeto.id === trajetoId);
      if (novoTrajetoAtivo) {
        setTrajetoAtivo(novoTrajetoAtivo);
      }
    }
  };

  return (
    <>
      <NavBarTop titulo={titulo} />
      <div className={styles["container"]}>
        <div className={styles["trajeto"]}></div>
        <TrajetosAtivos trajetoAtivo={trajetoAtivo} statusTrajeto={setStatusTrajeto} />
        {trajetoAtivo && <MapboxExample trajetoId={idTrajetoMapBox}/>}
        <TrajetosGerais
         trajetos={dados}
         onAtivoChange={handleAtivoChange}
         trajetoAtivo={trajetoAtivo}
          />
      </div>
      <NavBarBot />
    </>
  );
};

export default Trajetos;
