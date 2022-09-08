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
            `https://62dfdd2198dd9c9df6087ec8.mockapi.io/pizzas?category=${
                category === null ? "" : category
            }&_sort=${sortBy}&_order=desc`
        )
        .then(({ data }) => dispatch(setPizzas(data)));
};
