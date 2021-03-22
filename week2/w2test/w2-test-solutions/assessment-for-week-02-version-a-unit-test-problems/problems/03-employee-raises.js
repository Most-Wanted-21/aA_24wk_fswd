/*******************************************************************************

Your company is giving every employee earning less than $50,000 a 10% raise!

Write a function `employeeRaises(peopleObj)` that takes an array of objects
containing employee names and their salaries and returns an array containing
the employees that need raises, along with their new salaries.

Example:

employees = [{name: "Alice", salary: 80000},
             {name: "Bob", salary: 40000},
             {name: "Carol", salary: 60000},
             {name: "Dan", salary: 70000},
             {name: "Ellen", salary: 100000}]

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]
*******************************************************************************/

//!!START
function needsRaise(employee) {
    return employee.salary < 50000;
}

function applyRaise(employee) {
    employee.salary *= 1.1
    return employee;
}
//!!END

function employeeRaises(employees) {
    //!!START
    return employees.filter(needsRaise).map(applyRaise);
    //!!END
}


/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
module.exports = employeeRaises;
