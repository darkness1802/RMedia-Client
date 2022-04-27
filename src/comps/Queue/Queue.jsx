import "./Queue.css"
import { Request } from '../../youtubeAPI'
import { useState, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { trackList, trackListInfo, queue, currentIndex, playingTrack } from "../../root/atoms" 
function Queue({ playlist, setCurrentTrack }) {
	const [_trackList, $TrackList] = useRecoilState(trackList)
	const _queue = useRecoilValue(queue)
	const [_playingTrack, $playingTrack] = useRecoilState(playingTrack)
	const [_currentIndex, $currentIndex] = useRecoilState(currentIndex)
	// const addToTrackList = (track) => {
	// 	Request.Get(`/stream?id=${track.videoId}&type=audio`).then(({ data }) => {
	// 		$TrackList(prev => [...prev, data])
	// 		console.log(_trackList);
	// 	})
	// }

	const shortenTitle = (title) => {
		if (title.length > 26) {
			return title.substring(0, 26) + '...'
		}
		return title
	}

	const playNow = (index, track) => {
		$playingTrack(track.src)
		$currentIndex(index)
	}
	return <div className='queue flex'>
		<div className="queue-items flex">
			<p>Queue</p>
			<div className="queue-list">
				{ _queue && _queue.map((track, index) => (
					<div key={index} onClick={() => playNow(index, track)} className="queue-item flex">
						<p className='track-name'>{shortenTitle(track.title)}</p>
						<p>{track.duration}</p>
					</div>
				)) }
			</div>
		</div>
	</div>
}

export default Queue