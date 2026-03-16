let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let id = document.getElementById("id").value.trim();
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value.trim();

    if (name === "" || id === "" || department === "" || isNaN(salary)) {
        alert("Please fill all fields properly");
        return;
    }

    let employee = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };

    employees.push(employee);
    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}

function displayEmployees() {
    let output = "<h3>All Employees</h3>";

    if (employees.length === 0) {
        output += "No employees added yet.";
    } else {
        employees.forEach(emp => {
            output += `
                Name: ${emp.name} | 
                ID: ${emp.id} | 
                Salary: ₹${emp.salary.toLocaleString()} | 
                Department: ${emp.department} <br>
            `;
        });
    }

    document.querySelector(".result").innerHTML = output;
}

function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "<h3>Employees with Salary > ₹50,000</h3>";

    if (filtered.length === 0) {
        output += "No employees found.";
    } else {
        filtered.forEach(emp => {
            output += `
                Name: ${emp.name} | 
                Salary: ₹${emp.salary.toLocaleString()} <br>
            `;
        });
    }

    document.querySelector(".result").innerHTML = output;
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.querySelector(".result").innerHTML =
        `<h3>Total Salary Payout: ₹${total.toLocaleString()}</h3>`;
}

function averageSalary() {
    if (employees.length === 0) {
        document.querySelector(".result").innerHTML =
            "<h3>No employee records available</h3>";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.querySelector(".result").innerHTML =
        `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
}

function sortByDepartment() {
    if (employees.length === 0) {
        document.querySelector(".result").innerHTML =
            "<h3>No employees available to sort</h3>";
        return;
    }

    let sorted = [...employees].sort((a, b) =>
        a.department.localeCompare(b.department)
    );

    let output = "<h3>Employees Sorted by Department</h3>";

    sorted.forEach(emp => {
        output += `
            Name: ${emp.name} | 
            Department: ${emp.department} | 
            Salary: ₹${emp.salary.toLocaleString()} <br>
        `;
    });

    document.querySelector(".result").innerHTML = output;
}