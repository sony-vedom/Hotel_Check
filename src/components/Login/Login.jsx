import styles from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
    return (
        <main className={styles.background}>
            <div className={styles.loginBackground__image}>
                <div className={styles.loginBackground__image__blur}>
                    <LoginForm/>
                </div>
            </div>
        </main>
    )
}

export default Login;