const Ebay = require('../src/index');

let ebay = new Ebay({
    clientID: "--Enter your Client ID",
    limit: 6
});
ebay.findItemsByKeywords("iphone").then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
});



