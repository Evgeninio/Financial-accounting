import styles from './Button.module.scss'

type ButtonProps = {
    onClick: any,
    content: string,
    type: string
} 

const buttonTypes = {
    'headerButton': styles.buttonHeader,
    'timeButton': styles.buttonTime,
    'formButton': styles.buttonForm,
    'categoryAddButton': styles.buttoncategoryAdd
}

export const Button = ({onClick, content, type}: ButtonProps) => {
    const buttonClass = buttonTypes[type as keyof typeof buttonTypes]
    return (
        <div className={styles.button}>
            <button onClick={onClick} className={buttonClass}>
                {content}
            </button>
        </div>
    )
}