import { Text } from "../Text/Text";
import styles from './Main.module.scss'
import { useState } from "react";
import { Switcher } from "../Switcher/Switcher";

export const Main = () => {
    const [time, setTime] = useState('')

    return (
    <>
        <Switcher />
        <div className={styles.container}>
            <div className={styles.mainHeader}>
                <Text content='Общие траты за {день\месяц\выбранный участок}' />
            </div>
        </div>
        <div className={styles.mainBody}>
            <div>
                <Text content='Диаграмма' />
            </div>
            <div className={styles.mainCategory}>
                <Text content='Категории' />
            </div>
        </div>
    </>
    )
}