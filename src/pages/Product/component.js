import React, { useEffect } from 'react';
// ROUTER
import { useParams } from 'react-router-dom';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/thunk';
// STYLES
import './style.scss';

function Product() {
  // STATE & VARIABLES
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, isPending, error } = useSelector((state) => state.product);

  // useEFFECT
  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  return (
    <div className="product-page">
      {isPending && <p>Loading Product...</p>}
      {error && <p>{error}</p>}
      {product && (
      <>
        <div className="product-pageLeft">
          <img src={product.thumbnail} alt="product thumbnail" />
        </div>
        <div className="product-pageRight">
          <div className="product-details">
            <div className="product-info">
              <h2>{product.title}</h2>
              <h4>{product.price}</h4>
            </div>

            <hr />

            <div className="product-description">
              <h6>Product Description</h6>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </>
      )}
    </div>
  );
}

export default Product;
