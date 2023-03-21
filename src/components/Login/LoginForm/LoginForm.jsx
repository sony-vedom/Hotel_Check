import styles from "./LoginForm.module.css"
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import MyInput from "../../FormSettings/MyInput/MyInput";
import MyButton from "../../FormSettings/MyButton/MyButton";
import {useCookies} from 'react-cookie';
import {Navigate} from 'react-router-dom';

const LoginForm = () => {
    const validationSchema = Yup.object({
        login: Yup.string().email("Некорректный e-mail").required('Поле обязательно для заполнения'),
        password: Yup.string()
            .matches(/^[^а-яА-Я]+$/, "Нельзя использовать кириллические символы")
            .min(8, 'Должно быть 8 символов или больше')
            .required('Поле обязательно для заполнения')
    })

    const [cookies, setCookie] = useCookies(["login"]);

    const onSubmit = () => {
        setCookie("login", true, {path: '/'})
    }

    if (cookies.login === "true") {
        return <Navigate to={`/`}/>
    }

    return (
        <div className={styles.form}>
            <h3 className={styles.form__h2}>Simple Hotel Check</h3>
            <Formik initialValues={{login: "", password: ""}} onSubmit={onSubmit} validationSchema={validationSchema}>
                {formik => (<Form className={styles.form__formik}>
                    <MyInput label="Логин" name="login" type="login" frameStyle={{width: "345px"}}
                             labelStyle={styles.form__formik__field__label}/>
                    <MyInput label="Пароль" name="password" labelStyle={styles.form__formik__field__label}
                             frameStyle={{width: "345px"}} type="password"/>
                    <MyButton isValid={!formik.isValid} style={{marginTop: "8px", width: "345px"}} text={"Войти"}/>
                </Form>)}
            </Formik>
        </div>
    )
}

export default LoginForm;