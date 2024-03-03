import React from "react";
import MobileList from "./MobileList";
import book from './book.json';





export default function Mobile() {

    return (
        <div>
            {book.map((ele) => {

                return <MobileList
                    image={ele.image}
                    title={ele.title}
                    price={ele.price}
                />


            })}



           

        </div>
    )
}

