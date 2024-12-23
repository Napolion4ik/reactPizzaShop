import React, { useState } from "react";

const Category = React.memo(({ items, onClickItem, activeCategory }) => {
    const onSelectItem = (index) => {
        onClickItem(index);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? "active" : ""}
                    onClick={() => onSelectItem(null)}
                >
                    Всі
                </li>
                {items.map((item, index) => (
                    <li
                        className={activeCategory === index ? "active" : ""}
                        onClick={() => onSelectItem(index)}
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Category;
