const iteamList=[];

function addIteams(){
    let iteamId=document.getElementById("txtIteamId").value;
    let iteamName=document.getElementById("txtIteamName").value;
    let iteamPrice=document.getElementById("txtIteamPrice").value;
    let iteamQty=document.getElementById("txtIteamQty").value;

let iteam = {
        id:iteamId,
        name:iteamName,
        price:iteamPrice,
        qty:iteamQty
    };
    iteamList.push(iteam);
    console.log(iteamList);
    loadIteams();

}
function loadIteams(){
    let body=`<tr>
    <th>Iteam ID </th>
    <th>Iteam Name </th>
    <th>Iteam Price </th>
    <th>Iteam Qty </th>
    </tr>`;
    for(let iteam of iteamList){
        body+=`<tr>
        <td>${iteam.id}</td>
        <td>${iteam.name}</td>
        <td>${iteam.price}</td>
        <td>${iteam.qty}</td>
        </tr>`;
    }   
    document.getElementById("tblIteams").innerHTML=body;
}
