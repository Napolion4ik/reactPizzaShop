function CartItem({
    name,
    type,
    size,
    img,
    pizzaCount,
    price,
    pizza,
    handlerAddOnePizza,
    handlerMinusOnePizza,
    handlerDeletePizza,
}) {
    const handlerDelete = () => {
        handlerDeletePizza(pizza);
    };
    const handlerPluss = () => {
        handlerAddOnePizza(pizza);
    };
    const handlerMinus = () => {
        handlerMinusOnePizza(pizza);
    };

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img className="pizza-block__image" src={img} alt="Pizza" />
            </div>
            <div className="cart__item-info">
                <h3>{name}</h3>
                <p>
                    {type} тесто, {size} см.
                </p>
            </div>
            <div className="cart__item-count">
                <div
                    className="button button--outline button--circle cart__item-count-minus"
                    onClick={handlerMinus}
                >
                    -
                </div>
                <b>{pizzaCount}</b>
                <div
                    className="button button--outline button--circle cart__item-count-plus"
                    onClick={handlerPluss}
                >
                    +
                </div>
            </div>
            <div className="cart__item-price">
                <b>{price} ₽</b>
            </div>
            <div className="cart__item-remove">
                <button
                    className="button button--outline button--circle"
                    onClick={handlerDelete}
                >
                    X
                </button>
            </div>
        </div>
    );
}

export default CartItem;
