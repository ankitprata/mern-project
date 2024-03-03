import React, { useState } from 'react';
import datas from './datas.json';


const Data = () => {
    const [nData, setData] = useState(datas);
    console.log(datas[0])

    const handleRemove=(itemid)=>{
        setData(nData.filter(items=>items.id!==itemid))
    }







    return (
        <div>
            <ul className='ankit'>

                {nData.map((items) => {
                    <li keys={items.id}>
                        {items.name}
                        <br/>
                        <button onClick={()=>handleRemove(items.id)}>Remove</button>
                    </li>
                   
                    

                })}

            </ul>
        </div>
    )
}
export default Data;