import axios from "axios";
const  EMPLOYEE_API_BASE_URL="http://localhost:9000/api/v1";
class EmployeeServices{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/employees")
    }
    addEmployee(employee){

        return axios.post(EMPLOYEE_API_BASE_URL+"/add",employee)
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"/employee/"+id)
    }
    delEmployeeById(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/employee/"+id)
    }
}
export default new EmployeeServices();