import React, { useState,  useEffect }  from "react";
import { DictionaryApi } from "../api";
import { Loader } from "./Loader";

const dictionaryApi = new DictionaryApi();

export const Chapter = ({id, name, wordsList}) => {
    const [words, setWords] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        dictionaryApi.getWordsByChapter(id).then(data => {
            setWords(data);
            setLoader(true);
        });
    }, [])
    return (
        loader ? <div className="chapter" key={id}>
            <h3>{name}</h3>
            <ul>
                {words.map(word => (
                    <li key={word.id}>{word.russia} - {word.english}</li>
                ))}
            </ul>
        </div> : <Loader />
    )
}