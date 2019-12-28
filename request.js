axios({
    method:'get',
    url:'https://jsonplaceholder.typicode.com/todos',
})
.then(response =>getTodo(response.data))
.catch(error =>console.log("cannot get data"));

var getTodo = (toDo) =>{
    toDo.forEach(item =>{
        console.log(item);
    });
}