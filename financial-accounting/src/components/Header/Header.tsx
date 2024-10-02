import styles from './Header.module.scss'
import { Button } from '../Button'

export const Header = () => {
    const handleTest = () =>
        alert('Hello')
    return (
        <div className={styles.container}>
            <Button content='Главная' onClick={handleTest} type={'headerButton'}/>
            <Button content='Добавить покупку' onClick={handleTest} type={'headerButton'}/>
            <Button content='История' onClick={handleTest} type={'headerButton'}/>
        </div>
    )
}