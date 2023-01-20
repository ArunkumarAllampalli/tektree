import React, {Component} from 'react';
import {Link} from   'react-router-dom';
class Navbar extends Component {
    render() {
        return (
         <React.Fragment>
             <nav className={'navbar navbar-dark navbar-expand-md bg-dark'}>
                <div className="container">
                    <Link to="/" className={'navbar-brand'}>Home</Link>
                    <div className={'collapse navbar-collapse'}>
                        <ul className={'navbar-nav'}>
                            <li className={'nav-item px-2'}><Link to="/about">About</Link></li>
                            <li className={'nav-item px-2'}> <Link to="/employees">Employees</Link></li>
                            <li className={'nav-item px-2'}> <Link to="/add">Add Employees</Link></li>
                            <li className={'nav-item px-2'}> <Link to="/employee:id">update Employees</Link></li>

                        </ul>


                    </div>
                </div>
             </nav>
         </React.Fragment>
        );
    }
}
export default Navbar;