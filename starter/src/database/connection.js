const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 10, // Adjust the limit as needed
    host: "localhost",
    user: "root",
    password: "123",
    database: "employees"
});

// Export a function to get a connection from the pool
function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                resolve(connection);
            }
        });
    });
}

module.exports = {
    getConnection
};
