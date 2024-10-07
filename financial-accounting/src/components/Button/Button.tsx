import styles from './Button.module.scss'

type ButtonProps = {
    onClick: (e?: any) => void,
    content: string,
    type: 'headerButton' | 'timeButton' | 'formButton' | 'categoryAddButton'
} 

const buttonTypes = {
    'headerButton': styles.button__header,
    'timeButton': styles.button__time,
    'formButton': styles.button__form,
    'categoryAddButton': styles.button__category
}

export const Button = ({onClick, content, type}: ButtonProps) => {
    const buttonClass = buttonTypes[type as keyof typeof buttonTypes]
    return (
        <div className={styles.button}>
            <button onClick={onClick} className={buttonClass + ' ' + styles.button__animate}>
                {content}
            </button>
        </div>
    )
}