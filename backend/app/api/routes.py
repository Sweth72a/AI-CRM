from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app.database import get_db
from app.models.interaction import Interaction
from app.schemas import InteractionCreate
from app.agents.graph import graph

router = APIRouter()


# -------------------------------
# Create Interaction
# -------------------------------
@router.post("/interactions")
def create_interaction(
    interaction: InteractionCreate,
    db: Session = Depends(get_db)
):
    new_interaction = Interaction(
        hcp_name=interaction.hcp_name,
        hospital=interaction.hospital,
        interaction_type=interaction.interaction_type,
        notes=interaction.notes,
        follow_up_date=interaction.follow_up_date
    )

    db.add(new_interaction)
    db.commit()
    db.refresh(new_interaction)

    return {
        "message": "Interaction saved successfully",
        "id": new_interaction.id
    }


# -------------------------------
# Get All Interactions
# -------------------------------
@router.get("/interactions")
def get_interactions(db: Session = Depends(get_db)):
    interactions = db.query(Interaction).all()
    return interactions


# -------------------------------
# Chat Endpoint
# -------------------------------
class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(request: ChatRequest):
    result = graph.invoke({
        "message": request.message
    })

    return {
        "response": result["response"]
    }


# -------------------------------
# Update Interaction
# -------------------------------
@router.put("/interactions/{interaction_id}")
def update_interaction(
    interaction_id: int,
    interaction: InteractionCreate,
    db: Session = Depends(get_db),
):
    db_interaction = (
        db.query(Interaction)
        .filter(Interaction.id == interaction_id)
        .first()
    )

    if not db_interaction:
        raise HTTPException(status_code=404, detail="Interaction not found")

    db_interaction.hcp_name = interaction.hcp_name
    db_interaction.hospital = interaction.hospital
    db_interaction.interaction_type = interaction.interaction_type
    db_interaction.notes = interaction.notes
    db_interaction.follow_up_date = interaction.follow_up_date

    db.commit()
    db.refresh(db_interaction)

    return db_interaction