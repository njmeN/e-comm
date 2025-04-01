import React from 'react'

export const LatestNews = () => {
  const data = [
    {
      id:1,
      image: "./src/assets/icons/Nike.png",
      date: "01 Jan, 2015",
      title: "Fashion Industry",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id:2,
      image: "./src/assets/icons/figma.png",
      date: "01 Jan, 2015",
      title: "Best Design Tools",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id:3,
      image: "./src/assets/icons/kronos.png",
      date: "01 Jan, 2015",
      title: "HR Community",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
  ]
  return (
    <div className='py-11 w-full'>
      <h2 className='py-7 text-center font-bold'>LATEST NEWS</h2>

      <div className='flex w-full justify-around max-lg:flex-wrap max-lg:gap-9'>

    
      {
        data.map(brand =>{
          return(
         
              <div key={brand.id} className='flex w-[300px] gap-4 '>
              <img src={brand.image} alt="" className='w-[100px] object-contain'/>
              <div>
                <h2 className='text-[#707070] text-[12px]'>{brand.date}</h2>
                <h2 className='text-[16px] font-semibold'>{brand.title}</h2>
                <p className='text-[14px]'>{brand.content}</p>
              </div>
            </div>
            
          )
        })
      }
        </div>
    </div>
  )
}
