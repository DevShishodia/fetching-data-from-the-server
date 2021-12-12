
let a = fetch('https://reqres.in/api/user');

let b = a.then(function(response){
    return response.json();
});

//console.log(b);
let c =b.then(function(info){
   // console.log(info.data);
    let objdata = info.data;
    console.log(objdata);
    displaydata(objdata)
});

function displaydata(objdata){
    for(let i = 0; i < objdata.length ; i++){
        let id=objdata[i].id;
        let name=objdata[i].name;
        let year=objdata[i].year;
        let color=objdata[i].color;
        let table = document.getElementById('table') ;
        let tablerow=document.createElement('tr');

        tablerow.innerHTML='<td>'+ id +'</td>' + '<td>'+name+'</td>'+ '<td>'+year +'</td>'+ '<td>'+color+'</td>';
        table.appendChild(tablerow);
     
    }

}