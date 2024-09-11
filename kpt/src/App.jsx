import { useState } from 'react';
import './App.css';
import { keepMemo, problemMemo, tryMemo, IDtoName } from './data';
import MemoGroup from './component/MemoGroup';
import Button from './component/Button';
import Login from './component/Login';
import SignIn from './component/SignIn';
import MemoList from './component/MemoList';

function App() {
  const [viewChange, setViewChange] = useState('Home');
  const [user, setUser] = useState(null);
  const nickname = IDtoName[user];
  
  let viewContent, viewButton;

  function viewSelect(viewName){
    setViewChange(viewName);
  }
  function userInfo(id){
    setUser(id);
  }
  
  if(viewChange === 'Home'){
    viewContent = <div className='content'>
      <MemoGroup list={keepMemo} key='Keep' />
      <MemoGroup list={problemMemo} key='Problem' />
      <MemoGroup list={tryMemo} key='Try' />
    </div>
  }else if(viewChange === 'Keep'){
    viewContent = <MemoList page={viewSelect} val={viewChange} list={keepMemo} writeBy={nickname}/>
  }else if(viewChange === 'Problem'){
    viewContent = <MemoList page={viewSelect} val={viewChange} list={problemMemo} writeBy={nickname}/>
  }else if(viewChange === 'Try'){
    viewContent = <MemoList page={viewSelect} val={viewChange} list={tryMemo} writeBy={nickname}/>
  }else if(viewChange === 'Log In'){
    viewContent = <div className='logInPage'>
        <Login 
        page={viewSelect}
        getInfo={userInfo}/>
      </div>
  }else if(viewChange === 'Sign In'){
    viewContent = <div className='SignInPage'>
        <SignIn 
          page={viewSelect}
          getInfo={userInfo}/>
      </div>
  }

  if(user === null){
    viewButton = <>
      <Button onSelect={()=>viewSelect('Log In')}>Log In</Button>
      <Button onSelect={()=>viewSelect('Sign In')}>Sign In</Button>
    </>
  }else{
    viewButton = <>
      <Button onSelect={()=>setUser(null)}>Log Out</Button>
      <p>{nickname}님, 환영합니다!</p>
    </>
  }

  return (
    <div>
      <nav>
        <Button onSelect={()=>viewSelect('Home')}>Home</Button>
        <Button onSelect={()=>viewSelect('Keep')}>Keep</Button>
        <Button onSelect={()=>viewSelect('Problem')}>Problem</Button>
        <Button onSelect={()=>viewSelect('Try')}>Try</Button>
        {viewButton}
      </nav>
      {viewContent}
    </div>
  );
}

export default App;
