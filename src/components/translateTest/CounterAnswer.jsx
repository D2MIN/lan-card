import style from "../../Style/translateTest/CounterAnswer.module.css";

export function CounterAnswer({count, maxCount}){
    return(
        <div className={style.counterAnswer}>
            <h3 className={style.title}>Тест окончен</h3>
            <p className={style.subTitle}>
                Вы ответили на <p className={style.count}>{count}</p> вопроса из <p className={style.count}>{maxCount}</p>
            </p>
            <p className={style.subTitle}>
                {count / maxCount > 0.6 ? 'Вы неплохо справились так держать' : 'Не так хорошо, но в следущий раз точно получится !'}
            </p>
        </div>
    );
}