import json

def lambda_handler(event, context):
    admin_tasks = {
        "restaurants": [
            {"id": 1, "name": "Food Plaza"},
            {"id": 2, "name": "Tasty Treats"}
        ],
        "actions": [
            "Add Restaurant",
            "Update Menu",
            "View Orders"
        ]
    }

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "Admin service is running",
            "adminFunctions": admin_tasks
        })
    }
