from pydantic import BaseModel, EmailStr
from typing import List


class LocatorBase(BaseModel):
    name: str
    email: EmailStr
    phone: str


class LocatorCreate(LocatorBase):
    pass


class LocatorResponse(LocatorBase):
    id: int
    properties: List[int] = []

    class Config:
        orm_mode = True
