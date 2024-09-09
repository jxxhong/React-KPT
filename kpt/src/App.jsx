import { useState } from 'react';
import './App.css';
import { keepMemo, problemMemo, tryMemo } from './data';
import MemoGroup from './component/MemoGroup';
import Button from './component/Button';

function App() {
  const [viewChange, setViewChange] = useState('Home');
  function viewSelect(viewName){
    setViewChange(viewName);
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
      <div className='content'>
        <MemoGroup list={keepMemo} key='_keep' />
        <MemoGroup list={problemMemo} key='_problem' />
        <MemoGroup list={tryMemo} key='_try' />
      </div>
    </div>
  );
}

export default App;
