function totalCost(products) {
    let total = 0;
    for(let i=0; i < products.length; i++){
        total += products[i]["price"];
    }
    return total;
}

productObj = [
  { name: "Dano Milk", price: 500 },
  { name: "Taaza Tea", price: 200 },
  { name: "Fresh Sugar", price: 300 },
];

console.log(totalCost(productObj));