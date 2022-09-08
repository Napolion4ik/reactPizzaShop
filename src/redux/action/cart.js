export const addPizzaToCart = (pizzaObj) => ({
    type: "ADD_PIZZA_CART",
    payload: pizzaObj,
});
export const minusOnePizza = (pizzaObj) => ({
    type: "MINUS_ONE_PIZZA",
    payload: pizzaObj,
});
export const cleanUpCart = () => ({
    type: "CLEAN_UP_CART",
});
export const deletePizza = (pizzaObj) => ({
    type: "DELETE_PIZZA",
    payload: pizzaObj,
});
