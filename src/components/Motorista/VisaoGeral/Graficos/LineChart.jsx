import apiLine from "../../../../apiLine";
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";

const LineChart = () => {
  function recuperarInformacoesCliente() {
    apiLine
      .get()
      .then((response) => {
        const { data } = response;
        console.log(data);
        // const { pago, pendente, atrasado } = data;
      })
      .catch(() => {
        console.log("Deu erro, tente novamente! ");
      });
  }

  recuperarInformacoesCliente();
  // useEffect(() => {
  //   recuperarInformacoesCliente();
  // }, []);

  const getOption = () => {
    return {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
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
