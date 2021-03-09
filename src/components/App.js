import logo from '../images/logo.svg';
import React from 'react';
import '../styles/App.css';
import UserLists from "./UserLists";
import TaskList from "./TaskList";

function App( { users } ) {
  return (
      <>
        <TaskList></TaskList>
      </>
  )
}
//<UserLists users={users}/>
export default App;