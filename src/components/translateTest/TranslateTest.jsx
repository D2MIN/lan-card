import { useRef, useState } from 'react';
import style from '../../Style/translateTest/translateTest.module.css';
import { TranslateCard } from './TranslateCard';
import { useNavigate } from 'react-router-dom';
import { CounterAnswer } from './CounterAnswer';

export function TranslateTest(){

    const navigate = useNavigate();

    const data = JSON.parse(localStorage.getItem('cards')); // Массив обьектов карточек
    const cardList = useRef(data);
    // Рандомная карточка
    const [card,setCard] = useState(cardList.current[Math.floor(Math.random()*(cardList.current.length))]); 
    

    const [answer,setAnswer] = useState('');
    const countTrueAnswer = useRef(0); // Колличество правильных

    const [count,setCount] = useState(1); // Номер карточки

    function getRandom(n){
        return Math.floor(Math.random()*(n-1))
    }

    function getAnswer(event){
        event.preventDefault(); // Обнуление перезапуска страницы при отправки формы
        setAnswer('');
        setCount(count+1)
        cardList.current = cardList.current.filter((el)=>el.id != card.id); // Уменьшаем количество карточек
        setCard(cardList.current[getRandom(cardList.current.length)]);  // Устанавливаем новуую карточку
        if(answer.toLowerCase() == (card.wordTranslete).toLowerCase()){
            countTrueAnswer.current = countTrueAnswer.current + 1;  // устанавливаем правильные ответы
        }
    }

    return(
        <div className={` ${style.translateTestSection} main`}>
            <div className={style.translateTest}>
                <div className={style.count}>{count-1}/{data.length}</div>
                <div className={style.card}>
                    {count > data.length ? <CounterAnswer count={countTrueAnswer.current} maxCount={data.length}/> : <TranslateCard card={card} translateType={'direct'}/>}
                </div>
                <div className={style.answer}>
                    {count > data.length ? <button className={style.exitButton} onClick={() => navigate('/exercices')}>Вернутся</button> : 
                        <form onSubmit={getAnswer} className={style.form} action="">
                            <input onChange={(e)=>{setAnswer(e.target.value)}} value={answer} type="text" placeholder='Перевод'/>
                            <input onClick={getAnswer} type="button" value="Отправить" className={style.submitButton} />
                        </form>
                    }
                </div>
            </div>
        </div>
    );
}