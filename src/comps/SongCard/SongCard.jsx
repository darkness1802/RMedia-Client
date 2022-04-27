import React from 'react'
import "./SongCard.css"
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'
import { useRecoilState, useRecoilValue } from 'recoil'
import { queue, currentIndex, trackListInfo } from "../../root/atoms"

function SongCard({ playlist }) {
  const _trackListInfo = useRecoilValue(trackListInfo)
  const _queue = useRecoilValue(queue)
	const _currentIndex = useRecoilValue(currentIndex)
  return (
    <div className='songCard flex'>
      <AlbumImage url={_queue[_currentIndex]?.image}/>
      <AlbumInfo tracks={_queue[_currentIndex]}/>
    </div>
  )
}

export default SongCard