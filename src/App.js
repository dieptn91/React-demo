
import { render } from '@testing-library/react';
import { useState } from 'react';
import './App.css';
import './components/ColorBox/colorbox.css';
import Click from './components/Click';
import ColorBox from './components/ColorBox';
import Person from './components/Person';

function App() {
  const [toggle,setToggle] = useState('true');
  const [person,setPerson] = useState(
    [
      {name:"max",age:"10"},
      {name:"max 2",age:"9"},
      {name:"max 3",age:"8"}
    ]
  );
const changeClick = ()=>{
  setPerson(
    [
      {name:"max 4",age:"1"},
      {name:"max 5",age:"2"},
      {name:"max 6",age:"3"}
    ]
  );
}
const switchChangeInput =(event)=>{
  return(
    setPerson([
      {name:event.target.value,age:'10'},
      {name:"max 5",age:"2"},
      {name:"max 6",age:"3"}
    ])
  );
}
const stylecustom = {
  backgroundColor:'green',
  color:'white',
};
let classes=[];
// classes =['red','bold'];
if(person.length<=1)classes.push('red');
if(person.length<=2)classes.push('bold');
let personList = null;
  if(toggle===true){
    personList=(
<div>{
  person.map((item,index)=>{
    // return<Person changed={switchChangeInput} click={changeClick} name={item.name} age={item.age}>This is children</Person>
    return<Person changed={switchChangeInput} click={()=>deletedPerson(index)} name={item.name} age={item.age}>This is children</Person>
          })
  }        
  </div>
    );
    stylecustom.backgroundColor = 'blue'; 
    
  }
const deletedPerson =(personIndex)=>{
  let newPerson = [...person];
  newPerson.splice(personIndex,1);
  setPerson(newPerson);
}

const changeToggle =()=>{
    return setToggle(!toggle);   
}
    return (
      <>
      <div className="App">
        {/* <button onClick={()=>changeClick()}>Click me!</button>
        <h1 className="col-xs-6 col-lg-12">Welcome to Tutorial</h1>
        <p className={classes.join(' ')}>This class dynamic</p> */}
        {/* <Person changed={switchChangeInput} click={changeClick} name={person[0].name} age={person[0].age}>This is children</Person>
        <Person changed={switchChangeInput} click={changeClick} name={person[1].name} age={person[1].age}/>
        <Person changed={switchChangeInput} click={changeClick} name={person[2].name} age={person[2].age}/> */}
        {/* <Click />
        <button style={stylecustom} onClick={()=>changeToggle()}>Toggle</button>
        {personList} */}
        <ColorBox/>
      </div>
      </>
    );
  }


export default App;
