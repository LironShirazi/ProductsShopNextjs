import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './ProductDetails.module.css';

export default function ProductDetails({
  title, image, price, category, description,
}) {
  return (
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
        <Link className={styles.link} href="/products">Back to Products Page</Link>
      </button>

    </div>
  );
}

ProductDetails.defaultProps = {
  title: '',
  image: '',
  price: 100,
  category: '',
  description: '',
};

ProductDetails.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
};
