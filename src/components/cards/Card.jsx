import { Link } from "react-router-dom";
import style from "../../Style/Cards/card.module.css";

export function Card({changePage,id,img,word,wordTranslete}){


    const jsonData = JSON.parse(localStorage.getItem('cards'));

    function deleteCard(event){
        const ID = event.target.id;
        const newJsonData = jsonData.filter((el) => el.id != ID);
        localStorage.setItem('cards', `${JSON.stringify(newJsonData)}`);
        changePage(newJsonData);
    }

    return(
        <div className={style.cardSection}>
            <button onClick={deleteCard} id={id} className={style.closeBtn}></button>
            <div className={style.card}>
                <div className={style.img}>
                    <img src={img} alt="" />
                </div>
                <div className={style.word}><h3>{word}</h3><p>{wordTranslete}</p></div>
            </div>
        </div>
    );
}