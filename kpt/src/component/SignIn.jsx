import { Info } from "../data";
import { IDtoName } from "../data";

export default function SignIn({getInfo, page}, props) {
  const checkInfo = (e) => {
    let name = e.target.form[0].value;
    let id = e.target.form[1].value;
    let pw = e.target.form[2].value;
    
    if(name === ''){
      e.preventDefault();
      alert('이름을 입력해주세요.');
    }else if(id === ''){
      e.preventDefault();
      alert('아이디를 입력해주세요.');
    }else if(pw === ''){
      e.preventDefault();
      alert('비밀번호를 입력해주세요.');
    }
  
    if(Object.keys(Info).includes(id)) {
      e.preventDefault();
      alert('이미 존재하는 아이디입니다.');
    }else{
      Info[id] = pw;
      IDtoName[id] = name;
      getInfo(id);
      page('Home');
    }
  }

  return (
    <form className="signInForm">
      <h2>회원가입</h2>
      <div className="InfoInput">
        <div className="nameInput">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
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
        <button onClick={checkInfo}>회원가입</button>
      </div>
    </form>
  );
}