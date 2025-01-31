from sqlalchemy import Column, ForeignKey, Integer
from api.models.property.feature_model import Feature
from api.models.property.property_model import Property
from base.base import Base
from sqlalchemy.orm import relationship


class PropertyFeature(Base):
    __tablename__ = "property_features"

    id = Column(Integer, primary_key=True, index=True)
    property_id = Column(Integer, ForeignKey(Property.id))
    feature_id = Column(Integer, ForeignKey(Feature.id))

    properties = relationship(
        "Feature", secondary=Property, back_populates="property_features"
    )
