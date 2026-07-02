from typing import Any
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from api import deps
from db.models.user import User

router = APIRouter()

class UserProfileResponse(BaseModel):
    id: int
    email: str
    xp: int
    level: int
    
    class Config:
        orm_mode = True

@router.get("/me", response_model=UserProfileResponse)
def get_user_profile(
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    """
    Get current user profile including gamification stats.
    """
    # For now, if testing without token, this will fail. 
    # But this is the structure for the real endpoint.
    return current_user

@router.post("/xp/add")
def add_xp(
    amount: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    """
    Add XP to the user and level up if threshold met.
    """
    current_user.xp += amount
    # Level up logic: every 1000 XP is a level
    current_user.level = (current_user.xp // 1000) + 1
    
    db.commit()
    db.refresh(current_user)
    return {"message": "XP added", "new_xp": current_user.xp, "new_level": current_user.level}
