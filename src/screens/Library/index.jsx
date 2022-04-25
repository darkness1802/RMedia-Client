import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import { AiFillPlayCircle } from 'react-icons/ai'
import { Request } from '../../youtubeAPI'
import './Library.css'

function Library() {

	const [videos, setVideos] = useState([])
	const navigate = useNavigate()

	const playAudio = (id) => {
		navigate(`/player`, { state: { id }})
	}

	const getStartedData = async () => {
		try {
			const { data } = await Request.Post('/search', { keyword: "lac troi", quantity: 12 })
			console.log(data)
			setVideos(data)
		} catch (error) {
			setVideos([])
		}
	}

	const shortenTitle = (title) => {
		if (title.length > 25) {
			return title.substring(0, 25) + '...'
		}
		return title
	}

	useEffect(() => {
		getStartedData()
	}, [])

	return <div className='screen-container'>
		<div className='library-body'>
			{videos && videos.map((video, index) => <div key={index} 
			onClick={() => playAudio(video.videoId)} className='video-card'>
				<img src={video.image} className='video-image'/>
				<p className='video-title'>{shortenTitle(video.title)}</p>
				<p className='video-duration'>Duration: {video.duration.timestamp}</p>
				
			</div>)}
		</div>
	</div>
}

export default Library