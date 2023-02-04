function filterNegative(numbers){
    let filterNumbers = [];
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] >= 0){
            filterNumbers.push(numbers[i]);
        }
    }
    return filterNumbers;
}

console.log(filterNegative([-1, -2, -3, 4, 5, 3, 0]));