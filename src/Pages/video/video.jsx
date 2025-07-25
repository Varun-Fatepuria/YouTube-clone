import React from 'react'
import './video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommanded from '../../Components/Recommanded/Recommanded'
import { useParams } from 'react-router-dom'
const video =()=>{
    const {videoId,categoryId} = useParams();
    return (
        <div className='play-container'>
            <PlayVideo videoId={videoId}/>
            <Recommanded categoryId={categoryId}/>
        </div>
    )
}
export default video
