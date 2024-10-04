import styles from './Header.module.scss'
import { Button } from '../Button'
import { FinanceForm } from '../FinanceForm'
import { useState } from 'react'

export const Header = () => {
    const handleTest = () =>
        alert('Hello')
    const[isOpened, setOpened] = useState(false)
    const openForm = () => setOpened(true)
    const closeForm = () => setOpened(false)
    const handleOpenForm = () => {
        if (isOpened) {
            closeForm()
        }
        else {
            openForm()
        }
    }
    return (
        <>
            <FinanceForm isOpened={isOpened}/>
            <div className={styles.container}>
                <Button content='Главная' onClick={handleTest} type={'headerButton'}/>
                <Button content='Добавить покупку' onClick={handleOpenForm} type={'headerButton'}/>
                <Button content='История' onClick={handleTest} type={'headerButton'}/>
            </div>
        </>
    )
}