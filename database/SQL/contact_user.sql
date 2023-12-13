CREATE TABLE "contact_user" (
    User_Id SERIAL PRIMARY KEY,
    User_Firstname VARCHAR(50),
    User_Surname VARCHAR(50),
    User_Birthdate DATE,
    User_Mail VARCHAR(100),
    User_Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);