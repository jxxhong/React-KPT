export default function Button({onSelect, children}){
  return(
    <button onClick={onSelect}>{children}</button>
  );
}