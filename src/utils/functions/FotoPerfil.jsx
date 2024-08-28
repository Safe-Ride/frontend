import defaultProfile from "../../utils/assets/perfil/profile.png";

const FotoPerfil = (foto) => {
  return foto ? require(`../../utils/assets/perfil/${foto}`) : defaultProfile;
};

export default FotoPerfil;
