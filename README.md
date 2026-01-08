
# Backend – Serverless Food Delivery App

## Technologies Used
- AWS Lambda (Python)
- Amazon API Gateway
- Amazon DynamoDB

## APIs Implemented
- GET /restaurants
- POST /order
- GET /track?orderId=xxxx

## DynamoDB Tables
### Restaurants
- restaurantId (PK)
- name
- cuisine
- location

### Orders
- orderId (PK)
- userId
- restaurantId
- items
- totalAmount
- status

## Proof
Screenshots are available in the screenshots folder showing:
- API test results
- DynamoDB table entries
