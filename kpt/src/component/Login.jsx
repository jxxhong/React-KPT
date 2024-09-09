import Button from "./Button";
import { Info } from "../data";

const checkInfo = (e) => {
  let id = e.target.form[0].value;
  let pw = e.target.form[1].value;
  
  if (Info[id] !== pw) {
    e.preventDefault();
    alert('아이디 또는 비밀번호를 확인해주세요!');
  }else{
    console.log('success');
  }
}

export default function Login(props) {
  return (
    <form className="loginForm">
      <div className="InfoInput">
        <div className="idInput">
          <label htmlFor="id">ID</label>
          <input type="text" id="id" />
        </div>
        <div className="pwInput">
          <label htmlFor="pw">Password</label>
          <input type="password" id="pw" />
        </div>
      </div>
      <div className="submitBtn">
        <Button onSelect={checkInfo}>로그인</Button>
      </div>
    </form>
  );
}