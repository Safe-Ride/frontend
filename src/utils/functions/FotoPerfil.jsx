import defaultProfile from "../assets/perfil/profile.png";

const FotoPerfil = (foto) => {
  try {
    return foto ? require(`../../utils/assets/perfil/${foto}`) : defaultProfile;
  } catch(e) {
    return defaultProfile;
  }
};

export default FotoPerfil;
