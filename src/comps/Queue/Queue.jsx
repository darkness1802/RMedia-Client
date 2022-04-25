import React from 'react'
import "./Queue.css"

function Queue({ playlist, setCurrentTrack }) {
	console.log(`Queue:`, playlist);
	return <div className='queue flex'>
		<div className="queue-items flex">
			<p>Up Next</p>
			<div className="queue-list">
				{ playlist && playlist?.videos?.map((track, index) => (
					<div key={index} onClick={() => setCurrentTrack(track)} className="queue-item flex">
						<p className='track-name'>{track.title}</p>
						<p>0:00</p>
					</div>
				)) }
			</div>
		</div>
	</div>
}

export default Queue