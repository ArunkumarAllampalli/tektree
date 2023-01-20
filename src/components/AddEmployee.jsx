import React, {Component} from 'react';
import EmployeeServices from "../services/EmployeeServices";
import {useNavigate} from 'react-router-dom'
class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state={
           employee:{
               eid:0,
               ename:"",
               esal:0
           }
        }
    }
   updateInput=(event)=>{
        this.setState({
            employee:{
                ...this.state.employee,
                [event.target.name] : event.target.value
            }

        })
    }

    registerEmployee=(event)=> {
        event.preventDefault();

        EmployeeServices.addEmployee(this.state.employee).then((res) => {

        }).catch(error => {
            console.log(error + "#####........")
        })

    }

    render() {

        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <p className="h3">Register Here</p>
                                </div>
                                <div className="card-body">

                                    <form >
                                        <div className="form-group">
                                        <input name={'eid'}
                                            value={this.state.eid}
                                            onChange={this.updateInput}
                                            type={'number'} className={'form-control'} placeholder={'Employee Id'}/>
                                    </div>
                                    <div className="form-group">
                                        <input name={'ename'}
                                            value={this.state.ename}
                                               onChange={this.updateInput}
                                            type={'text'} className={'form-control'} placeholder={'Employee Name '}/>
                                    </div>
                                    <div className="form-group">
                                        <input  name={'esal'}
                                                value={this.state.esal}
                                                onChange={this.updateInput}
                                            type={'number'} className={'form-control'} placeholder={'Employee Salary'}/>
                                    </div>
                                    <div className="form-group">
                                        <button className={'btn btn-primary btn-sm'} onClick={this.registerEmployee}>Register</button>
                                    </div>
                                </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default AddEmployee;