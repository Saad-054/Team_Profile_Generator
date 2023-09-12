const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // Function to view all employees
    getAllEmployees() {
        return this.connection.promise().query(
            "SELECT * FROM employees"
        );
    }

    // Add more functions for other database operations, such as adding, updating, or deleting records
    // For example, to add a new employee
    addEmployee(employeeData) {
        return this.connection.promise().query(
            "INSERT INTO employees SET ?",
            employeeData
        );
    }

    // Update employee information
    updateEmployee(id, updatedData) {
        return this.connection.promise().query(
            "UPDATE employees SET ? WHERE id = ?",
            [updatedData, id]
        );
    }

    // Delete an employee
    deleteEmployee(id) {
        return this.connection.promise().query(
            "DELETE FROM employees WHERE id = ?",
            id
        );
    }

    // Add more methods as needed for your specific application

}

module.exports = new DB(connection);
