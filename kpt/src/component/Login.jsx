import { Info } from "../data";

export default function Login({getInfo, page}, props) {
  const checkInfo = (e) => {
    let id = e.target.form[0].value;
    let pw = e.target.form[1].value;
    if (Info[id] !== pw) {
      e.preventDefault();
      alert('아이디 또는 비밀번호를 확인해주세요!');
    }else{
      console.log('success');
      getInfo(id);
      page('Home');
    }
  }
  
  return (
    <form className="loginForm">
      <h2>로그인</h2>
      <div className="InfoInput">
        <div className="idInput">
          <p>ID</p>
          <input type="text" id="id" />
        </div>
        <div className="pwInput">
          <p>Password</p>
          <input type="password" id="pw" />
        </div>
      </div>
      <div className="submitBtn">
        <button onClick={checkInfo}>로그인</button>
      </div>
    </form>
  );
}