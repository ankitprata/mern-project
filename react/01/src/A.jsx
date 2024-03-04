import React, {createContext} from "react";
import C from "./C";


const GreetContext=createContext();

export default function A()  {

    const greet = 'hello';
    return (
        <div>
<GreetContext.Provider value={greet}>
<C />
</GreetContext.Provider>
           
        </div>
    )
}
export {GreetContext}
