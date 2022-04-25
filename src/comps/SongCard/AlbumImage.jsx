import React from 'react'
import "./SongCard.css"


function AlbumImage({ url }) {
  return <div className='albumImage flex'>
    <img src={url} alt='album' className='albumImage-art' />
    <div className="albumImage-shadow">
      <img src={url} alt='album' className='albumImage-shadow' />
    </div>
</div>
}

export default AlbumImage