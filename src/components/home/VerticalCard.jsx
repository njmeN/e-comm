import React from 'react'

export default function VerticalCard(props) {


  return (
    <div className='flex flex-col w-[200px] min-w-[150px] gap-4 justify-center items-center '>
      <img className='w-[27%] h-[27%]' src={props.image} />
      <h3 className='w-full font-semibold text-xl text-[#22262A] text-center '>{props.title}</h3>
      <p className='w-[70%] text-[14px] text-center text-[#363636] leading-4'>{props.text}</p>
    </div>
  )
}
