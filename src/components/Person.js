import React from 'react';
import './Person/Person.css';
const Person = (props)=>{
    return(<div className="person">
<p onClick={props.click}>Hi Dev {props.name} Num {props.age}</p>
<h2>{props.children}</h2>
<input type="text" onChange={props.changed} value={props.name}></input>
</div>
    ) 
}
export default Person;