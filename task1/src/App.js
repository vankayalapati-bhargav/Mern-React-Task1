import {useState,useEffect} from 'react';
import './App.css';
function App() {
  const [text,setText]=useState('');
  const [wordCount,setWordCount]=useState(0);
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  useEffect(() => {
    const words=text.split(' ');
    let wordCount=0;
    words.forEach((word) => {
      if(word.trim() !== ''){
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);
  return (
    <div id="id1">
      <p id="id2"><b>Responsive Paragraph Word</b></p>
      <p id="id2"><b>Counter</b></p>
      <textarea className="class1" value={text} onChange={changeHandler}></textarea>
      <p id="id3">Word Count: {wordCount}</p>
    </div>
  );
}
export default App;