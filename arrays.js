// let names = ["Ella", "James", "Will", "Jack"]
// console.log(names)
// console.log(names.length)
// console.log(names[1])

// names.push("Katy")
// console.log(names)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach(element => console.log(element))

function addToBatch(arr, num) {
    let new_arr;
    if (arr.length >= 5) {
        return arr;   
    }
    else {
        new_arr = arr.concat(num);
        return new_arr;
    }
}

console.log(addToBatch([1], 3)); 
console.log(addToBatch([1, 2, 3], 4)); 
console.log(addToBatch([], 8)); 
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7)); 
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); 