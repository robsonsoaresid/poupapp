import { IconSavings } from '../icons'
import styles from './savingsstatus.module.css'

export const SavingsStatus = ({percent}) => {
    return (
        <div className={styles.container}>
            <p>
                <IconSavings /> Economizar
            </p>
        </div>
    )
}