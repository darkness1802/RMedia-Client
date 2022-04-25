import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useMediaStreamURL({ id, type, quality }) {
    const [mediaStreamURL, setMediaStreamURL] = useState("")

    const requestMediaStream = async (mediaID) => {
        try {
            let res = await axios
            .get(`http://localhost:4444/api/stream?id=${mediaID}&type=${type}&quality=${quality}`)
            console.log(res.data)
            setMediaStreamURL(res.data)
        } catch (e) {
            setMediaStreamURL("")
        }
    }
    useEffect(() => {
        requestMediaStream(id)
    }, [])

    return mediaStreamURL
}