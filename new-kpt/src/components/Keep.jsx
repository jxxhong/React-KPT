import React from 'react'
import Input from './Input'
import List from './List'

export default function Keep({listEdit, keepList}) {
  return (
    <div>
      <Input listEdit={listEdit}/>
      {keepList.map((list)=>(
        <List key={list.id} list={list}/>
      ))}
    </div>
  )
}
