# API Documentation

## User Registration Endpoint

**Endpoint:** POST `/users/register`

### Description

Creates a new user account with the provided information. Returns an authentication token upon successful registration.

### Request Body

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string" // optional
  },
  "email": "string",
  "password": "string"
}

Data Requirements and Validation
The /users/register endpoint expects a JSON payload with the following structure:

fullname: An object containing the user's first and last names.
firstname: A string representing the user's first name. It is required and must be at least 3 characters long.
lastname: An optional string representing the user's last name.
email: A string representing the user's email address. It is required and must be a valid email format.
password: A string representing the user's password. It is required and must be at least 6 characters long.
The server performs the following validations:

Presence of Required Fields: Checks if fullname, email, and password are present in the request body. Also checks if firstname is present inside fullname.
Fullname Format: Checks if fullname is an object.
Email Format: Validates that the provided email is in a valid email format.
First Name Length: Validates that the first name is at least 3 characters long.
Password Length: Validates that the password is at least 6 characters long.
Email Uniqueness: Checks if the email already exists in the database.
If any of these validations fail, the server returns a 400 status code with an error message.

Response Codes
201 Created: User successfully created. Returns a JWT token and user information.
400 Bad Request: Validation error or invalid input. The response body will contain an array of error messages, indicating which fields failed validation.
409 Conflict: Email already exists. The response body will contain an error message indicating that the email is already in use.
Success Response
Error Response
Example Usage
User Login Endpoint
Endpoint: POST /users/login

Description
Authenticates a user with the provided email and password. Returns an authentication token upon successful login.

Request Body
Data Requirements and Validation
The /users/login endpoint expects a JSON payload with the following structure:

email: A string representing the user's email address. It is required and must be a valid email format.
password: A string representing the user's password. It is required and must be at least 6 characters long.
The server performs the following validations:

Presence of Required Fields: Checks if email and password are present in the request body.
Email Format: Validates that the provided email is in a valid email format.
Password Length: Validates that the password is at least 6 characters long.
If any of these validations fail, the server returns a 400 status code with an error message.

Response Codes
200 OK: User successfully authenticated. Returns a JWT token and user information.
400 Bad Request: Validation error or invalid input. The response body will contain an array of error messages, indicating which fields failed validation.
401 Unauthorized: Invalid email or password. The response body will contain an error message indicating that the email or password is incorrect.

Success Response
{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}

Error Response
{
  "errors": [
    {
      "msg": "Error message here",
      "param": "field_name"
    }
  ]
}

Example Usage
fetch('http://localhost:3000/users/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fullname: {
      firstname: "John",
      lastname: "Doe"
    },
    email: "john@example.com",
    password: "password123"
  })
})


User Login Endpoint
Endpoint: POST /users/login

Description
Authenticates a user with the provided email and password. Returns an authentication token upon successful login.

Request Body
{
  "email": "string",
  "password": "string"
}

Data Requirements and Validation
The /users/login endpoint expects a JSON payload with the following structure:

email: A string representing the user's email address. It is required and must be a valid email format.
password: A string representing the user's password. It is required and must be at least 6 characters long.
The server performs the following validations:

Presence of Required Fields: Checks if email and password are present in the request body.
Email Format: Validates that the provided email is in a valid email format.
Password Length: Validates that the password is at least 6 characters long.
If any of these validations fail, the server returns a 400 status code with an error message.

Response Codes
200 OK: User successfully authenticated. Returns a JWT token and user information.
400 Bad Request: Validation error or invalid input. The response body will contain an array of error messages, indicating which fields failed validation.
401 Unauthorized: Invalid email or password. The response body will contain an error message indicating that the email or password is incorrect.

Success Response
{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}

Error Response
{
  "errors": [
    {
      "msg": "Error message here",
      "param": "field_name"
    }
  ]
}

Example Usage
fetch('http://localhost:3000/users/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: "john@example.com",
    password: "password123"
  })
})
```

User Profile Endpoint
Endpoint: GET /users/profile

Description
Fetches the profile information of the authenticated user.

Authentication
This endpoint requires a valid JWT token to be provided in the request headers.

Response Codes
200 OK: Successfully fetched user profile information.
401 Unauthorized: Invalid or missing authentication token.

Success Response
{
"user": {
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john@example.com"
}
}

Example Usage
fetch('http://localhost:3000/users/profile', {
method: 'GET',
headers: {
'Authorization': 'Bearer jwt_token_string'
}
})

User Logout Endpoint
Endpoint: GET /users/logout

Description
Logs out the authenticated user by invalidating the JWT token.

Authentication
This endpoint requires a valid JWT token to be provided in the request headers or cookies.

Response Codes
200 OK: Successfully logged out the user.
401 Unauthorized: Invalid or missing authentication token.

Success Response
{
"message": "Logged out successfully"
}

Example Usage
fetch('http://localhost:3000/users/logout', {
method: 'GET',
headers: {
'Authorization': 'Bearer jwt_token_string'
}
})

# Captain API Documentation

## Captain Registration Endpoint

**Endpoint:** POST `/captains/register`

### Description

Registers a new captain with the provided information. Returns an authentication token upon successful registration.

### Request Body

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string" // optional
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "string"
  }
}

Data Requirements and Validation
The /captains/register endpoint expects a JSON payload with the following structure:

fullname: An object containing the captain's first and last names.
firstname: A string representing the captain's first name. It is required and must be at least 3 characters long.
lastname: An optional string representing the captain's last name.
email: A string representing the captain's email address. It is required and must be a valid email format.
password: A string representing the captain's password. It is required and must be at least 6 characters long.
vehicle: An object containing the vehicle details.
color: A string representing the vehicle's color. It is required and must be at least 3 characters long.
plate: A string representing the vehicle's plate number. It is required and must be at least 3 characters long.
capacity: A number representing the vehicle's capacity. It is required and must be at least 1.
vehicleType: A string representing the type of vehicle. It is required and must be one of car, motorcycle, or auto.
The server performs the following validations:

Presence of Required Fields: Checks if fullname, email, password, and vehicle are present in the request body. Also checks if firstname is present inside fullname.
Fullname Format: Checks if fullname is an object.
Email Format: Validates that the provided email is in a valid email format.
First Name Length: Validates that the first name is at least 3 characters long.
Password Length: Validates that the password is at least 6 characters long.
Vehicle Details: Validates that the vehicle details are provided and meet the required criteria.
Email Uniqueness: Checks if the email already exists in the database.
If any of these validations fail, the server returns a 400 status code with an error message.

Response Codes
201 Created: Captain successfully registered. Returns a JWT token and captain information.
400 Bad Request: Validation error or invalid input. The response body will contain an array of error messages, indicating which fields failed validation.
409 Conflict: Email already exists. The response body will contain an error message indicating that the email is already in use.

Success Response
{
  "token": "jwt_token_string",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}

Error Response
{
  "errors": [
    {
      "msg": "Error message here",
      "param": "field_name"
    }
  ]
}

Example Usage
fetch('http://localhost:3000/captains/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fullname: {
      firstname: "John",
      lastname: "Doe"
    },
    email: "john@example.com",
    password: "password123",
    vehicle: {
      color: "red",
      plate: "ABC123",
      capacity: 4,
      vehicleType: "car"
    }
  })
})
```
