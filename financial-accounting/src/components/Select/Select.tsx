import { NumberSquare } from '../NumberSquare'

import styles from './Select.module.scss'
type SelectProps = {
    required: boolean,
    categories: string[]
    number: number
}

export const Select = ({number, required, categories}: SelectProps) => {

    const options = categories.map((category) => {
        return (
            <option key={category} value={category}>
                {category}
            </option>
        );
    })

    return (
        <div className={styles.container}>
            <NumberSquare content={number}/>
            <select required={required} className={styles.selectField}>
                {options}
            </select>
        </div>
    )
}