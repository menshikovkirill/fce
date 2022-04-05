import React from 'react';
import { useState, useEffect } from 'react';
import { DictionaryApi } from '../api';
import { Loader } from '../components/generic/Loader';
import { Chapter } from '../components/chapter/';
import { FormAdding } from '../components/form-adding';
const dictionaryApi = new DictionaryApi();

export const Dictionary = () => {
    const [words, setWords] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [updateChapters, setUpdateChapters] = useState(0)

    const updateChapter = () => {
        dictionaryApi.getAllChapterNames().then(data => {
            setChapters(data);
        })
    }

    useEffect(() => { //очень плохой путь, нужно поправить
        setChapters([])
        dictionaryApi.getAllChapterNames().then(data => {
            setChapters(data);
        })
    }, [updateChapters]);



    return (
        <div className="dictionary-block">
            {
                chapters.length == 0 
                ? <Loader /> 
                : <div className="chapter-list">
                    {chapters.map(({id, name, isOwnChapter}) => (
                        <Chapter key={id} id={id} name={name} isOwnChapter={isOwnChapter}/> //todo
                    ))} 
                </div> 
            }
        </div>
    )
}