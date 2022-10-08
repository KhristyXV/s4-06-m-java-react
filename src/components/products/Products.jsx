import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import { cardItems } from "../../utils/constants/constants";
import { formatPrice } from "../../utils/helpers/helpers";

import "./products.css";
const Products = () => {
  const {
    products_loading: loading,
    products_error: error,
    products,
  } = useProductsContext();

  if (loading) {
    return <h1>LOADING</h1>;
  }

  if (error) {
    return (
      <div>
        <h2>ERROR</h2>
      </div>
    );
  }
  return (
    <div className="wrapper-products">
      {products.map((card) => (
        <Link to={`/products/${card.id}`} key={card.id}>
          <div className="card-product">
            <div className="card-product__image">
              <img
                src={card.imgList[0].fileUrl}
                className="card-product__image__img"
                alt={card.title}
              />
            </div>

            <p className="card-product__paragraph">{card.details}</p>
            <span className="card-product__price">
              {formatPrice(card.price)}
            </span>

            <p className="card-product__delivery">{card.shortDetails}</p>
            <p className="card-product__delivery">MARCA:{card.brand}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
