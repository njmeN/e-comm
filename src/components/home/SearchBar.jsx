import React from 'react'

export const SearchBar = () => {
  return (
    <div className='border-2 border-secondary w-[30%] flex justify-between rounded-md'>
    <input className='pl-3 w-full outline-0' type='text' placeholder='Search query...'/>
    <input className='bg-primary font-bold text-xl text-white px-5 py-3 cursor-pointer hover:bg-discount transition' type="submit" value='Search'/>
    </div>
  )
}
