import style from '../../Style/Cards/card.module.css';

export function TranslateCard({card, translateType}){

    const data = {...card}
    
    return(
        <div className={style.cardSection}>
            <div className={style.card}>
                <div className={style.img}>
                    <img src={data.img} alt="" />
                </div>
                <div className={style.word}>
                    <h3>{translateType == 'direct' ? data.word : data.wordTranslete}</h3>
                    <p>????</p>
                </div>
            </div>
        </div>
    );
}