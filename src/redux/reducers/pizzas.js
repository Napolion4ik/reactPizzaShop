const initialState = {
    items: [],
    isLoaded: false,
};

const pizzas = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_PIZZAS":
            return {
                ...state,
                items: payload,
                isLoaded: true,
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoaded: payload,
            };
    }
    return state;
};

export default pizzas;
