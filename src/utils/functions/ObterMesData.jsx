const ObterMesData = (data) => {
  const date = new Date(data);
  const formatter = new Intl.DateTimeFormat("pt-BR", { month: "long" });

  if (isNaN(date.getTime())) {
    const dataAtual = new Date();
    return formatter.format(dataAtual);
  }
  return formatter.format(date);
};

export default ObterMesData;
