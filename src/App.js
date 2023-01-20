
import './App.css';

import {Route, Routes,BrowserRouter as Router, Link} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import EmployeeListComponent from "./components/EmployeeListComponent";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import RegisterNew from "./components/RegistreNew";
import FindEmployee from "./components/FindEmployee";
function App() {
  return (
    <div className="App">
      <div className="container mt-3">

        <Router>

            <Navbar/>

            <Routes>
                <Route path={'/'} exact element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/employees'} element={<EmployeeListComponent/>}/>
                <Route path={'/add'} exact element={<AddEmployee/>}/>
                <Route path={'/employee/id'} exact element={<FindEmployee/>}/>

            </Routes>
        </Router>


        {/*<EmployeeListComponent/>*/}

      </div>
    </div>
  );
}

export default App;
