import { Link, NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import style from "../../Style/main/main.module.css";
import "../../Style/global/global.css";

export function Main(){
    return(
        <div className="main">
            <header className={style.header}>
                <NavLink to={'/'}>Главная</NavLink>
                <NavLink to={'/cards'}>Мои карточки</NavLink>
                <NavLink to={'/exercices'}>Упражнения</NavLink>
            </header>
            <div className={'body'}>
                <Outlet/>
            </div>
            <footer>
                <div className="footer">
                    <h3>Надеюсь вам понравился и был полезен этот сайт</h3>
                    <a href="https://github.com/"><img src="/icons/GitHub.png" alt="GitHub" /></a>
                </div>
            </footer>
            <ScrollRestoration />
        </div>
    );
}