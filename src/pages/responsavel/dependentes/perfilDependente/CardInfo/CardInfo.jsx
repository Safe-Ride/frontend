import styles from "./CardInfo.module.css"

const CardInfo = ({ icone, categoria, info }) => {
    return (

        <div className={styles['card']}>
            <div className={styles['icone']}>
                <img className={styles['icone-img']} src={ icone } alt="ico" />
            </div>
            <div className={styles['content']}>
                <span className={styles['categoria']}>{ categoria }</span>
                <span className={styles['info']}>{ info }</span>
            </div>

        </div>

    )
}

export default CardInfo