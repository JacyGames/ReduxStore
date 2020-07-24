import React from "react";
import "./HomePage.css"


export const HomePage = ({name, count, description, price, increaseCount, decreaseCount, deletItem,
                             number}) => {

    if (name === "none") {
        return <tr><th scope="row">You haven't item to buy</th></tr>
    }

    return (

        <tr>
            <th scope="row">{number}</th>
            <td>{name ? name : "Here is a name of your basket item"}</td>
            <td>{description ? description : "This is item description"}</td>
            <td>{count ? count : "count undefined"}</td>
            <td>{price ? price : "0$"}</td>
            <td>
                <div>
                    <i className="icon-check-minus btnStyleDecrease"
                       onClick={decreaseCount.bind(this, name)}>
                    </i>



                    <i className="icon-plus-sign btnStyleIncrease"
                       onClick={increaseCount.bind(this, name)}>
                    </i>




                    <i className={"icon-trash btnStyleDelete"} onClick={deletItem.bind(this, name)}>

                    </i>
                </div>


            </td>
        </tr>
    )


}