//Juan Garcia da Rosa 234281 - Gabriel Diaz 205028
function filterProductsByName(products, name) {
    return products.filter(product => {
        const productName = product.name.toUpperCase();
        
        return productName.includes(name.toUpperCase());
    });
}

function addToCart(cart, item, quantity) {
    let cartItem;
    let newCart = Array.from(cart);
    let fixedQuantity = typeof quantity === 'string'? parseInt(quantity):quantity;
    
    if(cart.length > 0) {
        cartItem = cart.find(cartItem => item._id === cartItem._id);
    }

    if(!!cartItem) {
        cartItem.count = cartItem.count + fixedQuantity;
    } else {
        cartItem = item;
        cartItem.count = fixedQuantity;
        newCart.push(item);
    }

    return newCart;
}

function countCartItems(cart) {
    let countCartItems = 0;
    if(cart.length > 0) {
        countCartItems = cart.length === 1 ? cart[0].count : cart.reduce((accumulator, { count }) =>  accumulator + count , 0)};
    return countCartItems;
}

function countCartTotalAmount(cart) {
    if(cart.length > 0) {
        const cartPrice = cart.map((v) => {
            return v.count * v.price;
        });

        const precio = cartPrice.reduce((a, b) => a + b);

        return {
            subtotal: round(precio),
            iva: round(precio * 0.23),
            total:  round(precio * 1.23)
        }; 
    } else {
        return {
            subtotal: 0,
            iva: 0,
            total:  0
        };
    }
}

function round (num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

module.exports = {
    filterProductsByName,
    addToCart,
    countCartItems,
    countCartTotalAmount
};