export default function DeleteForm(props){
  function deleteContent(e){
    e.preventDefault();
    let n = props.list.indexOf();
    console.log(n);
  }
  return(
    <div className="deleteForm">
      <form>
        <p>정말 삭제하시겠습니까?</p>
        <button onClick={()=>deleteContent}>삭제</button>
      </form>
    </div>
  )
}