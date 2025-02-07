from pydantic import BaseModel
from sqlalchemy.ext.declarative import declarative_base

DeclarativeBase = declarative_base()
metadata = DeclarativeBase.metadata

class DeclarativeBase(DeclarativeBase):
    __abstract__ = False

class Base(DeclarativeBase):
    def to_pydantic(self, pydantic_model: type[BaseModel]) -> BaseModel:
        return pydantic_model.model_validate(self)
