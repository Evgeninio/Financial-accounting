import styles from './NumberSquare.module.scss'

type NumberSquareProps = {
    content?: number
}

export const NumberSquare = ({content}: NumberSquareProps) => {
    return (
        <div className={styles.container}>
            <p>{content}</p>
        </div>
    )
}