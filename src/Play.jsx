import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'
import axios from 'axios'

function Play() {
    let { id } = useParams()
    let [playing, setPlaying] = useState("")
    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:8888/api/stream?id=${id}&type=audio`).then(res => {
            setPlaying(res.data)
        })
    })
    return (
        <div>
            <Link to={`/`}>{" << Back "}</Link>

            <br />

            <ReactAudioPlayer
                src={`http://localhost:8888/api/stream?id=${id}&type=audio`}
                autoPlay
                loop
                controls
            />

        </div>
    )
}

export default Play