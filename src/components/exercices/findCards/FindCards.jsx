import style from "../../../Style/exercises/findCards/findCards.module.css";

export function FindCards({changeClicked, createShowCards,showCards, word}){
    return(
        <>
            <div className={style.findCard}>
                <div className={style.cards}>
                    <div onClick={()=>{changeClicked(0)}} className={style.imgConteiner}>
                        <img className={style.cardImg} src={showCards[0]} alt="" />
                    </div>
                    <div onClick={()=>{changeClicked(1)}} className={style.imgConteiner}>
                        <img className={style.cardImg} src={showCards[1]} alt="" />
                    </div>
                    <div onClick={()=>{changeClicked(2)}} className={style.imgConteiner}>
                        <img className={style.cardImg} src={showCards[2]} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.answerSection}>
                <div className={style.word}>
                    {word}
                </div>
                <div className={style.buttonAnswerSection}>
                    <button onClick={createShowCards} className={style.buttonAnswer}>Ответить</button>
                </div>
            </div>
        </>
    )
}