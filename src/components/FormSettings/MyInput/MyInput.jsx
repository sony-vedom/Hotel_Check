import {ErrorMessage, useField} from "formik";
import styles from "./MyInput.module.css";

const MyInput = ({label, frameStyle, labelStyle, ...props}) => {
    const [field] = useField(props)
    return <div className={styles.form__formik__field} style={frameStyle}>
        <label className={labelStyle} htmlFor={props.name}>{label}</label>
        <input className={styles.form__formik__field__input} {...field} name={props.name} type={props.type}/>
        <ErrorMessage className={styles["form__formik__field_error"]} component="span" name={props.name}/>
    </div>
}

export default MyInput