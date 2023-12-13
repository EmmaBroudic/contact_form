CREATE TABLE "message" (
    Message_ID SERIAL PRIMARY KEY,
    Message_Title VARCHAR(100),
    Message_Text VARCHAR(400),
    Message_Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    User_Id INT,
    FOREIGN KEY (User_Id) REFERENCES contact_user (User_Id)
);