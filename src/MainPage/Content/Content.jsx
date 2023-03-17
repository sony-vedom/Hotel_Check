import styles from "./Content.module.css";
import Sidebar from "./Sidebar/Sidebar";

const Main = () => {
    return <main className={styles.content}>
        <Sidebar/>
    </main>
}

export default Main