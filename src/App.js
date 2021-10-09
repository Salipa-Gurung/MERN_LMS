import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
const [data,setData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/test')
      .then((res)=>{
        setData(res.data.data)
      })
  },[])

  return (
    <div className="App">
      {
        data.map((person)=>(
          <h1 key={person.id}>{person.name}</h1>
        ))
      }
    </div>
  );
}

export default App;
