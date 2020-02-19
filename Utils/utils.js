//Juan Garcia da Rosa 234281 - Gabriel Diaz 205028
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
    let countCartItems = 0;
    if(cart.length > 0) {
        countCartItems = cart.length === 1 ? cart[0].count : cart.reduce((accumulator, cartItem) => accumulator.count + cartItem.count);
    }

    return countCartItems;
}

function countCartTotalAmount(cart) {
    if(cart.length > 0) {
        const cartPrice = cart.map((v) => {
            return v.count * v.price;
        });

        const precio = cartPrice.reduce((a, b) => a + b);

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