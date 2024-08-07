import { useEffect, useRef, useState } from "react";
import style from "../../../Style/exercises/findCards/findCards.module.css";
import { useNavigate } from "react-router-dom";
import { CounterAnswer } from "../CounterAnswer";
import { FindCards } from "./FindCards";

export function FindCardsTest(){

    const navigate = useNavigate();
    const Data = JSON.parse(localStorage.getItem('cards')) || 0;
    const [useCards, setUseCards] = useState(Data);
    const [showCards,setShowCards] = useState([0,0,0]);
    const [word, setWord] = useState('Слово');

    const [questions, setQuestions] = useState([])
    const clikedImgNum = useRef(-1);
    const countAnswer = useRef(0);
    const [count, setCount] = useState(Data.length);

    useEffect(()=>{
        if(!Data){
            navigate('/exercices') // Переделать на нормальный обработчик
        }
        createShowCards();
    },[]);

    function changeClicked(id){
        let cards = document.getElementsByClassName(`${style.imgConteiner}`);
        for(let card of cards){
            if(card.classList.contains(`${style.active}`)) {
                card.classList.remove(`${style.active}`);
            }
        }
        cards[id].classList.add(`${style.active}`);
        clikedImgNum.current = id;
    }

    function clearClicked(){
        let cards = document.getElementsByClassName(`${style.imgConteiner}`);
        for(let card of cards){
            card.classList.remove(`${style.active}`);
        }
        clikedImgNum.current = -1;
    }

    function calcAnswers(word,answer){
        if(clikedImgNum.current != -1){
            word == answer.word ? countAnswer.current += 1 : countAnswer.current += 0;
        }
        setCount(count - 1);
        console.log(count)
    }

    function createShowCards(){
        calcAnswers(word, questions[clikedImgNum.current]);
        if(count != 0){
            let threeCards = [];
            let copyData = [...Data]
            const questionCard = useCards[Math.floor(Math.random()*useCards.length)];
            for(let i = 0; i != 3;){
                let card = copyData[Math.floor(Math.random()*copyData.length)];
                if(card.id != questionCard.id && !threeCards.includes(card)){
                    threeCards.push(card);
                    i++;
                }
            }
            threeCards[Math.floor(Math.random()*3)] = questionCard;
            setUseCards(useCards.filter((card)=>card.id != questionCard.id));
            setWord(questionCard.word);
            setShowCards(threeCards.map((card)=>card.img));
            setQuestions(threeCards)
            clearClicked();
        }
    }

    return(
        <div className={`${style.findCards}`}>
            <div className={`${style.findCardSection}`}>
                <div className={style.count}>{Data.length - count - 1}/{Data.length}</div>
                {count == -1 ? 
                    <CounterAnswer count={countAnswer.current} maxCount={Data.length}/>: 
                    <FindCards word={word} changeClicked={changeClicked} createShowCards={createShowCards} showCards={showCards}/>
                }
                {count == -1?
                    <button className={style.exitButton} onClick={() => navigate('/exercices')}>Вернутся</button>:
                    ""
                }
            </div>
        </div>
    )
}