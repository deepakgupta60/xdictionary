import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [search, setSearch]=useState("")
  const [result, setResult]=useState(null)
  const data=
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ]
  
  const handleSearch=()=>{
   let filterData = data.find((data)=>data.word.toLowerCase()===search.toLowerCase())
   if(filterData)
   {
    setResult(filterData.meaning)
   }
   else
   {
    setResult("Word not found in the dictionary.")
   }
  }

  return (
    <div className="App">
     
     <h1>Dictionary App</h1>
     <div>

      <input type='text' onChange={(e)=>setSearch(e.target.value)} placeholder='Search for a word...'/>
      <button onClick={handleSearch}>Search</button>

      <p>Definition:</p>
      <span>{result}</span>
     </div>

    </div>
  );
}

export default App;
