import { Link } from "react-router-dom";
import style from "../../Style/MainContent/mainContent.module.css"

export function MainContent(){
    return(
        <div className={style.contentSection}>
            <div className={style.content}>
                <div className={style.titleSection}>
                    <div className={style.title}>
                        <div className={style.titleHeader}>
                            <h1>Привет, и добро пожаловать на <strong>LanCards</strong></h1>
                            <h2>
                                Этот сайт создан для тех кто хотел бы улучшить свои знания языков и хочет использовать
                                метод флеш-карт для запоминания. Метод изучения языков с использованием карточек с 
                                рисунками и словами, также известный как метод флеш-карт, имеет множество преимуществ
                                и практических аспектов.
                            </h2>
                        </div>
                        <ul>
                            <li>Рисунки помогают запомнить слова быстрее и эффективнее, так как визуальная информация легче усваивается мозгом.</li>
                            <li>Сочетание слов и рисунков способствует созданию ассоциаций, что улучшает запоминание и понимание слов.</li>
                            <li>Карточки позволяют легко повторять материал, что является ключевым элементом в запоминании новых слов и выражений.</li>
                            <li>Вы можете создавать карточки, которые соответствуют вашим интересам и потребностям, что делает процесс обучения более персонализированным.</li>
                        </ul>
                        <h2>Пример использования:</h2>
                        <ul>
                            <li>Добавте на карточку картинку которая асоциируется у вас с вашим словом и запишите это слово в карточку.</li>
                            <li>Проходите различные задания для проверки ваших знаний.</li>
                            <li>Регулярно повторяйте карточки, чтобы закрепить материал.</li>
                        </ul>
                    </div>
                </div>

                <div className={style.startSection}>
                    <div className={style.start}>
                        <h1 className={style.startTitle}>Это очень просто, достаточно только начать</h1>
                        <Link to={"/cards/create"}><button className={style.startBtn}>Попробовать !</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}