import fetch_url from '../common-var.js';

export default class {
    constructor() {
        this.url = fetch_url;
    }

    getArticles = async () => {
        const result = await fetch(this.url).then((response) => response.json())
                        .catch((err) => new Error(err));
        return result
    }
}