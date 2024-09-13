export default function Inputform({page, list, writeBy, func}){
  const date = new Date();
  let uploadList = {};

  const memoUpload = (e) =>{
    if(writeBy === null){
      alert('로그인 후 작성 가능합니다.');
      page('Log In');
    }

    e.preventDefault();
    const text = e.target.form[0].value;
    let nowDate = parseInt(date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()); 
    
    uploadList.content = text; 
    uploadList.date = nowDate;
    uploadList.writer = writeBy;
    list.push({...uploadList});
    func(list.length);
  }

  return(
    <form className="uploadForm">
      <input type="text" name="memoInput" id="memoInput" />
      <button onClick={memoUpload}>업로드</button>
    </form>
  );
}