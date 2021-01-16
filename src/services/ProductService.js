import axios from 'axios';

const PRODUCTS_API_URL = 'http://localhost:4000/productItems';

const ProductService = {
  getProducts: async (_page) => {
    const response = await axios.get(PRODUCTS_API_URL);
    const allProducts = response.data;
    const itemLength = allProducts.length;

    const startIdx = _page === 1 ? 0 : (_page - 1) * 4;
    const endIdx = _page * 4 > itemLength ? itemLength : _page * 4;

    const returnData = {
      products: allProducts
        .sort((a, b) => b.score - a.score)
        .slice(startIdx, endIdx),
      itemLength,
    };

    return returnData;
  },
};

export default ProductService;
