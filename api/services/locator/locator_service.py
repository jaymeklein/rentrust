# services/locator_service.py
from typing import List

from fastapi import HTTPException
from models.locator.locator_model import Locator
from schemas.locator.locator_scheme import LocatorCreate
from sqlalchemy.orm import Session
from api.db.engine import get_session


class LocatorService:
    def get_all_locators(self) -> List[Locator]:
        with Session(get_session()) as session:
            return session.query(Locator).all()

    def create_locator(self, locator_data: LocatorCreate) -> Locator:
        new_locator = Locator(**locator_data.__dict__)
        db_session.add(new_locator)
        db_session.commit()
        db_session.refresh(new_locator)
        return new_locator

    def get_locator(self, locator_id: int) -> Locator:
        return db_session.query(Locator).filter(Locator.id == locator_id).first()

    def update_locator(self, locator_id: int, locator_data: LocatorCreate) -> Locator:
        locator = self.get_locator(locator_id)
        if not locator:
            raise HTTPException(status_code=404, detail="Locator not found")
        for key, value in locator_data.__dict__.items():
            setattr(locator, key, value)
        db_session.commit()
        db_session.refresh(locator)
        return locator

    def delete_locator(self, locator_id: int):
        locator = self.get_locator(locator_id)
        if not locator:
            raise HTTPException(status_code=404, detail="Locator not found")
        db_session.delete(locator)
        db_session.commit()

    def get_locator_properties(self, locator_id: int):
        locator = self.get_locator(locator_id)
        if not locator:
            raise HTTPException(status_code=404, detail="Locator not found")
        return locator.properties
