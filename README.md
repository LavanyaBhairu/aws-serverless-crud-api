# AWS Serverless CRUD API

A production-style Serverless CRUD API built using AWS services.

This project demonstrates how to build scalable backend APIs using AWS Lambda, API Gateway, and DynamoDB.

---

## Architecture

Client → API Gateway → Lambda → DynamoDB

Architecture Diagram:

![Architecture](architecture/aws-serverless-architecture.png)

---

## Tech Stack

- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Node.js
- AWS SDK

---

## Features

- Create Item
- Get Item
- Update Item
- Delete Item
- Serverless architecture
- Fully scalable backend

---

## API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| POST | /items | Create item |
| GET | /items | Get all items |
| GET | /items/{id} | Get item by ID |
| PUT | /items/{id} | Update item |
| DELETE | /items/{id} | Delete item |

---

## Sample Request

Create Item

POST /items

Body:

{
 "id": "101",
 "name": "Coffee",
 "price": 20
}

---

## Sample Response

{
 "message": "Item created successfully",
 "item": {
   "id": "101",
   "name": "Coffee",
   "price": 20
 }
}

---

## DynamoDB Table Structure

| Attribute | Type |
|------|------|
| id | String (Primary Key) |
| name | String |
| price | Number |

---

## Project Structure

aws-serverless-crud-api

lambda/
createItem.js
getItem.js
updateItem.js
deleteItem.js

frontend/

LambdaWithLayer/

architecture/
aws-serverless-architecture.png

README.md

---

## Deployment

The project can be deployed using:

AWS CLI  
Serverless Framework  
AWS SAM

---

## Learning Outcomes

- Build serverless APIs
- Use Lambda with DynamoDB
- Integrate API Gateway with Lambda
- Design scalable backend systems

---

## Author

Lavanya B  
Full Stack Developer → AWS Cloud Engineer
