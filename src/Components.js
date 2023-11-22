import React from 'react';

const ProductPage = () => {
  // Dummy product data
  const products = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      minQuantity: 1,
      maxQuantity: 10,
      imgUrl: 'https://example.com/product1.jpg',
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      minQuantity: 1,
      maxQuantity: 7,
      imgUrl: 'https://example.com/product2.jpg',
    },
    {
      name: 'Product 3',
      description: 'Description for Product 2',
      price: 29.99,
      minQuantity: 1,
      maxQuantity: 5,
      imgUrl: 'https://example.com/product2.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product, index) => (
        <div key={index} className="product">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.minQuantity} - {product.maxQuantity}</p>
          <img src={product.imgUrl} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductPage