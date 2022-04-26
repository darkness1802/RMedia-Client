import "./Queue.css"
import { Request } from '../../youtubeAPI'
import { useState, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { trackList, trackListInfo } from "../../root/atoms" 
function Queue({ playlist, setCurrentTrack }) {
	const [_trackList, $TrackList] = useRecoilState(trackList)
	const _trackListInfo = useRecoilValue(trackListInfo)
	console.log(_trackList);
	// const addToTrackList = (track) => {
	// 	Request.Get(`/stream?id=${track.videoId}&type=audio`).then(({ data }) => {
	// 		$TrackList(prev => [...prev, data])
	// 		console.log(_trackList);
	// 	})
	// }

	const shortenTitle = (title) => {
		if (title.length > 28) {
			return title.substring(0, 28) + '...'
		}
		return title
	}
	return <div className='queue flex'>
		<div className="queue-items flex">
			<p>Up Next</p>
			<div className="queue-list">
				{ _trackListInfo && _trackListInfo.map((track, index) => (
					<div key={index} className="queue-item flex">
						<p className='track-name'>{shortenTitle(track.title)}</p>
						<p>{track.duration.timestamp}</p>
					</div>
				)) }
			</div>
		</div>
	</div>
}

export default Queue