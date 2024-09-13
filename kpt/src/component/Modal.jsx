import React, {useState} from "react";
import EditForm from "./EditForm";
import DeleteForm from "./DeleteForm";

export default function Modal(props) {
  const [viewChange, setViewChange] = useState();

  function closeModal() {
    props.closeModal();
    modalContent = (
      <>
        <button
          className="editBtn"
          onClick={()=>setViewChange('edit')}>edit</button>
        <button
          className="deleteBtn"
          onClick={()=>setViewChange('delete')}>delete</button>
      </>
    )
  }
 
  let modalContent = (
    <>
      <button
        className="editBtn"
        onClick={()=>setViewChange('edit')}>edit</button>
      <button
        className="deleteBtn"
        onClick={()=>setViewChange('delete')}>delete</button>
    </>
  );

  if(viewChange === 'edit'){
    modalContent = <EditForm 
    func={props.closeModal} 
    list={props.list}/>
  }else if(viewChange === 'delete'){
    modalContent = <DeleteForm 
    func={props.closeModal} 
    list={props.list}/>
  }

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {modalContent}
      </div>
    </div>
  );
}