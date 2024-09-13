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
  const [nickname, setNickname] = useState(null);

  let viewContent, viewButton;

  function viewSelect(viewName) {
    setViewChange(viewName);
  }
  function userInfo(id) {
    setUser(id);
    setNickname(IDtoName[id]);
  }
  keepMemo.sort((a, b) =>{
    return b.date - a.date;
  })
  problemMemo.sort((a, b) =>{
    return b.date - a.date;
  })
  tryMemo.sort((a, b) =>{
    return b.date - a.date;
  })

  if (viewChange === 'Home') {
    viewContent = <div className='memogroup'>
      <MemoGroup list={keepMemo.slice(0,4)} key='Keep' />
      <MemoGroup list={problemMemo} key='Problem' />
      <MemoGroup list={tryMemo} key='Try' />
    </div>
  } else if (viewChange === 'Keep') {
    viewContent = <MemoList page={viewSelect} val={viewChange} list={keepMemo} writeBy={nickname} className='keepList'/>
  } else if (viewChange === 'Problem') {
    viewContent = <MemoList page={viewSelect} val={viewChange} list={problemMemo} writeBy={nickname} className='problemList'/>
  } else if (viewChange === 'Try') {
    viewContent = <MemoList page={viewSelect} val={viewChange} list={tryMemo} writeBy={nickname} className='tryList'/>
  } else if (viewChange === 'Log In') {
    viewContent = <div className='logInPage'>
      <Login
        page={viewSelect}
        getInfo={userInfo} />
    </div>
  } else if (viewChange === 'Sign In') {
    viewContent = <div className='SignInPage'>
      <SignIn
        page={viewSelect}
        getInfo={userInfo} />
    </div>
  }

  if (user === null) {
    viewButton = <>
      <li><Button onSelect={() => viewSelect('Log In')}>Log In</Button></li>
      <li><Button onSelect={() => viewSelect('Sign In')}>Sign In</Button></li>
    </>
  } else {
    viewButton = <>
      <li><Button onSelect={() => setUser(null)}>Log Out</Button></li>
    </>
  }

  return (
    <div className='contentView'>
      <div className='navbar'>
        <nav>
          <li><Button onSelect={() => viewSelect('Home')}>Home</Button></li>
          <li><Button onSelect={() => viewSelect('Keep')}>Keep</Button></li>
          <li><Button onSelect={() => viewSelect('Problem')}>Problem</Button></li>
          <li><Button onSelect={() => viewSelect('Try')}>Try</Button></li>
          {viewButton}
          {user ? <p className='showInfo'>{nickname}님, <br/>환영합니다!</p> : ''}
        </nav>
      </div>
      <div className='content'>
        {viewContent}
      </div>
    </div>
  );
}

export default App;
