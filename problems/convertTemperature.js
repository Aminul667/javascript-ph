function temperatureConverter(value){
    let c = (value - 32)/1.8;
    return Math.round(c*100)/100;
}

console.log(temperatureConverter(50));
console.log(temperatureConverter(103));