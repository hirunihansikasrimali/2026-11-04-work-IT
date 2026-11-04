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
    olCustomer();
}

function loadCustomerTable(){
    
}
