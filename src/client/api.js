export class Api {
    get basename() {
        return 'http://fce-sait.na4u.ru/api/';
    }
    async send(url) {
        return fetch(this.basename + url).then(res => {
            console.log(res)
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
}