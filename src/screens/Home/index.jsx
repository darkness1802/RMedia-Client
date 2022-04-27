import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Sidebar from '../../comps/Sidebar'
import { useRecoilValue, useRecoilState } from 'recoil'
import { playingTrack, queue, currentIndex } from '../../root/atoms'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Browser from '../Browser'
import Player from '../Player'
import Trending from '../Trending'
import Favorite from '../Favorite'

import "./Home.css"

function Home() {
  const [_playingTrack, $playingTrack] = useRecoilState(playingTrack)
  const [_currentIndex, $currentIndex] = useRecoilState(currentIndex)
  const [_queue, $queue] = useRecoilState(queue)

  const handleNext = () => {
    
		if (_currentIndex < _queue.length - 1) {
      console.log("currentIndex + 1")
      $playingTrack(_queue[_currentIndex + 1].src)
			$currentIndex(prev => prev + 1)
		} else $currentIndex(0);
	}

  console.log(_queue);

  return <BrowserRouter>
    <div className='home-body'>
      <Sidebar />
      <Routes>
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/" element={<Browser />} />
      </Routes>
      <div className="player">
        <AudioPlayer style={{ display: "none" }}
          autoPlay
          src={_playingTrack}
          onPlay={e => console.log("onPlay")}
          onEnded={e => handleNext()}
        />
      </div>
    </div>
  </BrowserRouter>
}

export default Home