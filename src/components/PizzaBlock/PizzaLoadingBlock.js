import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoaderBlock = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="140" r="140" />
        <rect x="1" y="290" rx="4" ry="4" width="280" height="23" />
        <rect x="0" y="323" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="416" rx="4" ry="4" width="80" height="29" />
        <rect x="160" y="413" rx="19" ry="19" width="118" height="33" />
    </ContentLoader>
);

export default PizzaLoaderBlock;
