import React from "react";

export default function Memo({content, date, writer}) {
    return(
      <div className="memo">
        <p>{content}</p>
        <p>{date}</p>
        <p>{writer}</p>
      </div>
    );
}