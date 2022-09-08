const initialState = {
    sortBy: "popular",
    category: null,
};

const filters = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_SORT_BY":
            return {
                ...state,
                sortBy: payload,
            };
        case "SET_CATEGORY":
            return {
                ...state,
                category: payload,
            };
    }
    return state;
};

export default filters;
