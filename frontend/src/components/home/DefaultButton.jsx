import React from 'react'

function DefaultButton({title, onClick}) {
  return (
    <a onClick={onClick} className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                rounded-md hover:bg-blue-950 hover:text-white cursor-grab">{title}</a>
  )
}

export default DefaultButton
