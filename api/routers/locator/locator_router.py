# routers/locators.py
from fastapi import APIRouter, HTTPException
from typing import List
from schemas.locator.locator_scheme import LocatorCreate, LocatorResponse
from services.locator.locator_service import LocatorService

router = APIRouter()

# Dependency to inject the service
locator_service = LocatorService()


@router.get("/", response_model=List[LocatorResponse])
async def list_locators():
    return locator_service.get_all_locators()


@router.post("/", response_model=LocatorResponse)
async def create_locator(locator_data: LocatorCreate):
    return locator_service.create_locator(locator_data)


@router.get("/{locator_id}", response_model=LocatorResponse)
async def get_locator(locator_id: int):
    locator = locator_service.get_locator(locator_id)
    if not locator:
        raise HTTPException(status_code=404, detail="Locator not found")
    return locator


@router.put("/{locator_id}", response_model=LocatorResponse)
async def update_locator(locator_id: int, locator_data: LocatorCreate):
    return locator_service.update_locator(locator_id, locator_data)


@router.delete("/{locator_id}")
async def delete_locator(locator_id: int):
    locator_service.delete_locator(locator_id)
    return {"message": "Locator deleted successfully"}


# # routers/locators/properties.py (if subroutes are needed for properties associated with locators)
# @router.get("/{locator_id}/properties", response_model=List[PropertyResponse])
# async def list_locator_properties(locator_id: int):
#     return locator_service.get_locator_properties(locator_id)
