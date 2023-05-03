import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './id.module.css';

export default function Product({
  title, image, price, category, description,
}) {
  return (
    <div className={styles.productPageContainer}>
      <div className={styles.productContainer}>
        <h1 className={styles.productTitle}>{title}</h1>
        <div className={styles.imageContainer}>
          <Image fill alt="product image" src={image} />
        </div>
        <span className={styles.category}>{category}</span>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceContainer}>
          {price}
          <span className={styles.currency}>$</span>
        </div>
        <button type="button" className={styles.button}>
          <Link href="/products">Back to Products Page</Link>
        </button>

      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productData = await res.json();
  return {
    props: {
      ...productData,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products');
  const productsArray = await res.json();
  const idsArray = productsArray.map((product) => product.id);
  console.log('idsArry', idsArray);
  return {
    paths: idsArray.map((id) => ({
      params: { id: String(id) },
    })),
    fallback: false,
  };
}

Product.defaultProps = {
  title: '',
  image: '',
  price: 100,
  category: '',
  description: '',
};

Product.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
};
