# Employee Management System

## Project Overview
The Employee Management System is a simple web application that allows users to manage employee data effectively. It provides functionalities to create, read, update, and delete (CRUD) employee records. The system is built using React for the frontend, Express.js for the backend, and MongoDB for the database. The MongoDB Compass is used to manage and visualize the database, connected through a connection string.

## Installation Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or remotely

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install server dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Configure MongoDB connection string in `index.js`:
   ```javascript
   mongoose.connect("mongodb://<username>:<password>@127.0.0.1:27017/crud", {
       useNewUrlParser: true,
       useUnifiedTopology: true
   })
   .then(() => console.log("Connected to MongoDB"))
   .catch(err => console.error("Could not connect to MongoDB", err));
   ```

4. Run the backend server:
   ```bash
   npm start
   ```

6. Install client dependencies:
   ```bash
   cd client
   npm install
   ```

7. Start the frontend client:
   ```bash
   npm run dev
   ```

8. Access the application in your browser at `http://localhost:3001`.

## Usage

### Adding an Employee
1. Navigate to the `Add Employee` page.
2. Fill in the required fields: Name, Position, and Salary.
3. Click `Submit` to save the employee details.

### Viewing Employees
1. On the homepage, view the list of employees and their details.

### Updating an Employee
1. Click the `Update` button next to an employee's name.
2. Modify the desired fields.
3. Click `Update` to save the changes.

### Deleting an Employee
1. Click the `Delete` button next to an employee's name.
2. Confirm the deletion.

## API Endpoints

### Base URL: `http://localhost:3001`

1. **GET `/`**
   - Fetches all employees.
   - Response: List of all employees.

2. **GET `/getEmployee/:id`**
   - Fetches a single employee by their ID.
   - Parameters: `id` (string)

3. **POST `/createEmployee`**
   - Creates a new employee.
   - Body:
     ```json
     {
       "name": "string",
       "position": "string",
       "salary": number
     }
     ```

4. **PUT `/updateEmployee/:id`**
   - Updates an employee's details.
   - Parameters: `id` (string)
   - Body:
     ```json
     {
       "name": "string",
       "position": "string",
       "salary": number
     }
     ```

5. **DELETE `/deleteEmployee/:id`**
   - Deletes an employee.
   - Parameters: `id` (string)

---



