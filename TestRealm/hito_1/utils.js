function filterProductsByName(products, name) {
    return products.filter(product => {
        const productName = product.name.toUpperCase();
        
        return productName.includes(name.toUpperCase());
    });
}

function addToCart(cart, item) {
    let cartItem;
    let newCart = Array.from(cart);
    
    if(cart.length > 0) {
        cartItem = cart.find(cartItem => item._id === cartItem._id);
    }

    if(!!cartItem) {
        cartItem.count = cartItem.count + 1;
    } else {
        newCart.push(item);
    }

    return newCart;
}

function countCartItems(cart) {
    const count = cart.length > 0 ? cart.reduce((accumulator, cartItem) => accumulator.count + cartItem.count) : 0;
    return count;
}

function countCartTotalAmount(cart) {
    console.log(cart);
    if(cart.length > 0) {
        const cartPrice = cart.map((v) => {
            return v.count * v.price;
        });
        const precio = cartPrice.reduce((a, b) => a + b);
        console.log({
            subtotal: precio,
            iva: precio * 0.23,
            total:  precio * 1.23
        });
    
        return {
            subtotal: precio,
            iva: precio * 0.23,
            total:  precio * 1.23
        }; 
    } else {
        return {
            subtotal: 0,
            iva: 0,
            total:  0
        };
    }
}

module.exports = {
    filterProductsByName,
    addToCart,
    countCartItems,
    countCartTotalAmount
};