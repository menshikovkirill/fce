import React from 'react';
import { useState, useEffect } from 'react';
import { DictionaryApi } from '../api';
import { Loader } from '../components/generic/Loader';
import { Chapter } from '../components/chapter/';
const dictionaryApi = new DictionaryApi();

export const Dictionary = () => {
    const [words, setWords] = useState([]);
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        dictionaryApi.getAllChapterNames().then(data => {
            setChapters(data);
        });
    }, []);

    return (
        chapters.length == 0 
        ? <Loader /> 
        : <div className="chapter-list">
            {chapters.map(({id, name, isOwnChapter}) => (
                <Chapter key={id} id={id} name={name} isOwnChapter={isOwnChapter}/> //todo
            ))}
        </div> 
    )
}