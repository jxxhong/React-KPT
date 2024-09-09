import React, { useState } from "react";
import Memo from "./Memo";

export default function MemoGroup({list}, props) {
    return (
      <div className="memogroup">
      {list.map((memo)=>(
        <Memo key={memo.date} content={memo.content} date={memo.date}/>
      ))}
      </div>
    );
}