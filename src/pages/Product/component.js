import React, { useEffect, useState } from 'react';
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
  const [itemQnt, setItemQnt] = useState(1);

  // EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
    setItemQnt(1);
  };

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    if (inputValue >= 1) {
      setItemQnt(inputValue);
    } else {
      setItemQnt(1);
    }
  };

  // useEFFECT
  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  return (
    <>
      {isPending && <p>Loading Product...</p>}
      {error && <p>{error}</p>}
      <div className="product-page">
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

              {product.key_features && (
                <div className="product-keyFeatures">
                  {product.key_features.map((feature) => (
                    <li className="feature-item" key={feature}>
                      {feature}
                    </li>
                  ))}
                </div>
              )}

              <div className="product-purchase">
                <form onSubmit={handleSubmit}>
                  <label>
                    <span>Amount</span>
                    <div className="product-quantity">
                      <input
                        type="number"
                        onChange={handleChange}
                        value={itemQnt}
                        required
                      />
                    </div>
                    <button className="btn primary" type="button">Add to Cart</button>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </>
        )}
      </div>
    </>
  );
}

export default Product;
