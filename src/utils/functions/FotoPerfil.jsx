const FotoPerfil = (foto) => {
  return foto
    ? `https://bucket-foto-perfil.s3.amazonaws.com/${foto}`
    : "https://bucket-foto-perfil.s3.amazonaws.com/profile.png";
};

export default FotoPerfil;
