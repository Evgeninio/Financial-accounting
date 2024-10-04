import styles from './Switcher.module.scss'
import { Button } from "../Button"
import React, { Dispatch, SetStateAction } from 'react'

type switcherProps = {
    timeSet: Dispatch<SetStateAction<string>>
}


export const Switcher = (props: switcherProps) => {
    const { timeSet } = props
    const handleTime = (e: React.MouseEvent) =>{
        const target = e.target as HTMLElement;
        timeSet(target.textContent?.toLowerCase() || '');
    }
    return (
        <div className={styles.container}>
            <div className={styles.switchOption}><Button content="День" onClick={handleTime} type={'timeButton'}/></div>
            <div className={styles.switchOption}><Button content="Месяц" onClick={handleTime} type={'timeButton'}/></div>
            <div className={styles.switchOption}><Button content="Всё время" onClick={handleTime} type={'timeButton'}/></div>
        </div>
    )
}