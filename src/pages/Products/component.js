import React, { useEffect } from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/thunk';
// ASSETS
import ProductsBanner from '../../assets/images/banner-image.jpg';
// STYLES
import './style.scss';

function Products() {
  // STATE & VARIABLES
  const dispatch = useDispatch();
  const { products, isPending, error } = useSelector((state) => state.products);

  // useEFFECT
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="products-page">
      <div className="products-banner">
        <img src={ProductsBanner} alt="cosmetic background" />
      </div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading Products...</p>}
      <div className="products-content">
        {products && products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt="product" />
            <h2 className="product-title">{product.title}</h2>
            <span className="product-price">
              £
              {product.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
