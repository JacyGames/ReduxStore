import React from 'react'
import {HomePage} from "./HomePage";
import {connect} from "react-redux";
import {decreaseCount, deletItem, increaseCount} from "../../redux/reducers/itemsReducer";
import {MoneyBar} from "./MoneyBar/MoneyBar";

class MainHomePage extends React.Component {



    render() {
        let itemForMap = this.props.basket;


        let i = 0;

        let items = Object.keys(itemForMap).map((item) => {

            if(!(Object.keys(itemForMap).length === 1)) {
                if(itemForMap[item].name === "none") {
                    return false;
                }
            }


            return <HomePage key={itemForMap[item].id} name={itemForMap[item].name} count={itemForMap[item].count}
                             description={itemForMap[item].description}
                             price={itemForMap[item].price}
                             increaseCount={this.props.increaseCount}
                             decreaseCount={this.props.decreaseCount}
                             deletItem={this.props.deletItem}
                             number={++i}
            />
        })


        return <div>
            <MoneyBar totalMoney={this.props.totalMoney} />
            <table className="table table-hover">
                <TableHead />
                <tbody>
                {items}
                </tbody>

            </table>




        </div>
    }
}

let mapStateToProps = (store) => ({
    basket: store.itemsReducer.basket,
    totalMoney: store.itemsReducer.totalMoney

});

const TableHead = () => {
    return <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Descritption</th>
        <th scope="col">Numerosity</th>
        <th scope="col">Price</th>
        <th scope="col">Actions</th>
    </tr>
    </thead>
}

export default connect(mapStateToProps,{increaseCount, decreaseCount, deletItem})(MainHomePage)

