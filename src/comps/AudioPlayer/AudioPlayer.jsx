import React, { useState, useEffect } from 'react'
import "./AudioPlayer.css"
import ProgressCircle from './ProgressCircle'
import WaveAnimation from './WaveAnimation'
import Controls from './Controls'

// 1:37:00

function AudioPlayer({ currentTrack, setCurrentTrack }) {
    
    /** @param {object} currentTrack is single audio track */

    let [isPlaying, setIsPlaying] = useState(false)
    let total = 0

    const handleNext = () => {

    }

    const handlePrev = () => {

    }

    return <div className='audioPlayer flex'>
        <div className='audioPlayer-left'>
            <ProgressCircle 
                percentage={75} 
                isPlaying={true} 
                image={currentTrack?.image}
                size={300}
                color="#c96850"
            />
        </div>
        <div className='audioPlayer-right flex'>
            <p className='audioPlayer-title'>Title</p>
            <p className='audioPlayer-artist'>Artist</p>
            <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:00</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
        </div>
    </div>
}

export default AudioPlayer