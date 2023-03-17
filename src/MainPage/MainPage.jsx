import styles from "./MainPage.module.css"
import {ReactComponent as ExistSvg} from "../assets/image/exit.svg";

const MainPage = () => {
    return (
        <div className={styles.frame}>
            <header className={styles.header}>
                <span>Simple Hotel Check</span>
                <button className={styles.exist}>
                    Выйти
                    <ExistSvg/>
                </button>
            </header>
            <main className={styles.content}>sdfsdfds</main>
        </div>
    )
}

export default MainPage;