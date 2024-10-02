import { Text } from "../Text/Text";
import styles from './Main.module.scss'

export const Main = () => {
    return (
    <>
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