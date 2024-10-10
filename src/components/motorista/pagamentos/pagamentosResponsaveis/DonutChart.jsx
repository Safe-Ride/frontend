import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactEcharts from "echarts-for-react";

const api = axios.create({
  baseURL: `http://localhost:8080/contratos`,
});

const DonutChart = () => {
  const { id } = useParams();
  
  const [statusContrato, setStatusContrato] = useState({
    pago: 0,
    pendente: 0,
    atrasado: 0,
  });

  useEffect(() => {
    function recuperarInformacoes() {
      api
        .get(`/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
          },
        })
        .then((response) => {
          const { data } = response;
          setStatusContrato(calcularStatusContrato(data.pagamentos));
        })
        .catch((error) => {
          console.log(`Erro ao buscar o contrato de id ${id}: `, error);
        });
    }

    recuperarInformacoes();
  }, [id]); // Inclui o 'id' como dependência

  const qtdPago = statusContrato.pago;
  const qtdPendente = statusContrato.pendente;
  const qtdAtrasado = statusContrato.atrasado;

  const getOption = () => {
    return {
      tooltip: {
        trigger: "item",
      },
      // legend: {
      //   orient: "vertical",
      //   left: "left",
      // },
      series: [
        {
          name: "Boletos",
          type: "pie",
          radius: ["40%", "80%"],
          avoidLabelOverlap: false,
          label: {
            show: true, // Esconde rótulos padrão
            position: "inside",
            formatter: function (params) {
              return params.value > 0 ? params.value : ''; // Exibe valor apenas se for maior que 0
            },
            fontSize: 20,
            color: "#ffffff",
            fontWeight: "bold"
          },
          emphasis: {
            label: {
              show: true, // Mostra rótulos ao passar o mouse
              fontSize: 20,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false, // Esconde linhas de rótulo
          },
          data: [
            {
              value: qtdPago,
              name: "Pago",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#64adad" },
                    { offset: 0.1, color: "#64adad" },
                    { offset: 0.1, color: "#018789" },
                    { offset: 0.2, color: "#018789" },
                    { offset: 0.2, color: "#64adad" },
                    { offset: 0.3, color: "#64adad" },
                    { offset: 0.3, color: "#018789" },
                    { offset: 0.4, color: "#018789" },
                    { offset: 0.4, color: "#64adad" },
                    { offset: 0.5, color: "#64adad" },
                    { offset: 0.5, color: "#018789" },
                    { offset: 0.6, color: "#018789" },
                    { offset: 0.6, color: "#64adad" },
                    { offset: 0.7, color: "#64adad" },
                    { offset: 0.7, color: "#018789" },
                    { offset: 0.8, color: "#018789" },
                    { offset: 0.8, color: "#64adad" },
                    { offset: 0.9, color: "#64adad" },
                    { offset: 0.9, color: "#018789" },
                    { offset: 1, color: "#018789" },
                  ],
                },
              },
            },
            {
              value: qtdPendente,
              name: "Pendente",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#ff944d" },
                    { offset: 0.2, color: "#ff944d" },
                    { offset: 0.2, color: "#f60" },
                    { offset: 0.4, color: "#f60" },
                    { offset: 0.4, color: "#ff944d" },
                    { offset: 0.6, color: "#ff944d" },
                    { offset: 0.6, color: "#f60" },
                    { offset: 0.8, color: "#f60" },
                    { offset: 0.8, color: "#ff944d" },
                    { offset: 1, color: "#ff944d" },
                  ],
                },
              },
            },
            {
              value: qtdAtrasado,
              name: "Atrasado",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    { offset: 0, color: "#ff6363" },
                    { offset: 0.25, color: "#ff6363" },
                    { offset: 0.25, color: "#e50101" },
                    { offset: 0.5, color: "#e50101" },
                    { offset: 0.5, color: "#ff6363" },
                    { offset: 0.75, color: "#ff6363" },
                    { offset: 0.75, color: "#e50101" },
                    { offset: 1, color: "#e50101" },
                  ],
                },
              },
            },
          ],
        },
      ],
    };
  };
  return (
    <ReactEcharts
      option={getOption()}
      style={{ height: "25vh", width: "100%" }}
    />
  );
};

function calcularStatusContrato(contrato) {
  let data = {
    pago: 0,
    pendente: 0,
    atrasado: 0,
  };
  for (let i = 0; i < contrato.length; i++) {
    if (contrato[i].status === "PAGO") {
      data.pago += 1;
    } else if (contrato[i].status === "PENDENTE") {
      data.pendente += 1;
    } else if (contrato[i].status === "ATRASADO") {
      data.atrasado += 1;
    }
  }
  return data;
}

export default DonutChart;
