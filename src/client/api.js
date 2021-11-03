export class Api {
    get basename() {
        return 'http://fce-sait.na4u.ru/api/';
    }
    async send(url) {
        console.log(this.basename + url)
        return fetch(this.basename + url).then(res => res.json());
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
        return await this.send(this.url + '/list/'+id);
    }
}