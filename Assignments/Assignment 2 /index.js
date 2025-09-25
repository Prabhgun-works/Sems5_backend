const fs = require('fs'); 
function buyPorduct(username, productName) {
    // Read users and products from files
    const users = fs.read('user.txt', 'utf-8').split('\n').filter(Boolean);
    const products = fs.read('product.txt', 'utf-8').split('\n').filter(Boolean);

    // Check if username and product exist
    const userExists = users.includes(username);
    const productExists = products.includes(productName);

    if (userExists && productExists) {
        // Add to order history
        const entry = `${username},${productName}\n`;
        fs.write('orderHistory.txt', entry);
        console.log('Product added to order history.');
    } else {
        if (!userExists) console.log('User does not exist.');
        if (!productExists) console.log('Product does not exist.');
    }
}