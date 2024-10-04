import { Input } from "../Input/Input"
import { Button } from "../Button"
import styles from './CategoryAdder.module.scss'

type CategoryAdder ={
    open: boolean
}

export const CategoryAdder = ({open}: CategoryAdder) => {
    return (
        <form className={`${open? styles.container + ' ' + styles.containerOpen : styles.container
        }`}>
            <Input required={true} type={'text'} square={false}/>
            <Button onClick={''} content={'Добавить категорию'} type={'categoryAddButton'}/>
        </form>
    )
}