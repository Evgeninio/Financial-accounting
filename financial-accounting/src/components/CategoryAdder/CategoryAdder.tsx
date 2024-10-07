import { Input } from "../Input/Input"
import { Button } from "../Button"
import styles from './CategoryAdder.module.scss'
import { Categories } from "../../constants/InitialData/financeData"
import { ChangeEvent, useState } from "react"

export const CategoryAdder = () => {
    const [inputText, setInputText] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    const handleForm = () => {
        Categories.push(inputText)
        console.log(Categories)
        
    }

    return (
        <div className={styles.container}>
            <Input required={true} type={'text'} square={false} onChange={handleChange}/>
            <Button onClick={handleForm} content={'Добавить категорию'} type={'categoryAddButton'}/>
        </div>
    )
}