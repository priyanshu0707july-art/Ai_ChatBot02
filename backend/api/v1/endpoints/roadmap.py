from typing import Any
from fastapi import APIRouter, Depends
from pydantic import BaseModel

from api import deps
from db.models.user import User

router = APIRouter()

class RoadmapRequest(BaseModel):
    goal: str
    current_skills: list[str]

class RoadmapResponse(BaseModel):
    roadmap: dict

@router.post("/", response_model=RoadmapResponse)
def generate_roadmap(
    request: RoadmapRequest,
    # current_user: User = Depends(deps.get_current_user), # Temporarily disabled
) -> Any:
    """
    Generate a career/learning roadmap.
    """
    # This is a mock response, later we'll connect it to LLM
    mock_roadmap = {
        "goal": request.goal,
        "phases": [
            {"phase": "Beginner", "tasks": ["Learn Basics", "Watch Tutorials"]},
            {"phase": "Intermediate", "tasks": ["Build Projects", "Learn Frameworks"]},
            {"phase": "Advanced", "tasks": ["Contribute to Open Source", "Apply for Jobs"]}
        ]
    }
    return {"roadmap": mock_roadmap}
