import React from "react";




function HRmax(){

    function getHRmaxresults(){
        const age = document.getElementById('age').value;
        const results = 220 - age;
        document.getElementById('age').value = results
    }

    function getHRmaxperc(){
        const 
    }
    
    return(
        <div>
            <h1>Hello</h1>
            <input type='text' id='age' placeholder="Enter Age"/><br />
            <button type='button' id='getHRmax' onClick={getHRmaxresults}/>
        </div>
    );
}



export default HRmax; 
