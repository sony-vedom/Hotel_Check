import styles from "./Sidebar.module.css"
import Search from "./Search/Search";
import Favorites from "./Favorites/Favorites";

const Sidebar = () => {
    return <aside className={styles.sidebar}>
        <Search/>
        <Favorites/>
    </aside>
}

export default Sidebar;