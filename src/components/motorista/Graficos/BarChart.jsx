import apiBar from "../../../apiBar";
import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

const BarChart = () => {
  const [chartData, setChartData] = useState({
    categories: [],
    total: [],
    efetuados: [],
  });

  useEffect(() => {
    const recuperarInformacoesCliente = async () => {
      try {
        const response = await apiBar.get();
        const data = response.data;
        const mes = data.map((item) => nomeMes(item.data));
        const total = data.map((item) => item.total);
        const efetuados = data.map((item) => item.efetuados);

        setChartData({
          mes,
          total,
          efetuados,
        });
      } catch (error) {
        console.error("Deu erro, tente novamente!", error);
      }
    };

    recuperarInformacoesCliente();
  }, []);

  const getOption = () => {
    return {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        data: chartData.mes,
        axisLabel: {
          rotate: 45,
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Total",
          type: "bar",
          data: chartData.total,
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
          name: "Efetuados",
          type: "bar",
          data: chartData.efetuados,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 13,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#ff944d" },
                { offset: 0.1, color: "#ff944d" },
                { offset: 0.1, color: "#f60" },
                { offset: 0.2, color: "#f60" },
                { offset: 0.2, color: "#ff944d" },
                { offset: 0.3, color: "#ff944d" },
                { offset: 0.3, color: "#f60" },
                { offset: 0.4, color: "#f60" },
                { offset: 0.4, color: "#ff944d" },
                { offset: 0.5, color: "#ff944d" },
                { offset: 0.5, color: "#f60" },
                { offset: 0.6, color: "#f60" },
                { offset: 0.6, color: "#ff944d" },
                { offset: 0.7, color: "#ff944d" },
                { offset: 0.7, color: "#f60" },
                { offset: 0.8, color: "#f60" },
                { offset: 0.8, color: "#ff944d" },
                { offset: 0.9, color: "#ff944d" },
                { offset: 0.9, color: "#f60" },
                { offset: 1, color: "#f60" },
              ],
            },
          },
        },
      ],
    };
  };

  return (
    <ReactEcharts
      option={getOption()}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

function nomeMes(data) {
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", { month: "long" });
  const date = new Date(data);
  date.setMonth(date.getMonth() + 1);
  const monthName = dateFormatter.format(date);

  return monthName.charAt(0).toUpperCase() + monthName.slice(1);
}

export default BarChart;
