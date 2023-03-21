import styles from "../SearchResult.module.css";
import {ReactComponent as Vector} from "../../../../../assets/image/icons/vector.svg";

const HeaderSearchResult = ({location, date}) => {
    return <header className={styles.header}>
        <div className={styles.breadcrumbs}>
            <p>Отели</p>
            <Vector/>
            <p>{location}</p>
        </div>
        <div className={styles.date}>
            {date}
        </div>
    </header>
}

export default HeaderSearchResult;