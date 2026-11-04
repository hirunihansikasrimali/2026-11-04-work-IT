const iteamNames=[];

function btnClickIteamName(){
    let txtName2=document.getElementById("txtName2").value;
    iteamNames.push(txtName2);
    console.log(iteamNames);
    loadIteams();
}
function loadIteams(){
    document.getElementById("olIteams").innerHTML="";
    for(let iName of iteamNames){
        document.getElementById("olIteams").innerHTML+=`<li>${iName}</li>`;
    }
}