 import styles from "./MainPage.module.css"
import Header from "./Header/Header";
import Main from "./Content/Content";

const MainPage = () => {
    return (
        <div className={styles.frame}>
            <Header/>
            <Main/>
        </div>
    )
}

export default MainPage;