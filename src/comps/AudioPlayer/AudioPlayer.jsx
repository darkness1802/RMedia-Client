import React, { useState, useEffect, useRef } from 'react'
import "./AudioPlayer.css"
import { Request } from '../../youtubeAPI'
import ProgressCircle from './ProgressCircle'
import WaveAnimation from './WaveAnimation'
import Controls from './Controls'

// 1:37:00

function AudioPlayer({ currentTrack, currentIndex, setCurrentIndex, tracks, tracksList }) {

	/** @param {object} currentTrack :single audio track that is playing */
	/** @param {number} currentIndex :a item index of tracks */
	/** @param {array} tracks :playlist */
	/** @param {function} setCurrentIndex :use to change currentIndex on next or prev */

	const [isPlaying, setIsPlaying] = useState(false);
	const [trackProgress, setTrackProgress] = useState(0);
	var audioSrc = tracksList[currentIndex];

	const audioRef = useRef(new Audio(tracksList[0]))

	const intervalRef = useRef();

	const isReady = useRef(false);

	const { duration } = audioRef.current;

	const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

	const startTimer = () => {
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				handleNext();
			} else {
				setTrackProgress(audioRef.current.currentTime);
			}
		}, [1000]);
	};

	useEffect(() => {
		if (audioRef.current.src) {
			if (isPlaying) {
				audioRef.current.play();
				startTimer();
			} else {
				clearInterval(intervalRef.current);
				audioRef.current.pause();
			}
		} else {
			if (isPlaying) {
				audioRef.current = new Audio(audioSrc);
				audioRef.current.play();
				startTimer();
			} else {
				clearInterval(intervalRef.current);
				audioRef.current.pause();
			}
		}
	}, [isPlaying]);

	useEffect(() => {
		audioRef.current.pause();
		audioRef.current = new Audio(audioSrc);

		setTrackProgress(audioRef.current.currentTime);

		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			isReady.current = true;
		}
	}, [currentIndex]);

	useEffect(() => {
		console.log(`80`);
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	const handleNext = () => {
		if (currentIndex < tracksList.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else setCurrentIndex(0);
	};

	const handlePrev = () => {
		if (currentIndex - 1 < 0) setCurrentIndex(tracksList.length - 1);
		else setCurrentIndex(currentIndex - 1);
	};


	return <div className='audioPlayer flex'>
		<div className='audioPlayer-left'>
			<ProgressCircle
				percentage={currentPercentage}
				isPlaying={isPlaying}
				image={currentTrack?.image}
				size={300}
				color="#c96850"
			/>
		</div>
		<div className='audioPlayer-right flex'>
			<p className='audioPlayer-title'>Title</p>
			<p className='audioPlayer-artist'>Artist</p>
			<div className="audioPlayer-rightBottom flex">
				<div className="song-duration flex">
					<p className="duration">0:00</p>
					<WaveAnimation isPlaying={isPlaying} />
					<p className="duration">0:30</p>
				</div>
				<Controls
					isPlaying={isPlaying}
					setIsPlaying={setIsPlaying}
					handleNext={handleNext}
					handlePrev={handlePrev}
				/>
			</div>
		</div>
	</div>
	
}

export default AudioPlayer