const CartService = {
  getItem: (key) => {
    return localStorage.getItem(key);
  },

  setItem: (key, value) => {
    return localStorage.setItem(key, value);
  },

  removeItem: (key) => {
    return localStorage.removeItem(key);
  },

  clear: () => {
    return localStorage.clear();
  },

  checkCart: (id) => {
    const cart = localStorage.getItem('class-cart');
    if (!cart) return false;
    const cartItems = JSON.parse(localStorage.getItem('class-cart'));
    if (cartItems.includes(id)) return true;
    return false;
  },
};

export default CartService;
