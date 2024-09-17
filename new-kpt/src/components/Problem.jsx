import React from 'react'
import Input from './Input'
import List from './List'

export default function Problem({listEdit, problemList}) {
  return (
    <div>
      <Input listEdit={listEdit}/>
      {problemList.map((list)=>(
        <List key={list.id} list={list}/>
      ))}
    </div>
  )
}