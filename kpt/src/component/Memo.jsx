import React, { useState } from "react";
import Modal from "./Modal";

export default function Memo({ content, date, writer }, props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  return (
    <>
      <div
        onClick={() => setModalIsOpen(!modalIsOpen)}
        className="memo">
        <p className="memoContent">{content}</p>
        <p className="memoWrite">{date} {writer}</p>
      </div>
      {modalIsOpen && (
        <Modal list={props.list} closeModal={() => setModalIsOpen(!modalIsOpen) }/>
      )}
    </>
  );
}