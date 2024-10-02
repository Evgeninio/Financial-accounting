import styles from './Text.module.scss'

type TextProps = {
    content: string
}

export const Text = ({content}: TextProps) => {
    return (
        <div className={styles.container}>
            {content}
        </div>
    )
}