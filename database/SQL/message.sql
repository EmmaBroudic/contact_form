CREATE TABLE "message" (
    Message_ID SERIAL PRIMARY KEY,
    User_Firstname VARCHAR(50),
    User_Surname VARCHAR(50),
    User_Email VARCHAR(100),
    Message_Title VARCHAR(100),
    Message_Text VARCHAR(400),
    Message_Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);