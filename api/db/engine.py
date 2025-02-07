from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.orm.scoping import scoped_session

DATABASE_URL = f"sqlite:///base.db"

Base = automap_base()
engine = create_engine(
    DATABASE_URL, echo=True
)  # `echo=True` only for debugging purposes, remove in production.

Base.prepare(autoload_with=engine)
session_factory = sessionmaker(bind=engine)
instantiated_session = scoped_session(session_factory)

def get_session() -> Session:
    return instantiated_session()
