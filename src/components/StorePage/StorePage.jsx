import React from "react";
import {StoreItem} from "./StoreItem/StoreItem";


export const StorePage = ({items, setInBusket}) => {
    return <div>
        This is a store Page

        <table className="table">
            <thead>
            <tr>
                <th scope="col">Item name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Add to basket</th>
            </tr>
            </thead>
            <tbody>
        {items.map(item => <StoreItem key={item.id} name={item.name} description={item.description}
                                      price={item.price} setInBusket={setInBusket} id={item.id}/>)}
            </tbody>
        </table>


        <div>

        </div>
    </div>
}