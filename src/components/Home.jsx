import React,{useState} from "react";



let Home = () =>{
    let[inputValue,setInput]=useState("")
    let onchange=(event)=>{
        setInput(event.target.value)
    }
    return(
        <React.Fragment>
       <div className="container mt-3">
           <input type={'text'} placeholder={'Enter Text Here'} onChange={onchange}/>{inputValue}
       </div>
        </React.Fragment>
    );
}
export default Home;