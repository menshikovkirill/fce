import { selectQuery } from "./utils.mjs";

export function getChapterNames(req, res) {
    selectQuery(req, res, 'chapter');
}