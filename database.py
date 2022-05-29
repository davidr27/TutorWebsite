def initialize(app):
    # Read database credentials file to login to the database
    dbCredentialsFile = open("credentials.txt","r")
    dbHost = None
    dbUsername = None
    dbPassword = None
    dbDatabase = None

    # parse credentials file
    for line in dbCredentialsFile.readlines():
        line = line.split("=")
        for i in range(0, len(line)):
            line[i] = line[i].strip()

        #set credential variables
        if line[0] == "host":
            dbHost = line[1]
            print(dbHost)
        elif line[0] == "user":
            dbUsername = line[1]
            print(dbUsername)
        elif line[0] == "passwd":
            dbPassword = line[1]
            print(dbPassword)
        elif line[0] == "database":
            dbDatabase = line[1]
            print(dbDatabase)

    app.config['MYSQL_HOST'] = dbHost
    app.config['MYSQL_USER'] = dbUsername
    app.config['MYSQL_PASSWORD'] = dbPassword
    app.config['MYSQL_DB'] = dbDatabase
    dbCredentialsFile.close() #close file

def addInformation(mysql):
    response = {"response": False}
    cur = mysql.connection.cursor()
    cur.execute(f"INSERT INTO information(userName, userEmail) VALUES('David Ramirez', 'david.9706@hotmail.com');")
    response["response"] =True
    mysql.connection.commit()
    cur.close()
    return response