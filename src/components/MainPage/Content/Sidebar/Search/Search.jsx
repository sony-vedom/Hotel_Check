import styles from "./Search.module.css";
import {Form, Formik} from "formik";
import MyInput from "../../../../FormSettings/MyInput/MyInput";
import MyButton from "../../../../FormSettings/MyButton/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {setSearchData} from "../../../../../redux/reducers/search";
import {deleteResult, hotelsList} from "../../../../../redux/reducers/hotelsList";
import {useEffect} from "react";


const Search = () => {
    const dateObj = new Date().toISOString().slice(0,10)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        dispatch(deleteResult())
        dispatch(setSearchData({location: e.location, days: e.daysAmount, checkInDate: e.date}))
    }
    useEffect(() => {
        dispatch(setSearchData({location: "Москва", days: "1", checkInDate: dateObj}))
    }, [])
    return (
        <section className={styles.search}>
            <Formik initialValues={{location: "Москва", date: dateObj, daysAmount: "1"}} onSubmit={onSubmit}>
                {formik => (<Form className={styles.form__formik }>
                    <MyInput label={"Локация"} name="location" type="text" labelStyle={styles.form__formik__field__label} frameStyle={{width: "296px"}}/>
                    <MyInput label={"Дата заселения"} name="date" type="date" labelStyle={styles.form__formik__field__label} frameStyle={{width: "296px"}}/>
                    <MyInput label={"Количество дней"} name="daysAmount" type="text" labelStyle={styles.form__formik__field__label} frameStyle={{width: "296px"}}/>
                    <MyButton disabled={!formik.isValid} style={{width: "296px", marginTop: "16px"}} text={"Найти"}/>
                </Form>)}
            </Formik>
        </section>
    )
}

export default Search;