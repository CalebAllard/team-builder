import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import TeamMembers from "./components/TeamMembers";


function App() {
  const [membersList, setMembers] = useState([
    
    {
      id:1,
      name:'john doe'
    }
  
  
  ])
  const addNewMember = member => {
    const newItem = {
      id:Date.now(),
      name: member.name
    };
    setMembers([...membersList, newItem]);
    
  }


  return (
    <div className="App">
      <Form addNewMember={addNewMember}/> 
      <div className="card-container">

        <TeamMembers  members={membersList} />

      </div>
          
    </div>
    
  );
}

export default App;
