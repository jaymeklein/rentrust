# property.py
from sqlalchemy import Column, Float, Integer, ForeignKey, Enum, String
from api.models.property.property_feature_model import PropertyFeature
from api.utils.enums import PropertyTypes, PropertyStatuses
from base.base import Base
from sqlalchemy.orm import relationship

from api.models.property.property_address_model import PropertyAddress
from owner.owner_model import Owner
from tenant.tenant_model import Tenant


class Property(Base):
    __tablename__ = "properties"

    # IDs
    id = Column(Integer, primary_key=True, index=True)
    owner_id = Column(Integer, ForeignKey(Owner.id), index=True, nullable=False)
    tenant_id = Column(Integer, ForeignKey(Tenant.id), nullable=True)
    address_id = Column(Integer, ForeignKey(PropertyAddress.id))

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

    features = relationship(
        "Feature", secondary=PropertyFeature, back_populates="properties"
    )
