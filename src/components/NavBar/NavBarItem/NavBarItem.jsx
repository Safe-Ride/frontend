import { useNavigate } from "react-router-dom";
import styles from "./NavBarItem.module.css"

const NavBarItem = ({ navigateTo, img, titulo }) => {

    const navigate = useNavigate();

    return (
        <div
            className={styles["campo"]}
            onClick={() => navigate(navigateTo)}
        >
            <div className={styles["campo-img"]}>
                <img src={img} alt="Dependentes" />
            </div>
            <p>{ titulo }</p>
        </div>
    )
}

export default NavBarItem