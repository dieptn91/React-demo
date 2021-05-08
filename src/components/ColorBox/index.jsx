import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};
function getRandomColor(){
    //const COLOR_LIST = ['red','blue','black','green','yellow','deeppink'];
    let r = Math.trunc(Math.random()*256);
    let g = Math.trunc(Math.random()*256);
    let b = Math.trunc(Math.random()*256);
    //const random = Math.trunc(Math.random()*6);
    const randomColor = 'rgb('+r+','+g+','+b+')';
    return randomColor;
}

function ColorBox() {
    const [color,setColor] = useState(()=>{
        const initColor = localStorage.getItem('local_color') || 'deeppink';
        return initColor;
    });

    function changeColor(){
        const newColor = getRandomColor();
        localStorage.setItem('local_color',newColor);
        return setColor(newColor);
    }
    return (
        <>
        <h1 style={{color:localStorage.getItem('local_color')}}>Welcome to Color Box</h1>
        <div 
        className="color-box"
        style={{backgroundColor:color}}
        onClick={changeColor}
        >   
        </div>
        </>     
    );
}

export default ColorBox;