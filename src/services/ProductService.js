import axios from 'axios';

const PRODUCTS_API_URL = 'http://localhost:4000/productItems';

const ProductService = {
  getItems: async () => {
    const response = await axios.get(PRODUCTS_API_URL);
    return response.data;
  },
};

export default ProductService;
