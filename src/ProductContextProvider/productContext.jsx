import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
<ProductContext.Provider value={{ productos, selectedProduct, setSelectedProduct }}>
  {props.children}
</ProductContext.Provider>
  );
};

export default ProductContextProvider;