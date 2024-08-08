const ObterMesData = (data) => {
  const formatter = new Intl.DateTimeFormat("pt-BR", { month: "long" });
  return formatter.format(data);
};

export default ObterMesData;
