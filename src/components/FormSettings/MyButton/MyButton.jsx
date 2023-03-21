import styles from "./MyButton.module.css";

const MyButton = ({disabled, style, text}) => {
    return <div>
        <button className={styles.form__formik__button} style={style}
                type="submit" disabled={disabled}>{`${text}`}
        </button>
    </div>
}

export default MyButton;