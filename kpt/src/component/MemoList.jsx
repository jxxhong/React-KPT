import { useState } from "react";
import InputForm from "./InputForm";
import MemoGroup from "./MemoGroup";

export default function MemoList(props){  
  let group = <MemoGroup list={props.list}/>
  let beforeState = props.list.length;
  const [state, setState] = useState(props.list.length);
  
  if(beforeState !== state){
    group = <MemoGroup list={props.list}/>
  }

  return(
    <>
      <InputForm page={props.page}func={setState} val={props.val} list={props.list} writeBy={props.nickname}/>
      {group}
    </>
  );
}