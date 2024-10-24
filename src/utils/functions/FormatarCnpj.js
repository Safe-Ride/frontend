export default function FormatarCnpj(cnpj) {
    cnpj = String(cnpj);

    let formattedCNPJ = '';
    formattedCNPJ += cnpj.substring(0, 2) + '.';  // Primeiros 2 dígitos
    formattedCNPJ += cnpj.substring(2, 5) + '.';  // Próximos 3 dígitos
    formattedCNPJ += cnpj.substring(5, 8) + '/';  // Próximos 3 dígitos
    formattedCNPJ += cnpj.substring(8, 12) + '-'; // Próximos 4 dígitos
    formattedCNPJ += cnpj.substring(12, 14);      // Últimos 2 dígitos

    return formattedCNPJ;
}