export default function EditForm(props){
  const editContent= (e) => {
    e.preventDefault();
    const newContent = e.target.form[0].value;
    props.list.content = newContent;
    props.func();
  }
  return(
    <div className="editForm">
      <form>
        <input type="text"/>
        <button onClick={()=>editContent}>변경</button>
      </form>
    </div>
  )
}