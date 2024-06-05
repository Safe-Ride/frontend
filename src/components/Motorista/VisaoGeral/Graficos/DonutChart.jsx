import React from "react";
import ReactEcharts from "echarts-for-react";

const DonutChart = () => {
  const getOption = () => {
    return {
      series: [
        {
          name: "Boletos",
          type: "pie",
          radius: ["40%", "80%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 4, name: "Pendente", itemStyle: { color: "#ff944d" } },
            { value: 2, name: "Atrasado", itemStyle: { color: "#ff6363" } },
            { value: 6, name: "Pago", itemStyle: { color: "#64adad" } },
          ],
        },
      ],
    };
  };

  return (
    <ReactEcharts
      option={getOption()}
      style={{ height: "auto", width: "100%" }}
    />
  );
};

export default DonutChart;
