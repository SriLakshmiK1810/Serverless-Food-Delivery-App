import json
import boto3
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Orders')

def lambda_handler(event, context):
    try:
        # Handle body safely
        if "body" in event:
            if isinstance(event["body"], str):
                body = json.loads(event["body"])
            else:
                body = event["body"]
        else:
            # Fallback (for test invoke edge cases)
            body = event

        # Generate unique order ID
        order_id = str(uuid.uuid4())

        order_item = {
            "orderId": order_id,
            "userId": body["userId"],
            "restaurantId": body["restaurantId"],
            "items": body["items"],
            "totalAmount": body["totalAmount"],
            "status": "Order Placed"
        }

        # Store order in DynamoDB
        table.put_item(Item=order_item)

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "message": "Order placed successfully",
                "orderId": order_id
            })
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({
                "error": str(e)
            })
        }
