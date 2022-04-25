import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Sidebar from '../../comps/Sidebar'

import Feed from '../Feed'
import Library from '../Library'
import Player from '../Player'
import Trending from '../Trending'
import Favorite from '../Favorite'

import "./Home.css"

function Home() {
  return <BrowserRouter>
    <div className='home-body'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  </BrowserRouter>
}

export default Home