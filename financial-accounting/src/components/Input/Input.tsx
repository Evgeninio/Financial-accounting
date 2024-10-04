import { NumberSquare } from '../NumberSquare'

import styles from './Input.module.scss'

type InputProps = {
    placeholder?: string
    number?: number
    type: string
    required: boolean
    square: boolean
}


export const Input = ({placeholder, number, type, required, square}: InputProps) => {
    return (
        <div className={styles.container}> 
            {square &&
                <NumberSquare content={number}/>
            }
            <input type={type} placeholder={placeholder} className={styles.inputField} required={required}/>
        </div>
    )
}