import { NumberSquare } from '../NumberSquare'
import { Button } from '../Button'
import { CategoryAdder } from '../CategoryAdder/CategoryAdder'
import styles from './Select.module.scss'

import { useState } from 'react'
type SelectProps = {
    required: boolean,
    categories: string[]
    number: number
}

export const Select = ({number, required, categories}: SelectProps) => {
    const [openAddForm, setOpenForm] = useState(false)

    const openForm = () => setOpenForm(true)
    const closeForm = () => setOpenForm(false)

    const handleOpen = (e: any) => {
        e.preventDefault()
        if (openAddForm) {
            closeForm()
        }
        else {
            openForm()
        }
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
            <select required={required} className={styles.selectField}>
                {options}
            </select>
            <Button onClick={handleOpen} content={'Add'} type={'formButton'}/>
            <CategoryAdder open={openAddForm}/>

        </div>
    )
}