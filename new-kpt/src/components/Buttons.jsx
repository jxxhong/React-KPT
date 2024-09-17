import React from 'react'

export default function Buttons({children, handleSelect}) {
  return (
    <button onClick={()=>handleSelect(children)}>{children}</button>
  )
}
