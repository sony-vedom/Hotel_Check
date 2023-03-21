import styles from "./Content.module.css";
import Sidebar from "./Sidebar/Sidebar";
import SearchResult from "./SearchResult/SearchResult";

const Main = () => {
    return <main className={styles.content}>
        <Sidebar/>
        <SearchResult/>
    </main>
}

export default Main