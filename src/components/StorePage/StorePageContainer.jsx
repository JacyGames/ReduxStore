import React from "react";
import {StorePage} from "./StorePage";
import {setInBusket, setItems} from "../../redux/reducers/itemsReducer";
import {connect} from "react-redux";
import {myServiceApi} from "../../notRealApi/api";


class StorePageContainer extends React.Component {

    myService = new myServiceApi();

    state = {
        isFetching: false
    }
    setFetching = (boolean) => {
        this.setState({
            isFetching: boolean
        })
    }


    componentDidMount() {
        this.setFetching(true);

        this.myService.getFromServerItems().then((result) => {
            this.props.setItems(result);
            this.setFetching(false);
        })

    }

    render() {
        if(this.state.isFetching) {
            return <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }

        return <StorePage items={this.props.items} setInBusket={this.props.setInBusket}/>
    }
}




const mapDispatchToProps = (store) => ({
    items: store.itemsReducer.items
})

export default connect(mapDispatchToProps,{setItems, setInBusket})(StorePageContainer);