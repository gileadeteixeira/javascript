let btnLoad = document.querySelector('#btnLoad');
let list = document.querySelector('#list');
let url = "https://reqres.in";

btnLoad.addEventListener("click", ()=>{
    fetch(`${url}/api/users?page=2`)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        response.data.forEach(user => {
            let item = document.createElement("li");
            item.classList.add("item");
            item.innerHTML = `<img src="${user.avatar}"/><span>${user.first_name}</span>`;
            list.appendChild(item);
        });
    })
});