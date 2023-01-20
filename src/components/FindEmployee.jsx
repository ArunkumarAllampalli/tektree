import React, {Component} from 'react';
import EmployeeServices from "../services/EmployeeServices";

class FindEmployee extends Component {
    constructor(props) {
        super(props);
        this.state={
            employee : {
                eid:"",
                ename:"",
                esal:""
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

    registerEmployee=(event)=>{
        event.preventDefault();

    };
    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <p className="h3">Find Here</p>
                                </div>
                                <div className="card-body">

                                    <form onSubmit={this.registerEmployee}>
                                        <div className="form-group">
                                            <input name={'eid'}
                                                   value={this.state.employees.eid}
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
                                            <input type={'Submit'} className={'btn btn-sm btn-primary'} value={'Register'}/>
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

export default FindEmployee;