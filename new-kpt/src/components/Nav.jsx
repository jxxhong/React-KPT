import React from 'react'
import Buttons from './Buttons'

export default function Nav({handleSelect}) {
  return (
    <div>
      <Buttons handleSelect={handleSelect}>Main</Buttons>
      <Buttons handleSelect={handleSelect}>Keep</Buttons>
      <Buttons handleSelect={handleSelect}>Problem</Buttons>
      <Buttons handleSelect={handleSelect}>Try</Buttons>
      <Buttons handleSelect={handleSelect}>LogIn</Buttons>
      <Buttons handleSelect={handleSelect}>SignIn</Buttons>
    </div>
  )
}
