import React,{useState}  from "react";
let About = () => {
    // let counter = 0;
    let[counter,changeValue]=useState(0)
    // const increment   =()=>{
    //     counter = counter + 1;
    //     console.log(counter)
    // };
    const increment   =()=>{
        changeValue(counter+1)
    };
    const decrement   =()=>{
        changeValue(counter-1)
    };
    return(
        <React.Fragment>
            <button className={'btn btn-primary btn-sm'} onClick={decrement}>Decrement</button>
            <h1>{counter}</h1>
            <button className={'btn btn-primary btn-sm'} onClick={increment}>Increment</button>
        </React.Fragment>
    );
}
export default About;