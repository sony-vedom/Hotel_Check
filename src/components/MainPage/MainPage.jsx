 import styles from "./MainPage.module.css"
import Header from "./Header/Header";
import Main from "./Content/Content";
 import {useCookies} from 'react-cookie';
 import {Navigate} from 'react-router-dom';


const MainPage = () => {
    const [cookies] = useCookies(["login"]);

    if (cookies.login !== "true") {
        return <Navigate to={`/login`}/>
    }
    return (
        <div className={styles.frame}>
            <Header/>
            <Main/>
        </div>
    )
}

export default MainPage;