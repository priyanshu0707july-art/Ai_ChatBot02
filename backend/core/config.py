from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "SkillBridge AI Counselor"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "YOUR_SUPER_SECRET_KEY_REPLACE_ME_LATER"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    SQLALCHEMY_DATABASE_URI: str = "sqlite:///./skillbridge.db"
    
    class Config:
        env_file = ".env"

settings = Settings()
