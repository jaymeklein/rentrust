from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv(Path(".env"))

USER = os.getenv("DB_USER")
PASSWORD = os.getenv("DB_PASSWORD")
HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")

DATABASE_URL = f"mysql://{USER}:{PASSWORD}@{HOST}/{DB_NAME}"

engine = create_engine(
    DATABASE_URL, echo=True
)  # `echo=True` only for debugging purposes, remove in production.

# Session Factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_session():
    """
    Returns a session to interact with the database.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
