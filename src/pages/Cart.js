import { useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";
import CartIsFilled from "../components/CartIsFilled";

function Cart() {
    const { totalCount } = useSelector((state) => state.cart);

    return (
        <div className="content">
            <div className="container container--cart">
                {!totalCount ? <CartEmpty /> : <CartIsFilled />}
            </div>
        </div>
    );
}

export default Cart;
