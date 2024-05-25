import React from 'react'

const Card = ({title,url}) => {
  return (
    <div className="w-[300px] border-2 border-white p-[3px] mb-10 mx-1 max-h-fit">
      <div className="overflow-hidden">
        <div className="mt-5 mx-10">
          <img src={url} />
        </div>

        <div className=" text-center p-4 text-white">
          <p className="font-bold text-lg leading-6">{title}</p>          
        </div>
      </div>
    </div>
  )
}

export default Card
