import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

function LatestJobCards({ job }) {

  const navigate = useNavigate();


  return (
    <div onClick={() => navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-lg bg-white border border-gray-100 cursor-pointer hover:scale-110 transition-all duration-600 flex flex-col items-center text-center h-full'>
      <div className='w-full'>
        <h1 className='font-medium text-lg'>{job?.company?.companyName}</h1>
        <p className='text-sm text-gray-500'>India</p>
      </div>
      <div className='w-full'>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className='flex items-center justify-center flex-wrap gap-2 mt-4 w-full'>
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          {job?.salary} LPA
        </Badge>

      </div>



    </div>

  )
}

export default LatestJobCards
