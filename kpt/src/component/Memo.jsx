import React from "react";

export default function Memo({content, date}) {
    return(
      <div className="memo">
        <p>{content}</p>
        <p>{date}</p>
      </div>
    );
}