import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdQueue, MdPlayArrow } from 'react-icons/md'
import { Request } from '../../youtubeAPI'
import './Browser.css'
import { trackList, trackListInfo, playingTrack, queue } from "../../root/atoms"
import { useRecoilState } from 'recoil'


function Browser() {

	const [videos, setVideos] = useState([])
	const [_trackList, $trackList] = useRecoilState(trackList)
	const [_trackListInfo, $trackListInfo] = useRecoilState(trackListInfo)
	const navigate = useNavigate()

	const addToTrackListInfo = (data) => {
		$trackListInfo(prev => [...prev, data])
	}

	const playAudio = (video) => {
		addToTrackList(video.videoId)
		addToTrackListInfo(video)
		navigate(`/player`, { state: { title: video.title } })
	}

	const getStartedData = async () => {
		try {
			const { data } = await Request.Post('/search', { keyword: "lac troi", quantity: 12 })
			setVideos(data)
		} catch (error) {
			setVideos([])
		}
	}

	useEffect(() => {
		getStartedData()
	}, [])

	const addToTrackList = (id) => {
		Request.Get(`/stream?id=${id}&type=audio`).then(({ data }) => {
			$trackList(prev => [...prev, data])
			console.log(_trackList);
		})
	}

	const [searchData, setSearchData] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			let { data } = await Request.Post('/search', { keyword: searchData, quantity: 12 })
			setVideos(data)
		} catch (err) {
			console.log(err)
		}
	}

	return <div className='screen-container'>

		<form className='searchBox' onSubmit={handleSubmit}>
			
			<input onChange={({ target }) => setSearchData(target.value)} className='searchBar' type="text" placeholder="Search" />
			<button type="submit">Search</button>
		</form>

		<div className='library-body'>
			{videos && videos.map((video, index) => <VideoItem key={index} video={video} />)}
		</div>
	</div>
}

function VideoItem({ video }) {

	const [_playingTrack, $playingTrack] = useRecoilState(playingTrack)
	const [_queue, $queue] = useRecoilState(queue)
	const shortenTitle = (title) => {
		if (title.length > 25) {
			return title.substring(0, 25) + '...'
		}
		return title
	}

	const setPlayingTrack = async (video) => {
		const { data } = await Request.Get(`/stream?id=${video.videoId}&type=audio`)
		$playingTrack(data)
	}

	const addToQueue = async (video) => {
		const { data } = await Request.Get(`/stream?id=${video.videoId}&type=audio`)
		$queue(prev => [...prev, {
			title: video.title, 
			src: data, 
			videoId: video.videoId,
			image: video.image,
			duration: video.duration.timestamp
		}])

		if (!_playingTrack) {
			$playingTrack(data)
		} 
	}

	return <div
		className='video-card'>
		<img src={video.image} className='video-image' />
		<p className='video-title'>{shortenTitle(video.title)}</p>
		<p className='video-duration'>Duration: {video.duration.timestamp}</p>

		<div className="video-fade">
			<button onClick={() => setPlayingTrack(video)}><MdPlayArrow /></button>
			<button onClick={() => addToQueue(video)}><MdQueue /></button>
		</div>
	</div>
}

export default Browser