class emp {
    constructor(emp_name,emp_phno,emp_email,emp_position,emp_salary) {
        this.emp_name = emp_name;
        this.emp_phno = emp_phno;
        this.emp_email = emp_email;
        this.emp_position = emp_position;
        this.emp_salary = emp_salary;
    }

}


function submitData(){

    var empname = document.getElementById("name").value;
    var position = document.getElementById("position").value;
    var salary = document.getElementById("salary").value;
    var phno = document.getElementById("phno").value;
    var email = document.getElementById("email").value;

    if (empname==""){
        alert("Enter the Name");
        return false;
    }


    if (salary==""){
        alert("Enter Salary");
        return false;
    }


    if (phno.length!=10){
        alert("Please Enter Valid Phone number");
        return false;
    }


    if(email.includes("@")==false){
        alert("Enter Valid Email");
        return false;
    }


    if (position=="Employee Position"){
        alert("Select Employee position");
        return false;
    }


    var newEmp = new emp(empname,phno,email,position,salary);

    var table = document.getElementById("emptable");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = newEmp.emp_name;
    cell2.innerHTML = newEmp.emp_phno;
    cell3.innerHTML = newEmp.emp_email;
    cell4.innerHTML = newEmp.emp_position;
    cell5.innerHTML = newEmp.emp_salary;

}





