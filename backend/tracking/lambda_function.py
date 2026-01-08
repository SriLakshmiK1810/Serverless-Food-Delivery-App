
import json
import boto3

dynamodb = boto3.resource(
    'dynamodb',
    region_name='ap-south-1'
)

table = dynamodb.Table('Orders')

def lambda_handler(event, context):
    try:
        # SAFELY read query params
        params = event.get("queryStringParameters") or {}

        order_id = params.get("orderId")
        if not order_id:
            return {
                "statusCode": 400,
                "body": json.dumps({"message": "orderId is required"})
            }

        response = table.get_item(
            Key={"orderId": order_id}
        )

        if "Item" not in response:
            return {
                "statusCode": 404,
                "body": json.dumps({"message": "Order not found"})
            }

        return {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": json.dumps({
                "orderId": order_id,
                "status": response["Item"].get("status", "Unknown")
            })
        }

    except Exception as e:
        # IMPORTANT: show error in logs
        print("ERROR:", str(e))
        return {
            "statusCode": 500,
            "body": json.dumps({"message": "Internal server error"})
        }
