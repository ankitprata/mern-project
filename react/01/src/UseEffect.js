import React, { useEffect, useState } from "react";

const UseEffect = () => {

    const [clicked, setClicked] = useState();
    const [count,setCount]=useState(0);
    useEffect(() => {
        alert('we r in use state')
    }, [clicked]);




    return (
        <div>
            <button onClick={() => setClicked('subscribe')} >Subscibr</button>
            <br />
            <hr />
            <button onClick={() => setClicked('to')}> to</button>
            <br />
            <hr />
            <button onClick={() => setClicked('DroptCout')}>DropCout</button>
            <h1>{clicked}</h1>
            <button onClick={()=>(setCount(count+1))} >Increament</button>
            <h1>{count}</h1>


        </div>
    )
}
export default UseEffect;