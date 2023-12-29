import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
//   const data = `https://s3.amazonaws.com/open-to-cors/assignment.json`;
  useEffect(() => {
    // Fetch JSON data using Axios (replace URL with your JSON file's URL)
    axios.get(`https://s3.amazonaws.com/open-to-cors/assignment.json`)
      .then(response => {
        // Assuming response.data is an array of products
        const fetchedProducts = response.data;
        // Sort products based on Popularity in descending order
        fetchedProducts.sort((a, b) => b.Popularity - a.Popularity);
        setProducts(fetchedProducts);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>Title: {product.Title}</p>
            <p>Price: {product.Price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDisplay;
