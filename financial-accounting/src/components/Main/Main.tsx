import { Text } from "../Text/Text";
import styles from './Main.module.scss'
import { useState } from "react";
import { Switcher } from "../Switcher/Switcher";
import { FinanceForm } from "../FinanceForm";
export const Main = () => {
    const [time, setTime] = useState('месяц')

    return (
    <>  
        <FinanceForm />
        <Switcher timeSet={setTime}/>
        <div className={styles.container}>
            <div className={styles.mainHeader}>
                <Text content={`Общие траты за ${time}`} />
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