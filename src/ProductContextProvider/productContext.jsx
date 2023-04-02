import React, { createContext, useState } from 'react';

export const ProductContext = createContext();
export const SelectedProductContext = createContext();
export const SelectedProductUpdateContext = createContext();

const ProductContextProvider = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
<ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
  {props.children}
</ProductContext.Provider>

  );
};

export default ProductContextProvider;