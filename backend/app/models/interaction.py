from sqlalchemy import Column, Integer, String, Text, Date, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)
    hcp_name = Column(String(100), nullable=False)
    hospital = Column(String(100), nullable=False)
    interaction_type = Column(String(50), nullable=False)
    notes = Column(Text, nullable=False)
    follow_up_date = Column(Date)
    created_at = Column(DateTime(timezone=True), server_default=func.now())