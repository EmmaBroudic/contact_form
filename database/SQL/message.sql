CREATE TABLE "message" (
    Message_ID SERIAL PRIMARY KEY,
    Message_Title VARCHAR(50),
    Message_Text VARCHAR(400),
    Message_Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    User_ID INT,
    FOREIGN KEY (User_ID) REFERENCES contact_user (User_ID)
);