"use strict";
const score = [];
const names = [];
function identity(val) {
    return val;
}
// shorter version
function identityTwo(val) {
    return val;
}
identity("3");
identityTwo({ brand: 'Adidas', name: 'shoe' });
function getSearchProduct(products) {
    return products[2];
}
const getMoreProducts = (products) => {
    return products[2];
};
