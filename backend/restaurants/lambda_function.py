import json
import boto3

# DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Restaurants')

def lambda_handler(event, context):
    try:
        response = table.scan()
        restaurants = response.get('Items', [])

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps(restaurants)
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({"error": str(e)})
        }
