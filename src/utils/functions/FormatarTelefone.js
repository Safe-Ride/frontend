export default function FormatarTelefone(telefone) {
    telefone = String(telefone);
    const ddd = telefone.slice(0,2)
    const telefoneInicio = telefone.slice(2,7)
    const telefoneFim = telefone.slice(7,11)
    return ddd + " " + telefoneInicio + "-" + telefoneFim;
}