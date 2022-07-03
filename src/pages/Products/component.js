import React, { useEffect } from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/thunk';
// STYLES
import './style.scss';

function Products() {
  // STATE & VARIABLES
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  // useEFFECT
  useEffect(() => {
    dispatch(getProducts('products'));
  }, [dispatch]);

  // eslint-disable-next-line no-console
  console.log(products);

  return (
    <h1>Welcome to Products Page</h1>
  );
}

export default Products;
