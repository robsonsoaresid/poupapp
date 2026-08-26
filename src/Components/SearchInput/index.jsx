import { IconSearch } from '../icons'
import styles from './searchinput.module.css'
          // Campo de Pesquisa
export const SearchInput = (props) => {
    return (
        <div className={styles.container}>
            <IconSearch/>
            <input className={styles.input} {...props}/>
        </div>
    )
}