import { Link, useActionData, useRouteError } from "react-router-dom";
import style from "../Style/Errorpage/errorpage.module.css";

export function Errorpage(){
    const error = useRouteError();
    return(
        <>
        <div className={style.errorSection}>
            <div className={style.error}>
                <h1 className={style.massage}>Простите, но похоже страница не работает.</h1>
                <h2 className={style.status}>Статус ошибки: <div className={style.statusError}>{error.status}</div></h2>
                <h3 className={style.asnwer}>Проверте правильность вашей ссылки или попоробуйте перезапустить страницу.</h3>
                <h3 className={style.answer}>Если это не помогло найти проблему то мы постораемся исправить все как можно скорее.</h3>
                <Link to={'/'}><button className={style.returnBtn}>Вернутся на главную</button></Link>
            </div>
        </div>
        </>
    );
}