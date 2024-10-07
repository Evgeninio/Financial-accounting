import { NumberSquare } from '../NumberSquare'
import { Button } from '../Button'
import { CategoryAdder } from '../CategoryAdder/CategoryAdder'
import styles from './Select.module.scss'

import { SyntheticEvent, useState } from 'react'
type SelectProps = {
    required: boolean,
    categories: string[]
    number: number
}

export const Select = ({number, required, categories}: SelectProps) => {
    const [isOpened, setOpenForm] = useState(false)

    const handleOpen = (e: SyntheticEvent<Element, Event>) => {
        e.preventDefault()
        setOpenForm(current => !current)
    }
 

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
            <select required={required} className={styles.select__field}>
                {options}
            </select>
            <Button onClick={handleOpen} content={'Add'} type={'formButton'}/>
            {isOpened &&
                <CategoryAdder />
            }
        </div>
    )
}