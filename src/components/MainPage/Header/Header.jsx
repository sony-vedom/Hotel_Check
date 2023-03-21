import styles from "./Header.module.css"
import {ReactComponent as ExistSvg} from "../../../assets/image/icons/exit.svg";
import {useCookies} from "react-cookie";
import {Navigate} from "react-router-dom";


const Header = () => {
    const [cookies, setCookie] = useCookies(["login"]);
    const onClick = () => {
        setCookie("login", false, {  path : '/'  })
    }

    if (cookies.login === "false") {
        return <Navigate to={`/login`}/>
    }

    return (<header className={styles.header}>
            <span>Simple Hotel Check</span>
            <button type="button" className={styles.exist} onClick={onClick}>
                Выйти
                <ExistSvg/>
            </button>
        </header>
    )
}

export default Header;