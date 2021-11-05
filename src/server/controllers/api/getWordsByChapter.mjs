import { selectQuery } from "./utils.mjs"

export function getWordsByChapter (req, res) {
    selectQuery(req, res, 'dictionary', `chapterId = ${req.params.chapterId}`)
}