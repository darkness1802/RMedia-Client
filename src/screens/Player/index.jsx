import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import "./Player.css"
import { Request } from '../../youtubeAPI'
import SongCard from '../../comps/SongCard/SongCard'
import Queue from '../../comps/Queue/Queue'
import AudioPlayer from '../../comps/AudioPlayer/AudioPlayer'

function Player() {
	// 11:00

	const [tracks, setTracks] = useState({})
	const [currentTrack, setCurrentTrack] = useState(null)

	const getAudioStream = async () => {
		try {
			let {data} = await Request.Get(`/info?id=PLFgquLnL59akRMJSw9kQVct_1TqO2EBN0&type=playlist`)
			console.log(data.videos)
			document.title = data.title
			setTracks(data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getAudioStream()
		// if (location.state) {
		// 	console.log(location.state.id);
		// 	getAudioStream()
		// }
	}, [])

	const location = useLocation()
	return <div className='screen-container flex'>
		<div className="left-player">
			<AudioPlayer />
		</div>
		<div className="right-player">
			<SongCard playlist={tracks} />
			<Queue playlist={tracks} setCurrentTrack={setCurrentTrack} />
		</div>
	</div>

}

export default Player