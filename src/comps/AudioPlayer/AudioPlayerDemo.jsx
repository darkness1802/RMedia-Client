import React, { useState, useEffect, useRef } from 'react'

function AudioPlayerDemo({ tracksList }) {

    const [tracks, settracks] = useState([]);
    const audioRef = useRef(null);
    if (tracksList.length > 1) {
        console.log("done");
        audioRef.current = new Audio(tracksList[0])
        console.log(audioRef.current)
        audioRef.current.play()
    }

  return (
    <div>{ tracksList && tracksList.map((i, id) => {
        return <p key={id}>{i}</p>
    }) }</div>
  )
}

export default AudioPlayerDemo