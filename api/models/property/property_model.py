from sqlalchemy import Column, Float, Integer, ForeignKey, Enum, String
from sqlalchemy.orm import relationship
from api.models.base.base import Base
from api.utils.property_enums import PropertyTypes, PropertyStatuses

class Property(Base):
    __tablename__ = "properties"

    # IDs
    id = Column(Integer, primary_key=True, index=True)
    owner_id = Column(Integer, ForeignKey("owners.id"), index=True, nullable=False)
    tenant_id = Column(Integer, ForeignKey("tenants.id"), nullable=True)
    address_id = Column(Integer, ForeignKey("property_addresses.id"))

    # Enum columns
    type = Column(Enum(PropertyTypes), nullable=False, index=True)
    status = Column(Enum(PropertyStatuses), nullable=False, index=True)

    # Main columns
    name = Column(String, nullable=False)  # e.g. "Sunny Villa"
    description = Column(String, nullable=False)
    value = Column(Float, nullable=False)  # Rent value or property value

    # Property data
    rooms = Column(Integer, nullable=True)
    suites = Column(Integer, nullable=True)
    garage_spaces = Column(Integer, nullable=True)
    property_size = Column(Float, nullable=False)  # In M2

    # Relationships
    tenant = relationship("Tenant", back_populates="properties")
    owner = relationship("Owner", back_populates="properties")
    address = relationship("PropertyAddress", back_populates="properties")
    features = relationship("Feature", secondary="property_features", back_populates="properties")