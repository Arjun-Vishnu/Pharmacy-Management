import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
     <Navbar /> 
     <div className='name'>
      <h1>Medi Care</h1>
      </div>
     <div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AW4o3BRoCvwl5j_W-V0HGADCyBSax20U4g&usqp=CAU" alt="Image description" class="img-fluid"/>
    </div>
  </div>
</div>
    </div>
  );

}

export default App;
