from fastapi import APIRouter
from api.v1.endpoints import auth, chat, roadmap, resume

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(chat.router, prefix="/chat", tags=["chat"])
api_router.include_router(roadmap.router, prefix="/roadmap", tags=["roadmap"])
api_router.include_router(resume.router, prefix="/resume", tags=["resume"])
