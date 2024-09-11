import Memo from "./Memo";

export default function MemoGroup({list}, props) {
    return (
      <div className="memogroup">
      {list.map((memo)=>(
        <Memo key={memo.date+memo.content} content={memo.content} date={memo.date} writer={memo.writer}/>
      ))}
      </div>
    );
}