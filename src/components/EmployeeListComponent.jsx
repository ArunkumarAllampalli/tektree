import React, {Component} from 'react';
import {Link} from  'react-router-dom';
import EmployeeService from '../services/EmployeeServices';
class EmployeeListComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
            employees:[]
        }
    }


    componentDidMount() {
        EmployeeService.getEmployees().then(
            (res)=>{
                this.setState({
                    employees:res.data
                })
            }
        );
    }


    render() {

        return (
            <React.Fragment>
                        <p className="h2 text-center">Employees  List</p>
                        <div className="container">
                            <div className="row">
                                <div className="col text-left">
                                   <Link to={'/add'} className={'btn btn-primary btn-sm'}>Add Employee</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <table className={'table table-bordered table-hover'}>
                                        <thead>
                                           <tr >
                                               <th className={'font-weight-bold'} >Employee Id</th>
                                               <th className={'font-weight-bold'}>Employee Name</th>
                                               <th className={'font-weight-bold'}>Employee Salary</th>
                                               <th className={'font-weight-bold'}>Actions</th>
                                           </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.state.employees.map(
                                                employee =>
                                                    <tr key = {employee.eid}>
                                                        <td>{employee.eid}</td>
                                                        <td>{employee.ename}</td>
                                                        <td>{employee.esal}</td>
                                                        <td>{<Link to={'/employee/'+employee.eid} className={'btn btn-primary btn-sm'}>Update</Link>}</td>
                                                    </tr>

                                            )
                                        }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
            </React.Fragment>
        );
    }
}

export default EmployeeListComponent;