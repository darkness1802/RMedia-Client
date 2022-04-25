import React from 'react'
import "./SongCard.css"
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'

function SongCard({ playlist }) {
  return (
    <div className='songCard flex'>
      <AlbumImage url={playlist?.image}/>
      <AlbumInfo tracks={playlist.videos}/>
    </div>
  )
}

export default SongCard