const initialState = {
        items: [],
        basket: {
            Fake: {
                id: 0,
                name: "none",
                count: "0",
                description: "none",
                price: "0"
            }
        },
    totalMoney: 0
    },
    SET_ITEMS = "SET_ITEMS",
    SET_BASKET = "SET_ITEMS_IN_BASKET",
    INCREASE_COUNT = "INCREASE_ITEMS_COUNT",
    DECREASE_COUNT = "DECREASE_ITEMS_COUNT",
    DELETE = "DELETE_ITEMS_FROM_BUSKET";


export const itemsReducer = (state = initialState, action) => {

    let deepCopying = () => {
        let copyBask = {};
        for (let item in state.basket) {
            let copyInside = {};
            for (let inside in state.basket[item]) {
                copyInside[inside] = state.basket[item][inside];

            }

            copyBask[item] = {...copyInside}
        }
        return copyBask;
    }

    switch (action.type) {
        case SET_ITEMS: {
            return {...state, items: [...action.items]}
        }
        case SET_BASKET: {

            //Deep copying object basket
            let copyBask = deepCopying();
            //Copying other items
            let items = state.items.concat(),
                filtered = items.filter(item => item.id === action.id);

            if (copyBask[action.name] === undefined) {
                filtered[0].count = 1;
                let price =  parseInt(state.totalMoney) + parseInt(filtered[0].price);
                return {...state, basket: {...copyBask, [action.name]: filtered[0]}, totalMoney: price}
            }
            if (copyBask[action.name]) {
                let price =  parseInt(state.totalMoney) + parseInt(copyBask[action.name].price);


                copyBask[action.name].count = copyBask[action.name].count + 1;


                return {...state, basket: {...copyBask}, totalMoney: price}
            }
            break;
        }
        case INCREASE_COUNT: {
            let copyBask = deepCopying();

            let price =  parseInt(state.totalMoney) + parseInt(copyBask[action.item].price);
            copyBask[action.item].count = 1 + copyBask[action.item].count;


            return {...state, basket: {...copyBask}, totalMoney: price}
        }
        case DECREASE_COUNT: {

            let copyBask = deepCopying();
            if(copyBask[action.item].count === 1) {
                return {...state};
            }

            copyBask[action.item].count =  +copyBask[action.item].count - 1;
            let price =  parseInt(state.totalMoney) - parseInt(copyBask[action.item].price);

            return {...state, basket: {...copyBask}, totalMoney: price}
        }
        case DELETE: {

            let copyBask = deepCopying(),
                price =  parseInt(state.totalMoney) - (parseInt(copyBask[action.item].count) * parseInt(copyBask[action.item].price));
         delete copyBask[action.item]




            return {...state, basket: {...copyBask}, totalMoney: price}
        }

        default:
            return {...state}
    }

}

export const setItems = (items) => ({type: SET_ITEMS, items});
export const setInBusket = (id, name) => ({type: SET_BASKET, id, name});
export const increaseCount = (item) => ({type: INCREASE_COUNT, item});
export const decreaseCount = (item) => ({type: DECREASE_COUNT, item});
export const deletItem = (item) => ({type: DELETE, item});
