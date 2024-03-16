import React from 'react'

function SecondaryButton({title, onClick}) {
  return (
    <a onClick={onClick} className="bg-secondary w-[200px] border border-primary text-white px-8 py-3 font-medium 
                rounded-md hover:bg-transparent hover:text-primary">{title}</a>
  )
  
}

export default SecondaryButton
