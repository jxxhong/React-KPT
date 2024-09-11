import { useState } from 'react';
import './App.css';
import { keepMemo, problemMemo, tryMemo } from './data';
import MemoGroup from './component/MemoGroup';
import Button from './component/Button';
import Login from './component/Login';
import SignIn from './component/SignIn';
import { IDtoName } from './data';

function App() {
  const [viewChange, setViewChange] = useState('Home');
  const [user, setUser] = useState(null);
  let viewContent, viewButton;

  function viewSelect(viewName){
    setViewChange(viewName);
  }
  function userInfo(id){
    setUser(id);
  }
  
  if(viewChange === 'Home'){
    viewContent = <div className='content'>
        <MemoGroup list={keepMemo} key='_keep' />
        <MemoGroup list={problemMemo} key='_problem' />
        <MemoGroup list={tryMemo} key='_try' />
      </div>
  }else if(viewChange === 'Keep'){
    viewContent = <div className='keepContent'>
        <MemoGroup list={keepMemo} key='_keep' />
      </div>
  }else if(viewChange === 'Problem'){
    viewContent = <div className='problemContent'>
        <MemoGroup list={problemMemo} key='_problem' />
      </div>
  }else if(viewChange === 'Try'){
    viewContent = <div className='tryContent'>
        <MemoGroup list={tryMemo} key='_Try' />
      </div>
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
    viewButton = <div className='beforeLogIn'>
      <Button onSelect={()=>viewSelect('Log In')}>Log In</Button>
      <Button onSelect={()=>viewSelect('Sign In')}>Sign In</Button>
    </div>
  }else{
    viewButton = <div className='afterLogIn'>
      <p>{IDtoName[user]}님, 환영합니다!</p>
      <Button onSelect={()=>setUser(null)}>Log Out</Button>
    </div>
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
