import React from 'react'

const Abutton = ({label, onClick}) => {
  return (
    
      <button className='bg-blue-500 text-white px-4 py-2 cursor-pointer rounded'  onClick={onClick}>{label}</button>

  )
}

export default Abutton
