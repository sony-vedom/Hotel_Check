import styles from "./Header.module.css"
import {ReactComponent as ExistSvg} from "../../assets/image/exit.svg";


const Header = () => {
    return (<header className={styles.header}>
            <span>Simple Hotel Check</span>
            <button className={styles.exist}>
                Выйти
                <ExistSvg/>
            </button>
        </header>
    )
}

export default Header;