import styles from "./Favorites.module.css";
import Cards from "../../../../Cards/Cards";
import {useSelector} from "react-redux";

const Favorites = () => {
    const cardList = [...useSelector((state) => state.favorites)]

    return (
        <section className={styles.favorites}>
            <div className={styles.head}>Избранное</div>
            <div className={styles.buttons}>
                    <button type="button" className={styles.active}>Рейтинг</button>
                    <button type="button" className={styles.active}>Цена</button>
            </div>
            {/*// h 288*/}
            <Cards cardList={cardList} favoritesStyle={true}/>
        </section>
    )
}

export default Favorites;