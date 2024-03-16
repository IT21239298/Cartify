import React from 'react'

function SecondaryButton({title, onClick}) {
  return (
    <a onClick={onClick} className="bg-secondary w-[200px] border border-primary text-primary px-8 py-3 font-medium 
                rounded-md hover:bg-blue-950 hover:text-white">{title}</a>
  )
  
}

export default SecondaryButton
