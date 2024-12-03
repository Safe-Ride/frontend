import apiLine from "../../../apiLine";
import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

const LineChart = () => {
  const [chartData, setChartData] = useState({ months: [], values: [] });

  const recuperarInformacoesCliente = async () => {
    try {
      const response = await apiLine.get();
      const data = agruparPorAnoMes(response.data);

      const months = [];
      const values = [];

      console.log(data);

      for (const key in data) {
          months.push(nomeMes(data[key].data) + `/${numeroAno(data[key].data)}`);
          values.push(data[key].valor);
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
    const maxValueWidth = getMaxValueWidth(chartData.values); // Ajusta conforme necessário
    return {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return params.name + ":<br/>" + "R$" + Number(params.value).toFixed(2);
        },
        textStyle: {
          fontSize: 12,
        },
      },
      grid: {
        left: `${maxValueWidth}px`,
        // right: "10%",
        top: "15%",
        // bottom: "15%",
      },
      xAxis: {
        type: "category",
        data: chartData.months,
        axisLabel: {
          rotate: 45, // 0 graus para manter os nomes deitados (horizontalmente)
          fontSize: 12,
        },
      },
      yAxis: {
        type: "value",
        min: 0,
        axisLabel: {
          fontSize: 12,
          formatter: function (value) {
            return value.toLocaleString("pt-BR", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            });
          },
        },
      },
      series: [
        {
          data: chartData.values,
          type: "line",
          // smooth: true,
        },
      ],
    }
  };

  return (
    <ReactEcharts
      option={getOption()}
      style={{ height: "95%", width: "100%" }}
    />
  );
};

function nomeMes(data) {
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", { month: "long" });
  const date = new Date(data.split("-"));
  date.setMonth(date.getMonth());
  const monthName = dateFormatter.format(date);
  return monthName.charAt(0).toUpperCase() + monthName.slice(1);
}

function numeroAno(data) {
  const date = new Date(data);
  return date.getFullYear().toString().slice(2, 4);
}

function agruparPorAnoMes(dados) {
  const agrupado = dados.reduce((acumulador, item) => {
      const [ano, mes] = item.data.split("-");
      const chave = `${ano}-${mes}`;

      if (!acumulador[chave]) {
          acumulador[chave] = 0;
      }

      acumulador[chave] += item.valor;

      return acumulador;
  }, {});

  return Object.entries(agrupado).map(([data, valor]) => ({
      data,
      valor,
  })).sort((a, b) => new Date(`${a.data}-01`) - new Date(`${b.data}-01`))
  .slice(-6);
};

function getMaxValueWidth(values) {
  const maxValue = Math.max(...values);
  
  // Formata o valor como string e calcula a largura (simula o comportamento, o cálculo real pode variar conforme a fonte)
  const maxValueString = maxValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  // Utiliza um método de medição de largura do texto (exemplo simples com canvas)
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "12px Arial"; // O tamanho da fonte pode ser ajustado conforme necessário
  const textWidth = context.measureText(maxValueString).width;

  // Define uma margem para o valor
  return textWidth + 20; // Adiciona 20px para margem
};


export default LineChart;
