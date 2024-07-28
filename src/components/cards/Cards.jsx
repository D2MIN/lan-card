import { Link, Navigate, Outlet } from "react-router-dom";
import style from "../../Style/Cards/cards.module.css";
import { Card } from "./Card";
import { useRef, useState } from "react";

export function Cards(){

    const jsonData = JSON.parse(localStorage.getItem('cards'));
    const storage = useRef( jsonData == null? [] : jsonData );
    const [cards, setCards] = useState(renderPage());

    function deleteCard(storage){
        setCards(storage.map((elem) => 
            <Card key={elem.id} changePage={deleteCard} id={elem.id} img={elem.img} word={elem.word} wordTranslete={elem.wordTranslete}/>));
    }

    function renderPage(){
        return (storage.current.map((elem) => 
            <Card key={elem.id} changePage={deleteCard} id={elem.id} img={elem.img} word={elem.word} wordTranslete={elem.wordTranslete}/>));
    }


    return(
        <div className={`${style.cardsSection} main`}>
            <div className={style.cards}>
                <div className={style.createCardSection}>
                    <h1 className={style.createTitle}>Привет, можешь добавить свою карточку сдесь</h1>
                    <Link to="./create"><button className={style.createBtn}>Создать карточку</button></Link>
                </div>
                
                <div className={style.allCardsSection}>
                    <div className={style.allCards}>
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    );
}