import { useState } from 'react';
import './App.css';
import { keepMemo, problemMemo, tryMemo } from './data';
import MemoGroup from './component/MemoGroup';
import Button from './component/Button';

function App() {
  const [viewChange, setViewChange] = useState('Home');
  
  return (
    <div>
      <nav>
        <Button>Home</Button>
        <Button>Keep</Button>
        <Button>Problem</Button>
        <Button>Try</Button>
        <Button>Log In</Button>
      </nav>
      <div className='content'>
        <MemoGroup list={keepMemo} key='_keep' />
        <MemoGroup list={problemMemo} key='_problem' />
        <MemoGroup list={tryMemo} key='_try' />
      </div>
    </div>
  );
}

export default App;
