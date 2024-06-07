import apiLine from "../../../../apiLine";
import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

const LineChart = () => {
  const [chartData, setChartData] = useState({ months: [], values: [] });

  const recuperarInformacoesCliente = async () => {
    try {
      const response = await apiLine.get();
      const data = response.data;

      const months = [];
      const values = [];

      console.log(data);

      for (const key in data) {
        if (data.hasOwnProperty(key) && key !== "id") {
          months.push(nomeMes(data[key].data));
          values.push(data[key].valor);
        }
      }

      setChartData({ months, values });
    } catch (error) {
      console.log("Deu erro, tente novamente! ", error);
    }
  };

  useEffect(() => {
    recuperarInformacoesCliente();
  }, []);

  const getOption = () => {
    const minValue = Math.min(...chartData.values);
    const maxValue = Math.max(...chartData.values);
    const yMin = minValue - 10;
    const yMax = maxValue + 10;

    return {
      xAxis: {
        type: "category",
        data: chartData.months,
        axisLabel: {
          rotate: 45, // 0 graus para manter os nomes deitados (horizontalmente)
        },
      },
      yAxis: {
        type: "value",
        min: yMin,
        max: yMax,
      },
      series: [
        {
          data: chartData.values,
          type: "line",
          // smooth: true,
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

export default LineChart;
