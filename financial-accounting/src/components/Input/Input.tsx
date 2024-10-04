import { NumberSquare } from '../NumberSquare'

import styles from './Input.module.scss'

type InputProps = {
    placeholder?: string
    number: number
    type: string
    required: boolean
}


export const Input = ({placeholder, number, type, required}: InputProps) => {
    return (
        <div className={styles.container}>  
            <NumberSquare content={number}/>
            <input type={type} placeholder={placeholder} className={styles.inputField} required={required}/>
        </div>
    )
}