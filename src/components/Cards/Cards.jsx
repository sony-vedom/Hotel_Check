import styles from "./Cards.module.css";
import './Cards2.css';
import {ReactComponent as StarIcon} from "../../assets/image/icons/star.svg";
import {ReactComponent as StarGrayIcon} from "../../assets/image/icons/starGray.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {ReactComponent as HouseIcon} from "../../assets/image/icons/house.svg";
import {ReactComponent as HeartIconRed} from "../../assets/image/icons/heartRed.svg";
import {ReactComponent as HeartIcon} from "../../assets/image/icons/heart.svg";
import {ReactComponent as BorderIcon} from "../../assets/image/icons/border.svg";

const Cards = ({cardList, favorite, setFavorite, height, favoritesStyle}) => {


    return <Swiper
        slidesPerView={favoritesStyle ? 3 : 5}
        // slidesPerGroup={3}
        keyboard={true}
        // spaceBetween={20}
        direction="vertical"
        mousewheel={true}
        style={height}
        className={favoritesStyle ? styles.cardContainer__favorite : styles.cardContainer }
        scrollbar={{draggable: true, dragSize: 100.33, hide: true}}>
        {cardList && cardList.map((el, i, array) => {
            favoritesStyle && console.log(i % 3 !== 0)
            const marginTop = !!array[i - 1] ? array[i - 1].hotelName.length > 62 : false
            const marginTopFavorite = !!array[i - 1] ? array[i - 1].hotelName.length > 27 && el.hotelName < 63 : false
            const fontsize = !!array[i - 1] ? array[i].hotelName.length > 62 : false
            let stars = []
            let key = 0;
            while (stars.length < el.stars) {
                stars.push(<StarIcon key={key}/>)
                key += 1;
            }
            while (stars.length < 5) {
                stars.push(<StarGrayIcon key={key}/>)
                key += 1;
            }
            return <SwiperSlide className={favoritesStyle ? styles.card__favorite :styles.card} key={el.hotelName}
                                style={favoritesStyle && marginTopFavorite ? {paddingTop: "16px"} : marginTop? {marginTop: "18px"} : {}}>
                {/* paddingTop 18*/}
                <div>
                    <div className={favoritesStyle ? styles.houseFrame__favorite : styles.houseFrame}>
                        <HouseIcon/>
                    </div>
                    <div className={styles.information}>
                        <p className={styles.hotelName} style={favoritesStyle && fontsize ? {fontSize: "14px"} : {}}>
                            {el.hotelName}
                        </p>
                        <div className={styles.date}>
                            <div>{el.date}</div>
                            <div>—</div>
                            <div>{el.days} день</div>
                        </div>
                        <div className={styles.stars}>
                            {stars}
                        </div>
                    </div>
                    <div className={styles.priceFavorite}>
                        <button className={favoritesStyle ? styles.favorite__favorite : styles.favorite} onClick={setFavorite ? () => setFavorite(i) : null}>
                            {i === favorite ? <HeartIconRed/> : <HeartIcon/>}
                        </button>
                        <div className={styles.price}>
                            <p>Price:</p>
                            <p>{el.price} ₽</p>
                        </div>
                    </div>
                </div>
                <div className={styles.borderIcon}>
                    <BorderIcon/>
                </div>
            </SwiperSlide>
        })}
    </Swiper>
}

export default Cards;