from flask import jsonify


def proof_of_concept(connection):
    # Take sample entry from database
    cursor = connection.cursor()

    query = "SELECT * FROM SampleTable"

    cursor.execute(query)

    if cursor is None:
        print("ERROR: No entries found")
        return jsonify({"error": True,
                        "message": "No entries found"}), 404

    # Return the first entry
    result = cursor.fetchone()
    cursor.close()
    return jsonify({"entry": result}), 200
