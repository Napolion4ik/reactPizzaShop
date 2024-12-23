import axios from "axios";

export const setPizzas = (items) => ({
    type: "SET_PIZZAS",
    payload: items,
});

export const setLoaded = (value) => ({
    type: "SET_LOADING",
    payload: value,
});
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    axios
        .get(
            `https://62dfdd2198dd9c9df6087ec8.mockapi.io/pizzas?category=${category === null ? "" : category}`
        )
        .then(({data}) => {
            switch(sortBy) {
                case "popular" :
                    return data.sort((a,b) => b.rating - a.rating);
                    break;
                case "price" :
                    return data.sort((a,b) => b.price - a.price);
                    break;
                case "name" :
                    return data.sort((a, b) => { return a.name.localeCompare(b.name); });
                    break;
                default : 
                    return data;
                    break;
    }})
        .then(( data ) => dispatch(setPizzas(data)));
};
