import { Link } from "react-router-dom";
import emptyCart from "../assets/img/empty-cart.png";

const CartEmpty = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                Корзина пуста <icon>😕</icon>
            </h2>
            <p>
                Більше всього що ви ще не додали ні однієї піци.
                <br />
                Для того щоб замовити піццу перейдіть на головну сторінку
            </p>
            <img src={emptyCart} alt="Empty cart" />
            <Link to="/" className="button button--black">
                <span>Повернутись назад</span>
            </Link>
        </div>
    );
};

export default CartEmpty;
