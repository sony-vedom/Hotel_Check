import styles from "./Favorites.module.css";
import Cards from "../../../../Cards/Cards";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as SelectorIcon} from "../../../../../assets/image/icons/sortGreen.svg";
import {useEffect, useState} from "react";
import classNames from "classnames";
import {ReactComponent as SelectorIconDark} from "../../../../../assets/image/icons/sortDarkGreen.svg";
import {setSort} from "../../../../../redux/reducers/favoritesSort";

const Favorites = () => {
    const cardList = [...useSelector((state) => state.favorites)]
    const dispatch = useDispatch()

    const [button, setButton] = useState("")
    const [select, setSelect] = useState("")

    useEffect(() => {
        dispatch(setSort({button, select}))
    }, [button, select])

    const buttonCn = elem => {
        return (button === elem) ? classNames(styles.button, styles.active) : styles.button
    }

    const chooseIcon = (elem, position) => {
       if (elem === button) {
           return select===position ? <SelectorIconDark/> : <SelectorIcon/>
       }
       return <SelectorIcon/>
    }

    const onClick = (e) => {
        setButton(e.currentTarget.id)
        switch (select) {
            case ("up"): {
                setSelect("down")
                break
            }
            case ("down"): {
                setSelect("up")
                break
            }
            default: {
                setSelect("up")
            }
        }
    }


    return (
        <section className={styles.favorites}>
            <div className={styles.head}>Избранное</div>
            <div className={styles.buttons}>
                <button type="button" id="rating" onClick={onClick} className={buttonCn("rating")}>
                    Рейтинг
                    <div className={styles.select}>
                        {chooseIcon("rating", "up")}
                        {chooseIcon("rating", "down")}
                    </div>
                </button>
                <button id="price" type="button" onClick={onClick} className={buttonCn("price")}>
                    Цена
                    <div className={styles.select}>
                        {chooseIcon("price", "up")}
                        {chooseIcon("price", "down")}
                    </div>
                </button>
            </div>
            <Cards cardList={cardList} favoritesStyle={true}/>
        </section>
    )
}

export default Favorites;