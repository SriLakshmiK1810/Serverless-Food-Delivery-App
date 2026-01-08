
import json
import boto3

# Create DynamoDB resource
dynamodb = boto3.resource('dynamodb')

# Connect to Restaurants table
table = dynamodb.Table('Restaurants')

def lambda_handler(event, context):
    try:
        # Scan DynamoDB table
        response = table.scan()
        restaurants = response.get('Items', [])

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps(restaurants)
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({
                "error": str(e)
            })
        }
