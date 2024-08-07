import { Link } from "react-router-dom";
import style from "../../Style/exercises/exercices.module.css";

export function Exercices(){
    return(
        <div className={`${style.exercicesSection} main`}>
            <div className={style.exercices}>
                <div className={style.title}>
                    <h1>Выбери упражнения и попрактикуй свои наваки</h1>
                </div>
                <div className={style.exercicesList}>
                    <ul className={style.list}>
                        <li className={style.listElem}>
                            <h2>Перевод слова</h2>
                            <p>В этом упражнении вам прийдется перевести ваше слово на ваш язык</p>
                            <div className={style.startBtn}>
                                <Link to={'./translate'}><button>Начать</button></Link>
                            </div>
                        </li>
                        <li className={style.listElem}>
                            <h2>Обратный перевод слова</h2>
                            <p>В этом упражнении вам прийдется перевести слово с вашего языка на другой</p>
                            <div className={style.startBtn}>
                                <Link to={'./translate-reverse'}><button>Начать</button></Link>
                            </div>
                        </li>
                        <li className={style.listElem}>
                            <h2>Сапопставление</h2>
                            <p>В этом упражнении вам прийдется сопоставить карткочки с вашими словами</p>
                            <p className={style.description}>Для этого упражнения нужно сделать побольше 3 карточек.</p>
                            <div className={style.startBtn}>
                                <Link><button>Начать</button></Link>
                            </div>
                        </li>
                        <li className={style.listElem}>
                            <h2>Поиск карточки</h2>
                            <p>В этом упражнении вам прийдется найти 1 карточку из 3 которая подходит вашему слову</p>
                            <p className={style.description}>Для этого упражнения нужно сделать побольше 3 карточек.</p>
                            <div className={style.startBtn}>
                                <Link to={'./findCards'}><button>Начать</button></Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}