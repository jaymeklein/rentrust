from fastapi import FastAPI
from routers.locator import locator_router

app = FastAPI()

app.include_router(locator_router.router, prefix="/locators", tags=["Locators"])
# app.include_router(tenants.router, prefix="/tenants", tags=["Tenants"])
# app.include_router(properties.router, prefix="/properties", tags=["Properties"])
# app.include_router(feedback.router, prefix="/feedback", tags=["Feedback"])
