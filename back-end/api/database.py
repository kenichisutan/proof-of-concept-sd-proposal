import mysql.connector


def connect():
    con = mysql.connector.connect(user="root",
                                  password="12345678",
                                  host="127.0.0.1",
                                  database="proof-of-concept")

    return con
