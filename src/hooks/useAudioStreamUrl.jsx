import { useState, useEffect } from 'react'
import { Request } from '../youtubeAPI'

export default function useAudioStreamUrl({ ID }) {
    const [url, setUrl] = useState('')
    useEffect(() => {
        const getAudioStream = async () => {
            try {
                let { data } = await Request.Get(`/stream?id=${ID}&type=audio`)
                console.log(data.videos)
                setUrl(data)
            } catch (error) {
                console.log(error)
        }
        }
        getAudioStream()
    }, [])
    return url
}