import styles from './Header.module.scss'
import { Button } from '../Button'

export const Header = () => {
    const handleTest = () =>
        alert('Hello')
    return (
        <div className={styles.container}>
            <Button content='Главная' onClick={handleTest}/>
            <Button content='Добавить покупку' onClick={handleTest}/>
            <Button content='История' onClick={handleTest}/>
        </div>
    )
}