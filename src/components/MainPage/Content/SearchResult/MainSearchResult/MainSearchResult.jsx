import styles from "./MainSearchResult.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setFavoritesGlobal} from "../../../../../redux/reducers/favorites";
import Cards from "../../../../Cards/Cards";

const MainSearchResult = ({myDate}) => {
    const cardList = [...useSelector((state) => state.searchResult)]

    const dispatch = useDispatch()
    const [favorite, setFavorite] = useState(null)

    useEffect(() => {
        if (favorite !== null) {
            dispatch(setFavoritesGlobal({
                ...cardList[favorite],
                i: favorite,
            }))
            setFavorite(null)

        }
    }, [favorite])

    return <div className={styles.frame}>
        <p>Добавлено в Избранное: 3 отеля</p>
        <Cards cardList={cardList} setFavorite={setFavorite} favorite={favorite}
               houseIcon={true}/>
    </div>
}

export default MainSearchResult;