import React from 'react'
import Input from './Input'
import List from './List'

export default function Try({listEdit, tryList}) {
  return (
    <div>
      <Input listEdit={listEdit}/>
      {tryList.map((list)=>(
        <List key={list.id} list={list}/>
      ))}
    </div>
  )
}