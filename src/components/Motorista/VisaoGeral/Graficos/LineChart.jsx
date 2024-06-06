import apiLine from "../../../../apiLine";
import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

const LineChart = () => {
  const [chartData, setChartData] = useState({ months: [], values: [] });

  const recuperarInformacoesCliente = async () => {
    try {
      const response = await apiLine.get();
      const data = response.data[0];

      const months = [];
      const values = [];

      for (const key in data) {
        if (data.hasOwnProperty(key) && key !== "id") {
          months.push(key);
          values.push(data[key]);
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

export default LineChart;
