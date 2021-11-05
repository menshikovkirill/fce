import React, { useState } from "react";
import { DictionaryApi } from "../../api";
import './form-adding.scss';

const dictionaryApi = new DictionaryApi();

export const FormAdding = () => {
    const [russia, setRussia] = useState("");
    const [english, setEnglish] = useState("");

    function submitForm(e) {
        e.preventDefault();
        dictionaryApi.createWord(russia, english, 6); //todo
    }

    return (
        <div className="form-adding">
            <form onSubmit={e => submitForm(e)}>
                <label>Russian</label> <input type="text" name="russia" onChange={e => setRussia(e.target.value)}/><br /><br />
                <label>English</label> <input type="text" name="english" onChange={e => setEnglish(e.target.value)}/><br /><br />
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}