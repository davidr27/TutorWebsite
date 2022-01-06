#information for using gmal
#port 587 is preferred

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib

def get_credentials():
    file = open("email_credentials.txt")
    contents = file.readlines()
    credentials = {"email": "", "password": ""}
    credentials["email"] = contents[0].strip()
    credentials["password"] = contents[1].strip()
    return credentials


def emailTo(emailAddress, credentials):
    #enter your google gmail credentials here for testing. Do not upload them
    port = 587
    password = credentials["password"]
    username = credentials["email"]

    to = emailAddress
    # backend testing for variables
    # print(emailAddress)
    # print(password)
    # print(username)

    msg = MIMEMultipart('alternative')
    msg['Subject'] = "Activate your account"
    msg['From'] = username
    msg['To'] = to
    text = "Please activate your account."
    html = """\
    <html>
      <head></head>
      <body>
        <p>Need help with this</p>
      </body>
    </html>
    """
    part1 = MIMEText(text, 'plain')
    part2 = MIMEText(html, 'html')
    msg.attach(part1)
    msg.attach(part2)


    try:
        server = smtplib.SMTP('smtp.gmail.com', port)
        server.starttls()

        server.login(username, password)
        server.sendmail(username, to, msg.as_string())
        print("Everything is good")
        server.quit()
    except:
        print('something went wrong')
