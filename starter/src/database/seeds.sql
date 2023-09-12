-- Insert departments
INSERT INTO department (name) VALUES
    ('Sales'),
    ('Engineering'),
    ('Marketing'),
    ('Finance');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
    ('Sales Manager', 80000.00, 1),
    ('Sales Representative', 50000.00, 1),
    ('Software Engineer', 90000.00, 2),
    ('Frontend Developer', 85000.00, 2),
    ('Marketing Specialist', 60000.00, 3),
    ('Finance Analyst', 75000.00, 4);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Bob', 'Johnson', 3, 2),
    ('Alice', 'Williams', 4, 1),
    ('Charlie', 'Brown', 5, 2),
    ('Eva', 'Davis', 6, 1);

