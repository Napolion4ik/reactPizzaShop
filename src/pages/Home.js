import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category, Sort, PizzaBlock } from "../components/index";
import PizzaLoadingBlock from "../components/PizzaBlock/PizzaLoadingBlock";
import { addPizzaToCart } from "../redux/action/cart";
import { setCategory, setSortBy } from "../redux/action/filters";

import { fetchPizzas, setLoaded } from "../redux/action/pizzas";
const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
];
const sortItems = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "name" },
];

function Home() {
    const dispatch = useDispatch();
    const { items, isLoaded } = useSelector((state) => state.pizzas);
    const { category, sortBy } = useSelector((state) => state.filters);

    useEffect(() => {
        dispatch(setLoaded(false));
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((sort) => {
        dispatch(setSortBy(sort));
    }, []);

    const handleAddPizza = useCallback((pizzaObj) => {
        dispatch(addPizzaToCart(pizzaObj));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Category
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                    activeCategory={category}
                />
                <Sort
                    activeItem={sortBy}
                    items={sortItems}
                    onSelectSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded &&
                    items.map((item) => (
                        <PizzaBlock
                            onAddPizza={handleAddPizza}
                            key={item.id}
                            pizzaObj={item}
                            {...item}
                        />
                    ))}
                {!isLoaded &&
                    Array(12)
                        .fill(0)
                        .map((item, index) => (
                            <PizzaLoadingBlock key={index} />
                        ))}
            </div>
        </div>
    );
}

export default Home;
