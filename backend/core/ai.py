import os
from langchain_openai import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage
from core.config import settings

# Initialize ChatOpenAI
# You can set the OPENAI_API_KEY environment variable.
chat_model = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)

def get_career_counselor_response(user_message: str, chat_history: list = None):
    """
    Calls the OpenAI LLM with a career counselor prompt.
    """
    if chat_history is None:
        chat_history = []
        
    messages = [
        SystemMessage(content="You are the SkillBridge AI Counselor. You act as a Senior Career Mentor. You help students with career selection, skill development, and jobs. You reply with markdown, use tables when needed, and give structured, easy-to-read advice.")
    ]
    
    # Add history (simplified)
    for msg in chat_history:
        messages.append(HumanMessage(content=msg))
        
    messages.append(HumanMessage(content=user_message))
    
    response = chat_model.invoke(messages)
    return response.content
