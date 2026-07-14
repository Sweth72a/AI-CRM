from pydantic import BaseModel
from datetime import date


class InteractionCreate(BaseModel):
    hcp_name: str
    hospital: str
    interaction_type: str
    notes: str
    follow_up_date: date | None = None


class InteractionResponse(InteractionCreate):
    id: int

    class Config:
        from_attributes = True