// Write a function generateMessages that takes an array of names and returns an array of personalised messages for each name. For example, when given the array above, the function should return an array with the first element being the string 'Hi Anna! 50% off our best candies for you today!', the second element the string 'Hi Laura! 50% off our best candies for you today!', and so on.

// Modify the function generateMessages so it uses this new structure and write the correct discount percentage in each message.

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

function generateMessages(array) {
    console.log(array.map(namesAndDiscounts => `Hi ${namesAndDiscounts['name']}! ${namesAndDiscounts['discount']}% off our best candies for you today!`))
}

generateMessages(namesAndDiscounts);
