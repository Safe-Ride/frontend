import { useNavigate } from "react-router-dom"
import styles from "./Box.module.css"

const Box = ({ titulo = null, link = null, linkDisplayName = null, children }) => {

    const navigate = useNavigate();

    return (

        <div className={styles['box']}>
            {/* <div className={styles['head']}>
                {
                    titulo != null &&
                    <h3 className={styles['titulo']}>{titulo}</h3>
                }
                {
                    link != null &&
                    <span
                        className={styles['link']}
                        onClick={() => navigate(link)}
                    >{linkDisplayName}</span>
                }
            </div> */}


            {children}
        </div>

    )
}

export default Box