import axios from "axios"

const BASE_URL = "http://localhost:8888/api"

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