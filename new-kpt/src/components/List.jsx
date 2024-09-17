import React from 'react'

export default function List({list}) {
  return (
    <div>
      <p>{list.content}</p>
      <p>{list.date}</p>
      <p>{list.writer}</p>
    </div>
  )
}
