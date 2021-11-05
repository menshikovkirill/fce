import { selectQuery } from "./utils.mjs";

export function getAllWords(req, res) { 
    selectQuery(req, res, 'dictionary');
}