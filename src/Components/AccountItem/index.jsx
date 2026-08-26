import { IconBank } from '../icons'
import styles from './accountitem.module.css'
const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export const AccountItem = ({item}) => {
    return (
        <div className={styles.account}>
            <div  className={styles.bank}>
                <p> <IconBank /> {item.bank}</p>

            </div>
            <div  className={styles.details}>
                <p>Saldo</p>
                <p>{formatter.format(item.balance)}</p>
            </div>
        </div>
    )
}