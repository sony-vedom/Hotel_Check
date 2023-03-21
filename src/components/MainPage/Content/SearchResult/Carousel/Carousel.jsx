import {useSelector} from 'react-redux'
import {createElement} from "react";
import styles from "./Carousel.module.css"
import {Swiper, SwiperSlide} from "swiper/react";

const Carousel = () => {

    const images = useSelector((state) => state.carousel.images)
    return <Swiper
        slidesPerView={3.5}
        keyboard={true}
        direction="horizontal"
        mousewheel={true}
        spaceBetween={3.5}
        className={styles.carousel}
    >
        {images.map(image => <SwiperSlide className={styles.slide} key={"swiper" + image}>{createElement("img", {
            src: image,
            key: image
        })}</SwiperSlide>)}
    </Swiper>
}

export default Carousel;