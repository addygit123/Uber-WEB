# User Registration Endpoint Documentation

## Endpoint

`POST /register`

## Description

This endpoint allows a new user to register by providing their full name, email, and password. Upon successful registration, a JSON Web Token (JWT) is returned along with the user details.

## Request Body

The request body must be a JSON object containing the following fields:

- `fullname`: An object containing the user's first name and last name.
  - `firstname` (string, required): The user's first name. Must be at least 3 characters long.
  - `lastname` (string, optional): The user's last name. Must be at least 3 characters long.
- `email` (string, required): The user's email address. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The user's password. Must be at least 6 characters long.

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success

- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "JWT_TOKEN_HERE",
    "user": {
      "_id": "USER_ID_HERE",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Error

- **Status Code**: `400 Bad Request`
- **Body** (example):

  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name should be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

- **Status Code**: `409 Conflict`
- **Body** (example):
  ```json
  {
    "error": "Email already exists. Please use a different email."
  }
  ```

## Validation

The following validations are performed on the request body:

- `email` must be a valid email format.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.

## Example Request

```bash
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}'
```
