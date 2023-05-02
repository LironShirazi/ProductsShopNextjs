import React from 'react';
import styles from './products.module.css';
import Product from '../../components/Product/Product';

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
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
