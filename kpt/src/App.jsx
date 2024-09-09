import { useState } from 'react';
import './App.css';
import { keepMemo, problemMemo, tryMemo } from './data';
import MemoGroup from './component/MemoGroup';
import Button from './component/Button';

function App() {
  const [viewChange, setViewChange] = useState('Home');
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
    viewContent = <div className='content'>
        <MemoGroup list={keepMemo} key='_keep' />
      </div>
  }else if(viewChange === 'Problem'){
    viewContent = <div className='content'>
        <MemoGroup list={problemMemo} key='_problem' />
      </div>
  }else if(viewChange === 'Try'){
    viewContent = <div className='content'>
        <MemoGroup list={tryMemo} key='_Try' />
      </div>
  }else if(viewChange === 'Log In'){
    viewContent = <div className='content'>
        <p>empty</p>
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
