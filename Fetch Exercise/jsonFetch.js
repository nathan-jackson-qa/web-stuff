const getbtn = document.querySelector("#get");
const postbtn = document.querySelector("#post");
const updatebtn = document.querySelector("#update");
const patchbtn = document.querySelector("#patch");
const deletebtn = document.querySelector("#delete");
const postTitle = document.querySelector('#createTitle');
const postBody = document.querySelector('#createBody');
const postID = document.querySelector('#createID');

const putData = document.querySelector('#putData')

const retrieve = () => {
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        for(let i =0; i < 5; i++)
        {
            let p = document.createElement("p");
            let info = document.createTextNode(JSON.stringify(json[i]))
            p.appendChild(info);
            putData.appendChild(p);
        }
    }).catch(err => console.error("Somethings gone wrong on the retrieval, time for some upheaval"))
}

const post = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: postIDValue,
            body: postTitleValue,
            userID: postIDValue
        }),
        headers: {
            'Content-type': 'application.json'   
        }
    }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error("No go on the post, you're a terrible host"))
}

const update = () => {
    const postTitleValue = postTitle.value;
    const postBodyValue = postBody.value;
    const postIDValue = postID.value;
    fetch("http://jsonplaceholder.typicode.com/posts/1", {
        method: 'PUT',
        body: JSON.stringify({
            id:1,
            title: postIDValue,
            body: postTitleValue,
            userID: postIDValue
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error("Couldnt update mate, ya too late, no debate"))
}

const patch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title:'This be the new title'
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error("Couldn't patch, but could catch"))
}

const deleteThing = () => {
    fetch("http://jsonplaceholder.typicode.com/posts/1", {
        method:'DELETE'
    }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error("Failed to delete, not very elite"))
}

getbtn.addEventListener('click', retrieve);
postbtn.addEventListener('click', post);
updatebtn.addEventListener('click', update);
patchbtn.addEventListener('click', patch);
deletebtn.addEventListener('click', deleteThing);