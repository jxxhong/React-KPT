import { useState } from 'react';
import './App.css';
import { keepMemo, problemMemo, tryMemo } from './data';
import MemoGroup from './component/MemoGroup';
import Button from './component/Button';
import Login from './component/Login';

function App() {
  const [viewChange, setViewChange] = useState('Home');
  const [user, setUser] = useState();
  let viewContent;
  
  function viewSelect(viewName){
    setViewChange(viewName);
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
        <Login></Login>
      </div>
  }

  return (
    <div>
      <nav>
        <Button onSelect={()=>viewSelect('Home')}>Home</Button>
        <Button onSelect={()=>viewSelect('Keep')}>Keep</Button>
        <Button onSelect={()=>viewSelect('Problem')}>Problem</Button>
        <Button onSelect={()=>viewSelect('Try')}>Try</Button>
        <Button onSelect={()=>viewSelect('Log In')}>Log In</Button>
      </nav>
      {viewContent}
    </div>
  );
}

export default App;
