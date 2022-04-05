import React, { useState,  useEffect }  from "react";
import { DictionaryApi } from "../../api";
import { Loader } from "../generic/Loader";

const dictionaryApi = new DictionaryApi();
import './chapter.scss';

export const Chapter = ({id, name, isOwnChapter}) => {
    const [words, setWords] = useState([]);
    const [loader, setLoader] = useState(false);
    const [deletedId, setDeletedId] = useState(undefined);

    useEffect(() => {
        dictionaryApi.getWordsByChapter(id).then(data => {
            setWords(data);
            setLoader(true);
        });
    }, []); 

    useEffect(() => {
        setWords(words.filter(word => word.id !== deletedId));
    }, [deletedId]);

    function deleteWord(e, id) {
        e.preventDefault();
        setDeletedId(id);
        dictionaryApi.deleteWordById(id);
    }

    return (
        loader ? <div className="chapter" key={id}>
            <h3>{name}</h3>
            <ul>
                {words.map(({id, russia, english}) => (
                    <li key={id} className="words-block">
                        <div>{english}</div>
                        <div>{russia}</div> 
                    </li>
                ))}
            </ul>
        </div> : <Loader />
    )
}