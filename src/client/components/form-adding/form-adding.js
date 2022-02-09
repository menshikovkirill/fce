import React, { useState } from "react";
import { DictionaryApi } from "../../api";
import './form-adding.scss';

const dictionaryApi = new DictionaryApi();

export const FormAdding = ({callbackSubmit}) => {
    const [russia, setRussia] = useState("");
    const [english, setEnglish] = useState("");

    function submitForm(e) {
        e.preventDefault();
        dictionaryApi.createWord(russia, english, 7); //todo
        setRussia("");
        setEnglish("");
        callbackSubmit(Math.random());
    }

    return (
        <div className="form-adding">
            <form onSubmit={e => submitForm(e)}>
                <label>Russian</label> <input type="text" name="russia" onChange={e => setRussia(e.target.value)} value={russia}/><br /><br />
                <label>English</label> <input type="text" name="english" onChange={e => setEnglish(e.target.value)} value={english}/><br /><br />
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}