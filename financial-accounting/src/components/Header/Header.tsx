import styles from './Header.module.scss'
import { Button } from '../Button'
import { FinanceForm } from '../FinanceForm'
import { cloneElement, useState } from 'react'


export const Header = () => {
    const handleTest = () =>
        alert('Hello')
    const[isOpened, setOpened] = useState(false)

    const handleForm = () => {
        setOpened(current => !current)
        console.log(isOpened)
    }

    return (
        <>  
            {isOpened &&
                <FinanceForm />
            }
            <div className={styles.container}>
                <Button content='Главная' onClick={handleTest} type={'headerButton'}/>
                <Button content='Добавить покупку' onClick={handleForm} type={'headerButton'}/>
                <Button content='История' onClick={handleTest} type={'headerButton'}/>
            </div>
        </>
    )
}