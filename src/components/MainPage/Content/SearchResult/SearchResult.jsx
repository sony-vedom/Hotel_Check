import styles from "./SearchResult.module.css"
import HeaderSearchResult from "./HeaderSearchResult/HeaderSearchResult";
import Carousel from "./Carousel/Carousel";
import SwiperCore, {Keyboard, Mousewheel} from "swiper/core";
import MainSearchResult from "./MainSearchResult/MainSearchResult";
import {useSelector} from "react-redux";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const SearchResult = () => {
    SwiperCore.use([Keyboard, Mousewheel]);
    const search = useSelector((state) => state.search)
    const myDate = new Date(search.checkInDate).toLocaleString('ru', {
        year: "numeric",
        month: 'long',
        day: 'numeric'
    }).slice(0, -2);
    return <div className={styles.wrapper}>
        <HeaderSearchResult location={search.location} date={myDate}/>
        <Carousel/>
        <MainSearchResult date={myDate} daysCount={search.days}/>
    </div>
}

export default SearchResult;