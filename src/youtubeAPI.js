import axios from "axios"

const BASE_URL = "https://dulcet-sunshine-7c07af.netlify.app/media"

class HTTP {
    constructor(url) {
        this.url = url
    }
    async Get(routes="", headers={}) {
        return (await axios.get(this.url+routes))
    }
    async Post(routes="", data, headers={}) {
        return (await axios.post(this.url+routes, data))
    }
}

export const Request = new HTTP(BASE_URL)