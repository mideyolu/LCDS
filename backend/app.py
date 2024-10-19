from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base 
from auth import router as auth_router
from models import User            

# Create the database tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow your React app's origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Include authentication routes
app.include_router(auth_router)
