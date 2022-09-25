import React from 'react';
import Feed from './Feed'
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="app">
 

<Header/>

{/* App Body */}

<div className='app__body'>
<Sidebar/> 
<Feed/> 

</div>


{/* Widgets */}


    </div>
  );
}

export default App;
