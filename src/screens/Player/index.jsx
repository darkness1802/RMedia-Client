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
	const [currentIndex, setCurrentIndex] = useState(0)
	const [tracksList, setTracksList] = useState([])

	const getAudioStream = async () => {
		try {
			let { data } = await Request.Get(`/info?id=PLFgquLnL59akRMJSw9kQVct_1TqO2EBN0&type=playlist`)
			document.title = data.title
			setTracks(data)
		} catch (error) {
			console.log(error)
		}
	}

	const getTrackList = async () => {
		try {
			let { data } = await Request.Get(`/tracklist?id=PLFgquLnL59akRMJSw9kQVct_1TqO2EBN0`)
			setTracksList(data)
		} catch (error) {
			setTracksList([])
		}
	}

	// get Media Stream URLs by Promise.all 
	useEffect(() => {
		getAudioStream()
		getTrackList()
		if (location.state) {
			console.log(location.state.title);
		}
	}, [])

	const location = useLocation()
	return <div className='screen-container flex'>
		<div className="left-player">
			{tracksList && <AudioPlayer currentTrack={tracksList[0]}
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
				tracks={tracks} 
			tracksList={tracksList} />}
		</div>
		<div className="right-player">
			<SongCard playlist={tracks} />
			<Queue playlist={tracks} setCurrentTrack={setCurrentTrack} />
		</div>
	</div>

}

export default Player