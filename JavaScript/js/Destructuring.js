'use scrict';
let user = {
    username:"John",
    years: 30
};

let {username, years, isAdmin = false} = user;

alert(username);
alert(years);
alert(isAdmin);