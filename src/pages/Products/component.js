import React, { useEffect } from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/thunk';
// COMPONENTS
import ProductCard from '../../components/ProductsCard.js/component';
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

      <h2 className="products-pageTitle">Our Products</h2>

      {error && <p>{error}</p>}
      {isPending && <p>Loading Products...</p>}
      <div className="products-content">
        {products && products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>

    </div>
  );
}

export default Products;
