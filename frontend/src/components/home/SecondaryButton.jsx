import React from 'react'

function SecondaryButton({title, onClick}) {
  return (
    <a onClick={onClick} className="bg-primary w-[200px] border border-primary text-white px-8 py-3 font-medium 
                rounded-md hover:bg-blue-800 hover:text-white cursor-grab">{title}</a>
  )
  
}

export default SecondaryButton
