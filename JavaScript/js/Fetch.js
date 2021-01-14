const getUsers = document.querySelector("#getUsers");
const createUsers = document.querySelector("#createUsers");
const regUsers = document.querySelector("#regUsers");
const loginUsers = document.querySelector("#loginUsers");
const getGang = document.querySelector("#gang");


const retrieveData = () => {
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(json.data);
        for(piece of json.data) {
            let p = document.createElement("p");
            let info = document.createTextNode(piece.first_name);
            p.appendChild(info);
            p.setAttribute("class", "badge bg-primary text-wrap");
            getGang.appendChild(p);
            console.log(piece);
        }
    })
    .catch(err => console.error("IT'S GONE HORRIBLY WRONG"));
}
const createUser = () => {
    fetch("https://reqres.in/api/users", {
        method:'POST',
        body: JSON.stringify({
            name: "Nathan",
            job:"Hero"
        }), 
        headers: {
            'Content-Type': "application/json"
        }
    }).then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error("reeet stop this"))
}

const register = () => {
    fetch("https://reqres.in/api/register", {
        method:"POST",
        body: JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }), 
        headers: {
            'Content-Type': "application/json"
        }
    }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error("reeet stop this"))
}

const login = () => {
    fetch("https://reqres.in/api/login", {
        method:"POST",
        body: JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }), 
        headers: {
            'Content-Type': "application/json"
        }
    }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error("reeet stop this"))
}

getUsers.addEventListener('click', retrieveData);
createUsers.addEventListener('click', createUser);
regUsers.addEventListener('click', register);
loginUsers.addEventListener('click', login);