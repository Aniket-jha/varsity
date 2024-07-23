import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import useAnalyticsEventTracker from './useAnalyticsEventTracker';
const RoomCard = ({image,title,content,subContent}) => {
  const gaEventTracker = useAnalyticsEventTracker('Enquire Form Rooms');
  return (
    <div className='shadow-md bg-[#ebe3d67b] hover:shadow-xl rounded-lg my-3 lg:my-0' >
        <div className='px-3 py-3' >
            <img className='rounded-lg' src={image} />
        </div>
        <div className='my-0 flex items-center px-3 lg:px-3 justify-center flex-col text-center' >
            <h4 className='font-[NeueMedium] text-[2rem]' >{title}</h4>
            <p className="font-[NeueMedium] h-[20px] text-[#FC7451]" >{subContent} </p>
            <p className='font-[NeueRegular] mt-1 ' >{content}</p>
            <div className='my-3' >
           
            </div>
        </div>
    </div>
  )
}

export default RoomCard