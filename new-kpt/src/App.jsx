import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Keep from './components/Keep';
import Problem from './components/Problem';
import Try from './components/Try';

const initialKeepList = localStorage.getItem('keep') ? JSON.parse(localStorage.getItem('keep')) : [];
const initialProblemList = localStorage.getItem('problem') ? JSON.parse(localStorage.getItem('problem')) : [];
const initialTryList = localStorage.getItem('try') ? JSON.parse(localStorage.getItem('try')) : [];
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : [];

function App() {
  const [view, setView] = useState(<Main/>);
  const [keepList, setKeepList] = useState(initialKeepList);
  const [problemList, setProblemList] = useState(initialProblemList);
  const [tryList, setTryList] = useState(initialTryList);

  function keepChange(input){
    keepList.unshift(input);
    setKeepList(keepList);
    localStorage.setItem('keep', JSON.stringify(keepList));
  }

  function problemChange(input){
    problemList.unshift(input);
    setProblemList(problemList);
    localStorage.setItem('problem', JSON.stringify(problemList));
    handleSelect('Problem');
  }

  function tryChange(input){
    tryList.unshift(input);
    setTryList(tryList);
    localStorage.setItem('try', JSON.stringify(tryList));
    handleSelect('Try');
  }

  function handleSelect(viewSelect){
    if(viewSelect === 'Main'){
      setView(<Main keepList={keepList} problemList={problemList} tryList={tryList}/>);
    }else if(viewSelect === 'Keep'){
      setView(<Keep listEdit={keepChange} keepList={keepList}/>);
    }else if(viewSelect === 'Problem'){
      setView(<Problem listEdit={problemChange} problemList={problemList}/>);
    }else if(viewSelect === 'Try'){
      setView(<Try listEdit={tryChange} tryList={tryList}/>);
    }
  }

  return (
    <div className="App">
      <Nav handleSelect={handleSelect}/>
      {view}
    </div>
  );
}

export default App;
