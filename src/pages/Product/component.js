import React, { useEffect, useState } from 'react';
// ROUTER
import { useParams } from 'react-router-dom';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, addItemToCart } from '../../store/thunk';
// COMPONENTS
import ProductFeature from './ProductFeature';
// STYLES
import './style.scss';

function Product() {
  // STATE & VARIABLES
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { product, isPending, error } = useSelector((state) => state.product);
  const [itemQnt, setItemQnt] = useState(1);

  // EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(user.uid, id, { ...product, quantity: itemQnt }));
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
  }, [id, dispatch]);

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

              <div className="product-keyFeatures">
                {product.key_features
                  ? (
                    product.key_features.map((feature) => (
                      <ProductFeature
                        key={feature}
                        feature={feature}
                      />
                    ))
                  )
                  : (<p>This is our standart line of products</p>)}
              </div>

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
                  </label>
                  <button className="btn primary" type="submit">Add to Cart</button>
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
