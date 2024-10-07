import { ChangeEvent } from 'react'
import { NumberSquare } from '../NumberSquare'
import styles from './Input.module.scss'


type InputProps = {
    placeholder?: string
    number?: number
    type: string
    required: boolean
    square: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({placeholder, number, type, required, square, onChange}: InputProps) => {
    return (
        <div className={styles.container}> 
            {square &&
                <NumberSquare content={number}/>
            }
            <input type={type} placeholder={placeholder} className={styles.input__field} required={required} onChange={onChange}/>
        </div>
    )
}