from typing import Any
from fastapi import APIRouter, Depends
from pydantic import BaseModel

from api import deps
from core.ai import get_career_counselor_response
from db.models.user import User

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@router.post("/", response_model=ChatResponse)
def chat_with_counselor(
    request: ChatRequest,
    # current_user: User = Depends(deps.get_current_user), # Temporarily disabled for testing
) -> Any:
    """
    Chat with the AI Career Counselor.
    """
    ai_response = get_career_counselor_response(request.message)
    return {"response": ai_response}
