from sqlalchemy import Column, Integer, String
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(25), unique=True, index=True)  # Length of username can be adjusted as needed
    password = Column(String(255))  # Increased length for hashed passwords
