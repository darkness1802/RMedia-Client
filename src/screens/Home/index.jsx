import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Sidebar from '../../comps/Sidebar'
import { useRecoilValue } from 'recoil'
import { playingTrack } from '../../root/atoms'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Feed from '../Feed'
import Browser from '../Browser'
import Player from '../Player'
import Trending from '../Trending'
import Favorite from '../Favorite'

import "./Home.css"

function Home() {
  const _playingTrack = useRecoilValue(playingTrack)
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
        />
      </div>
    </div>
  </BrowserRouter>
}

export default Home