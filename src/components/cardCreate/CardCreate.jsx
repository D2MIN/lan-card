import { useRef, useState } from "react";
import style from "../../Style/cardCreate/cardCreate.module.css";

export function CardCreate(){

    const jsonData = JSON.parse(localStorage.getItem('cards'));
    const storage = useRef( jsonData == null? [] : jsonData );
    const [formData, setFormData] = useState({img:'',word:'',wordTranslete:'',});

    function submit(event){
        event.preventDefault();
        storage.current.push({id:Math.random(), ...formData })
        localStorage.setItem('cards', `${JSON.stringify(storage.current)}`)
    }

    function changeForm(e){
        const obgForm = {...formData};
        obgForm[e.target.name] = e.target.value;
        setFormData(obgForm);
    }

    return(
        <div className={`${style.cardCreateSection} main`}>
            <div className={style.cardCreate}>
                <div className={style.title}><h1>Время создать новую карточку</h1></div>
                <div className={style.formCreate}>
                    <form onSubmit={submit} action="">
                        <div className={style.imgSection}>
                            <div className={style.img}>
                                <img src={formData.img || 'https://i.pinimg.com/originals/be/62/49/be6249e76ece65a472579ee14a672b11.png'} alt="" />
                            </div>
                            <input name="img" type="text" onChange={changeForm} value={formData.img} placeholder="Вставте ссылку на картинку"/>
                        </div>
                        <div className={style.wordsSection}>
                            <input name="word" type="text" className={style.word} onChange={changeForm} value={formData.word} placeholder="Введите слово"/>
                            <input name="wordTranslete" type="text" className={style.wordTranslase} onChange={changeForm} value={formData.wordTranslete} placeholder="Введите перевод"/>
                        </div>
                        <input name="submit" type="submit" value="Создать" />
                    </form>
                </div>
            </div>
        </div>
    );
}