import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../components/Product/Product';
import styles from './products.module.css';

export default function Products({ products }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Products Catalog</h1>
      <div className={styles.productsContainer}>
        {products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            imgSrc={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return {
      props: {
        products: products || [],
      },
      revalidate: 60,
    };
  } catch (err) {
    console.error('En error ocurred at http get in server side - getStaticProps');
  }
  return {
    props: {
      products: {},
    },
  };
}

Products.defaultProps = {
  products: [],
};

Products.propTypes = {
  products: PropTypes.arrayOf(Object),
};
