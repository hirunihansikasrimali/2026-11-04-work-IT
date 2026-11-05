const customerList=[];

function addCustomer(){
    let customerId=document.getElementById("txtId").value;
    let customerName=document.getElementById("txtName").value;
    let customerAge=document.getElementById("txtAge").value;
    let customerAddress=document.getElementById("txtAddress").value;
    let customerSalary =document.getElementById("txtSalary").value;

    let customer = {
        id:customerId,
        name:customerName,
        age:customerAge,
        address:customerAddress,
        salary:customerSalary
    };

    customerList.push(customer);
    console.log(customerList);
    loadCustomerTable();
}

function loadCustomerTable(){

    let body=`<tr>
    <th>Customer ID </th>
    <th>Customer Name </th>
    <th>Customer Age </th>
    <th>Customer Address </th>
    <th>Customer Salary</th>
    </tr>`;
    for(let customer of customerList){
        body+=`<tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.age}</td>
        <td>${customer.address}</td>
        <td>${customer.salary}</td>
        </tr>`;

    }
    document.getElementById("tblCustomers").innerHTML=body;
}
