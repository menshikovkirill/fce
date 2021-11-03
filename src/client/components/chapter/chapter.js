import React, { useState,  useEffect }  from "react";
import { DictionaryApi } from "../../api";
import { Loader } from "../generic/Loader";

const dictionaryApi = new DictionaryApi();
import './chapter.scss';

export const Chapter = ({id, name, wordsList, wordsDeleted}) => {
    const [words, setWords] = useState([]);
    const [loader, setLoader] = useState(false);
    const [dataChange, setDataChange] = useState(0);
    const [formOpened, setFormOpened] = useState(false);

    useEffect(() => {
        dictionaryApi.getWordsByChapter(id).then(data => {
            setWords(data);
            setLoader(true);
        });
    }, []); 

    useEffect(() => {//TODO optimization
        dictionaryApi.getWordsByChapter(id).then(data => {
            setWords(data);
        });
    }, [dataChange]);

    function deleteWord(e, id) {
        e.preventDefault();
        dictionaryApi.deleteWordById(id).then(data => {
            setDataChange(count => count+1);
        });
    }

    return (
        loader ? <div className="chapter" key={id}>
            <h3>{name} <span>{id == 1 ? <a href="#" onClick={() => setFormOpened(true)}>+ добавить</a> : ""}</span></h3>
            {/*move to other component */}
            {formOpened && id == 1 ? <div className="form"> 
                <form method="POST" action="/api/dictionary/create/">
                    <label>Russian</label> <input type="text" name="russia" /><br /><br />
                    <label>English</label> <input type="text" name="english" /><br /><br />
                    <input type="submit" value="Send"/>
                </form>
            </div> : ""}
            <ul>
                {words.map(({id, russia, english}) => (
                    <li key={id}>
                        <span>{russia} - {english}</span> 
                        {wordsDeleted ? <a href="#" className="delete" onClick={(e) => deleteWord(e, id)}>удалить</a> : ""}
                    </li>
                ))}
            </ul>
        </div> : <Loader />
    )
}