function crossRoad(color){
    switch (color){
        case "Red":
            return "Danger";
        case "Yellow":
            return "Stop";
        case "Green":
            return "Cross";
    }
}

console.log(crossRoad("Green"));
console.log(crossRoad("Red"));
console.log(crossRoad("Yellow"));