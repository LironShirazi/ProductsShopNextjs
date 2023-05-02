import React from 'react';
import Image from 'next/image';
import styles from './product.module.css';
import Link from 'next/link';

export default function Product({ id, title, imgSrc, price }) {
  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <Image fill src={imgSrc} alt="product image" />
      </div>
      <div className={styles.productDataPart}>
        <div className={styles.titleContainer}>{title}</div>
        <div className={styles.priceAndButtonWrapper}>
          <div className={styles.priceContainer}>
            {price}
            {' '}
            $
          </div>
          <button>
            <Link className={styles.detailsButton} href={`/products/${id}`}>
              View details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

Product.defaultProps = {
  title: 'Nike airforce 07',
  price: '399$',
};
