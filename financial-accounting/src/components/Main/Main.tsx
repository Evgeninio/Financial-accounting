import { Text } from "../Text/Text";
import styles from './Main.module.scss'
import { useState } from "react";
import { Switcher } from "../Switcher/Switcher";

export type Times = 'день' |  'месяц' | 'всё время'

export const Main = () => {
    const [time, setTime] = useState<Times | string>('месяц')

    return (
    <>  
        <Switcher timeSet={setTime}/>
        <div className={styles.container}>
            <div className={styles.main__header}>
                <Text content={`Общие траты за ${time}`} />
            </div>
        </div>
        <div className={styles.main__body}>
            <div>
                <Text content='Диаграмма' />
            </div>
            <div className={styles.main__category}>
                <Text content='Категории' />
            </div>
        </div>
    </>
    )
}