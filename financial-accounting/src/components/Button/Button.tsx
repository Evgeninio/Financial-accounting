import styles from './Button.module.scss'

type ButtonProps = {
    onClick: any,
    content: string
} 

export const Button = ({onClick, content}: ButtonProps) => {
    return (
        <button onClick={onClick} className={styles.button}>
            {content}
        </button>
    )
}