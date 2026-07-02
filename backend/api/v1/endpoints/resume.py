from typing import Any
from fastapi import APIRouter, Depends, UploadFile, File
from api import deps
from db.models.user import User

router = APIRouter()

@router.post("/analyze")
def analyze_resume(
    resume: UploadFile = File(...),
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    """
    Upload a PDF resume and return analysis.
    """
    # Placeholder for actual PDF parsing and LLM logic
    return {
        "filename": resume.filename,
        "ats_score": 85,
        "strengths": ["Clear formatting", "Good use of action verbs"],
        "weaknesses": ["Missing keywords related to Machine Learning"],
        "suggestions": ["Add more metrics to your impact statements."]
    }
