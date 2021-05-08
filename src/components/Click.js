import { useState } from "react";

const Click =()=>{
    const [count,setCount] = useState(0);
    return(
        <>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </>
    );
}
export default Click;