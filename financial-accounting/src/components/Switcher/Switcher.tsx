import styles from './Switcher.module.scss'
import { Button } from "../Button"

export const Switcher = () => {
    const handleTest = () =>
        alert('Hello')
    return (
        <div className={styles.container}>
            <div className={styles.switchOption}><Button content="День" onClick={handleTest} type={'timeButton'}/></div>
            <div className={styles.switchOption}><Button content="Месяц" onClick={handleTest} type={'timeButton'}/></div>
            <div className={styles.switchOption}><Button content="Всё время" onClick={handleTest} type={'timeButton'}/></div>
        </div>
    )
}