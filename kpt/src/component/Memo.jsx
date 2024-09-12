import React from "react";

export default function Memo({content, date, writer}) {
    return(
      <div className="memo">
        <p className="memoContent">{content}</p>
        <p className="memoWrite">{date} {writer}</p>
      </div>
    );
}