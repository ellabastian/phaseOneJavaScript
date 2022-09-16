const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

class UserBase {
    constructor(users) {
        this.users = users;
    }

    count() {
        return users.length;
    }

    getNames() {
        const users_name = users.map(item => item.getName());
        return users_name;
    }

    getIntroductions() {
        const introductions = users.map(item => item.getIntroduction());
        return introductions;
    }

}


// const User = require("./user.js");
// const UserBase = require("./userBase.js");
// const users = [
//     new User('Uma'),
//     new User('Josh'),
//     new User('Ollie')
//   ];
// const userBase = new UserBase(users);
// userBase.count();
// userBase.getNames();
// userBase.getIntroductions();



// [ 'Uma', 'Josh', 'Ollie' ]

// userBase.getIntroductions();
// [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]

module.exports = UserBase;
