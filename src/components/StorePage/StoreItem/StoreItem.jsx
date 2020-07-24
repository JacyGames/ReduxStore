import React from "react";
import "./StoreItem.css"

export const StoreItem = ({name, price, description,setInBusket ,id}) => {
    return (



            <tr>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td><button className="btn btn-primary" onClick={setInBusket.bind(this,id,name)}>Add to card</button></td>
            </tr>





    )
}