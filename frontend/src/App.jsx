import { useState } from 'react';
import './App.css';



import io from  'socket.io-client'
//socket connect of develop krne k liye

const socket=io("http://localhost:5000");

const App = () => {

  const[joined,setJoined]=useState(false);

  if(!joined){
    return (
      <div>App not joined</div>
    )
  }

  return <div>APP not joined</div>;
  
};

export default App;