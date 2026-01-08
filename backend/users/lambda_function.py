import json

def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps({
            "message": "User Service is running",
            "functions": [
                "View Restaurants",
                "View Menu",
                "Place Order"
            ]
        })
    }

