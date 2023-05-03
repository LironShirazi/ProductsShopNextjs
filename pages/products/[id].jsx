import React from 'react';
import PropTypes from 'prop-types';
import styles from './id.module.css';
import ProductDetails from '../../components/ProductDetails/ProductDetails';

export default function ProductPage({ productData }) {
  return (
    <div className={styles.productPageContainer}>
      <ProductDetails
        title={productData.title}
        image={productData.image}
        price={productData.price}
        category={productData.category}
        description={productData.description}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productData = await res.json();
  return {
    props: {
      productData,
    },
  };
}

ProductPage.defaultProps = {
  productData: {},
};

ProductPage.propTypes = {
  productData: PropTypes.instanceOf(Object),
};

// export async function getStaticPaths() {
//   const res = await fetch('https://fakestoreapi.com/products');
//   const productsArray = await res.json();
//   const idsArray = productsArray.map((product) => product.id);
//   return {
//     paths: idsArray.map((id) => ({
//       params: { id: String(id) },
//     })),
//     fallback: false,
//   };
// }
