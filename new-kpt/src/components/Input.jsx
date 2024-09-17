import React, { useEffect } from 'react'

export default function Input({ listEdit }) {
  function addList(e) {
    if (e.target[0].value !== '') {
      const today = new Date();
      let year = today.getFullYear().toString();
      let month = (today.getMonth() + 1).toString();
      if (month.length === 1) month = '0' + month;
      let date = today.getDate().toString();

      let input = {
        content: e.target[0].value,
        date: year + month + date,
        writer: 'anonymous',
        id: Date.now(),
      };
      listEdit(input);
    }else {
      e.preventDefault();
      alert('내용을 입력해주세요!');
    }
  }

  return (
    <div>
      <form onSubmit={addList}>
        <input type="text" id="listAdd" />
        <button type='submit'>추가</button>
      </form>
    </div>
  )
}
