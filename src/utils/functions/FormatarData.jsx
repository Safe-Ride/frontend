const FormatarData = (dataASerConvertida) => {
  if (!dataASerConvertida || isNaN(new Date(dataASerConvertida).getTime())) {
    return dataASerConvertida;
  }

  const data = new Date(dataASerConvertida);
  const dia = String(data.getDate() + 1).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
};

export default FormatarData;
