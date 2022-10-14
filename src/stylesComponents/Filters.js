import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { formatPrice, getUniquesValues } from "../utils/helpers/helpers";
import { FaCheck } from "react-icons/fa";
import filtersvg from "../assets/git-commit.svg";

const Filters = () => {
  const {
    filters: { text, category, brand, color, min_price, price, max_price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniquesValues(all_products, "category");
  const branden = getUniquesValues(all_products, "brand");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault} className="wrapper-form">
          {/*search input*/}
          <div className="search-input">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>

          <div>
            <div className="wrapper-filter-svg">
              <p className="filter-title-categorias">Filtros</p>
              <img src={filtersvg} alt="svg imagen" className="filtersvg" />
            </div>
            <div className="wrapper-categorias">
              {categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    type="button"
                    className={`${
                      category === category.toLowerCase() ? "active" : null
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </form>
        <div className="wrapper-select-company">
          <h5 className="select-title">Company</h5>
          <select
            name="brand"
            value={brand}
            onChange={updateFilters}
            className="company"
          >
            {branden.map((c, index) => {
              return (
                <option key={index} value={c} className="option-company">
                  {c}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .wrapper-filter-svg {
    display: flex;
    margin-bottom: 7rem;
    justify-content: center;
  }

  .filtersvg {
    margin-left: 2rem;
  }
  .option-company {
    /* background-color: #052734; */
  }

  .wrapper-select-company {
    margin-top: 9rem;
  }
  .select-title {
    color: #052734;
    text-align: center;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 22.4144px;
  }
  .company {
    border: 1px solid #dcdcdc;
    border-radius: 3rem;
    color: black;
    padding: 1rem;
    margin: -30px auto;
    display: block;
  }
  .wrapper-form {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }

  .search-input {
    position: absolute;
    top: 7%;
    width: 70%;
    left: 50%;
    transform: translateX(-50%);
  }

  .filter-title-categorias {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }

  .wrapper-categorias {
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  button {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 22.4144px;
    text-transform: uppercase;
    /* background-color: black; */
    background-color: transparent;
    color: #052734;
    padding: 0.3rem;
    margin-top: 0.7rem;
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid #dcdcdc;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 1024px) {
  }
`;

export default Filters;
