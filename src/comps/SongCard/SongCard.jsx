import React from 'react'
import "./SongCard.css"
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'
import { useRecoilState, useRecoilValue } from 'recoil'
import { trackList, trackListInfo } from "../../root/atoms"

function SongCard({ playlist }) {
  const _trackListInfo = useRecoilValue(trackListInfo)
  console.log(_trackListInfo[0])
  return (
    <div className='songCard flex'>
      <AlbumImage url={_trackListInfo[0]?.image}/>
      <AlbumInfo tracks={_trackListInfo[0]}/>
    </div>
  )
}

export default SongCard