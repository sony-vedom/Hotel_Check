import styles from "./LoginForm.module.css"
import {Formik, Form, Field, ErrorMessage, useField} from "formik";
import * as Yup from 'yup';

const MyInput = ({label, ...props}) => {
    const [field, meta, helpers] = useField(props)
    return <div className={styles.form__formik__field}>
        <label className={styles.form__formik__field__label} htmlFor={props.name}>{label}</label>
        <input className={styles.form__formik__field__input} {...field} name={props.name} type={props.type}/>
        <ErrorMessage className={styles["form__formik__field_error"]} component="span" name={props.name}/>
    </div>
}

const LoginForm = () => {
    const validationSchema = Yup.object({
        login: Yup.string().email("Некорректный e-mail").required('Поле обязательно для заполнения'),
        password: Yup.string()
            .matches(/^[^а-яА-Я]+$/, "Нельзя использовать кириллические символы")
            .min(8, 'Должно быть 8 символов или больше')
            .required('Поле обязательно для заполнения')
    })
    return (
        <div className={styles.form}>
            <h3 className={styles.form__h2}>Simple Hotel Check</h3>
            <Formik initialValues={{login: "", password: ""}} onSubmit={() =>
                console.log("ппппп")} validationSchema={validationSchema}>
                {formik => (<Form className={styles.form__formik}>
                    <MyInput label="Логин" name="login" type="login"/>
                    <MyInput label="Пароль" name="password" type="password"/>
                    <div><button className={styles.form__formik__button}
                                type="submit" disabled={!formik.isValid}>Войти
                        </button></div>
                </Form>)}
            </Formik>
        </div>
    )
}

export default LoginForm;