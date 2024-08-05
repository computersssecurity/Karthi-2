import React from 'react';
import './App.css';
import Home from './Page/Home';
import {HashRouter,Route,Routes} from "react-router-dom"
import Bike from './Page/Bike';
import AccesoriesHomepage from './Page/AccesoriesHomepage';
import SignIn from './Page/Sign In';
import TestDrive from './Page/Testdrive'
import Contactus from './Page/Contactus'
import Signup from './Page/Signup'
import Parts from './Page/Parts'
import Productdetails from './Page/Productdetails';

export const UserContext = React.createContext();
function App() {
  const [user, setUser] = React.useState(null) 
  return (
    <HashRouter>
    <UserContext.Provider value={{user, setUser}}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/bike" element={<Bike/>}/>
      <Route path="/accessories" element={<AccesoriesHomepage/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/testdrive" element={<TestDrive/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/parts" element={<Parts/>}/>
      <Route path='/product/:id' element={<Productdetails />} />
    </Routes>
    </UserContext.Provider>
  </HashRouter>
  );
}

export default App;
