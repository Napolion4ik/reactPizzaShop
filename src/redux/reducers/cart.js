const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalCountAndPrice = (items) => {
    let count = 0;
    let price = 0;
    for (let key in items) {
        count += items[key].length;
        price += items[key].reduce((prevValue, item) => {
            return item.price + prevValue;
        }, 0);
    }
    return [count, price];
};

const cart = (state = initialState, { payload, type }) => {
    switch (type) {
        case "ADD_PIZZA_CART": {
            const newItems = {
                ...state.items,
                [payload.id]: !state.items[payload.id]
                    ? [payload]
                    : [...state.items[payload.id], payload],
            };
            const [count, price] = getTotalCountAndPrice(newItems);

            return {
                ...state,
                items: newItems,
                totalCount: count,
                totalPrice: price,
            };
        }
        case "CLEAN_UP_CART": {
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            };
        }
        case "DELETE_PIZZA": {
            const newItems = { ...state.items };
            delete newItems[payload.id];

            const [count, price] = getTotalCountAndPrice(newItems);

            return {
                ...state,
                items: newItems,
                totalCount: count,
                totalPrice: price,
            };
        }
        case "MINUS_ONE_PIZZA": {
            state.items[payload.id].pop();
            if (!state.items[payload.id].length) {
                delete state.items[payload.id];
            }
            const newItems = { ...state.items };
            const [count, price] = getTotalCountAndPrice(newItems);

            return {
                ...state,
                items: newItems,
                totalCount: count,
                totalPrice: price,
            };
        }
    }
    return state;
};

export default cart;
