export class Api {
    get baseUrl() {
        return 'http://fcesait.na4u.ru/api/';
    }
    async send(url) {
        return fetch(this.baseUrl + url).then(res => {
            return res.json()
        });
    }
}

export class DictionaryApi extends Api{
    get url() {
        return 'dictionary';
    }

    async getAllWords() {
        return await this.send(this.url + '/list');
    }

    async getAllChapterNames() {
        return await this.send(this.url + '/chapter/list');
    }

    async getWordsByChapter(id) {
        return await this.send(this.url + '/list/' + id);
    }

    async deleteWordById(id) {
        return await this.send(this.url + '/list/delete/' + id);
    }

    async createWord(russia, english, chapter) {
        return await this.send(`${this.url}/create/${russia}/${english}/${chapter}/`);
    }
}