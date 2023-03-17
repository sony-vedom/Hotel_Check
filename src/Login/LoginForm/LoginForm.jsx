import styles from "./LoginForm.module.css"
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

const LoginForm = () => {
    const validationSchema = Yup.object({
        login: Yup.string().email().required("Некорректный форма"),
        password: Yup.string()
            .matches(/^[^а-яА-Я]+$/, "Некорректный формат")
            .min(8, 'Must be 8 characters or more')
            .required('Больше восьми символов')
    })
    return (
        <div className={styles.form}>
            <p className={styles.form__label}>Simple Hotel Check</p>
            <Formik initialValues={{login: "", password: ""}} onSubmit={() =>
                console.log("ппппп")} validationSchema={validationSchema}>
                <Form>
                    <label htmlFor="login">Логин</label>
                    <Field name="login" type="email"/>
                    <ErrorMessage name="login" />

                    <label htmlFor="password">Пароль</label>
                    <Field name="password" type="password"/>
                    <button type="submit">Войти</button>
                    <ErrorMessage name="password" />
                </Form>
            </Formik>
        </div>
    )
}

export default LoginForm;