import { Text } from '../Text/Text'
import { Input } from '../Input/Input'
import { Select } from '../Select/Select'
import styles from './FinanceForm.module.scss'
import { Categories } from '../../constants/InitialData/financeData'
import { Button } from '../Button'

type FinanceFormProps = {
    isOpened: boolean
}

export const FinanceForm = ({isOpened}: FinanceFormProps) => {
    return (
        <form className={`${isOpened? styles.container + ' ' + styles.containerOpen : styles.container}`}>
            <div className={styles.formHeader}>
                <Text content='Добавьте покупку '/>
            </div>
            <Input placeholder={'Введите сумму'} number={1} type={'text'} required={true} square={true}/>
            <Input number={2} type={'date'} required={true} square={true}/>
            <Select required={true} categories={Categories} number={3}/>
        </form>
    )
}