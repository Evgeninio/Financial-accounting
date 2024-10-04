import { Text } from '../Text/Text'
import { Input } from '../Input/Input'
import { Select } from '../Select/Select'
import styles from './FinanceForm.module.scss'
import { Categories } from '../../constants/InitialData/financeData'

export const FinanceForm = () => {
    return (
        <form className={styles.container}>
            <div className={styles.formHeader}>
                <Text content='Добавьте покупку '/>
            </div>
            <div>
                <Input placeholder={'Введите сумму'} number={1} type={'text'} required={true}/>
                <Input number={2} type={'date'} required={true}/>
                <Select required={true} categories={Categories} number={3}/>
            </div>
        </form>
    )
}