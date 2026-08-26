import { AccountItem } from "../AccountItem"
import { Button } from "../Button"
import { IconCurrency } from "../icons"
//import { IconBank } from "../icons"
import styles from './accounts.module.css'

export const Accounts = () => {
    const items = [ 

{ "bank": "Anybank", "balance": 1200 }, 

{ "bank": "Bytebank", "balance": 800 }, 

{ "bank": "Switch Bank", "balance": 1800 } 

]

    return(
        <>
        <ul className={styles.list}>
            {items.map((accountitem, index) => {
                return (
                    <li key={index}>
                        <AccountItem item={accountitem}/>
                    </li>
                )
            })}
        </ul>
         <div className={styles.action}>
        <Button>
            <IconCurrency /> Adicionar tansação
        </Button>
        </div>
        </>
    )
}