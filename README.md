<div align="center">
  <img src="https://via.placeholder.com/800x200/0f172a/ffffff?text=SkillBridge+AI+ChatBot" alt="SkillBridge AI Banner" />
  
  <h1> SkillBridge AI ChatBot</h1>
  <p><strong>Your Personal AI Career Counselor & Resume Analyzer</strong></p>
  
  <a href="https://ai-chat-bot02.vercel.app"><b>Live Demo</b></a> •
  <a href="#features"><b>Features</b></a> •
  <a href="#installation-steps"><b>Installation</b></a> •
  <a href="#why-this-project-matters"><b>For Recruiters</b></a>
</div>

---



##  Problem Statement

Navigating the modern job market is overwhelming. Students and early-career professionals often struggle to identify the exact skills they need, understand how their resume performs against ATS (Applicant Tracking Systems), and figure out the concrete steps required to land their dream job. Traditional career counseling is often expensive or inaccessible. 

##  Project Objectives

- **Democratize Career Guidance:** Provide free, AI-driven mentorship accessible to anyone.
- **Actionable Feedback:** Analyze resumes instantly and provide actionable steps to improve ATS compatibility.
- **Structured Learning:** Generate tailored, step-by-step learning roadmaps based on user goals.
- **Seamless Experience:** Deliver a fast, responsive, and beautiful user interface.

---

##  Features

✅ **Resume Analyzer (Working)** - Upload your PDF resume for an instant ATS compatibility score, strength/weakness breakdown, and improvement suggestions.
✅ **Responsive UI (Working)** - Beautiful, mobile-first design built with Tailwind CSS and ShadCN UI.
✅ **Dashboard (Working)** - Centralized view of analytics, history, and opportunities.
✅ **Authentication (Working)** - Secure user sessions and profile management.
⚠️ **AI Chat (Temporarily Disabled in Production)** - *Note: The complete chat architecture, frontend UI, backend integration logic, and conversation flow have been successfully implemented. It is currently disabled in the live demo due to API cost constraints, but can be instantly activated by configuring an OpenAI API key.*
- **Skill Assessment** - Evaluate current skills and identify gaps.
- **Personalized Learning Roadmap** - Step-by-step plans to achieve career goals.
- **Internship Recommendations** - Discover tailored opportunities.

---

##  Screenshots

### AI Chat Interface
*(Temporarily disabled in production, but fully architected)*
![AI Chat Interface](https://via.placeholder.com/800x400/f3f4f6/6b7280?text=Screenshot:+AI+Chat+Interface)

### Resume Analyzer (Working)
![Resume Analyzer](https://via.placeholder.com/800x400/f3f4f6/6b7280?text=Screenshot:+Resume+Analyzer+Results)

### User Dashboard
![Dashboard](https://via.placeholder.com/800x400/f3f4f6/6b7280?text=Screenshot:+Analytics+Dashboard)

---

##  Technology Stack

**Frontend:**
- Next.js 15 & React 19
- TypeScript
- Tailwind CSS & ShadCN UI
- State Management (React Hooks)

**Backend:**
- Python & FastAPI
- SQLAlchemy (ORM) & Alembic (Migrations)
- LangChain & OpenAI API (LLM Integration)
- PDF.js / PyPDF (Resume Parsing)

**Database & Deployment:**
- SQLite (Development) / PostgreSQL (Production)
- Vercel (Frontend Hosting)
- Render (Backend Hosting)

---

##  System Architecture

The application follows a decoupled client-server architecture:
1. **Client Layer (Next.js):** Handles user interactions, file uploads, and state management. Communicates with the backend via RESTful APIs.
2. **API Layer (FastAPI):** High-performance Python backend that handles authentication, business logic, and routing.
3. **AI/Processing Layer (LangChain):** Manages prompt engineering, contextual memory, and calls to the OpenAI LLM for generating roadmaps and analyzing text.
4. **Data Layer (SQLAlchemy):** Manages user profiles, chat histories, and saved roadmaps.

---

##  Folder Structure

```text
Ai_ChatBot02/
├── frontend/                # Next.js Application
│   ├── src/
│   │   ├── app/             # Next.js App Router (Pages & Layouts)
│   │   ├── components/      # Reusable React components (ShadCN)
│   │   └── lib/             # Utility functions
│   └── tailwind.config.ts   
└── backend/                 # FastAPI Application
    ├── api/                 # API Routes (Chat, Resume, Roadmap)
    ├── core/                # Configuration and AI Logic (Langchain)
    ├── db/                  # Database Models and Sessions
    ├── schemas/             # Pydantic Validation Models
    └── main.py              # FastAPI Entry Point
```

---

##  Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/priyanshu0707july-art/Ai_ChatBot02.git
   cd Ai_ChatBot02
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

3. **Setup Frontend:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

##  Environment Variables

Create a `.env` file in the **backend** directory:
```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=sqlite:///./skillbridge.db
```

Create a `.env.local` file in the **frontend** directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

##  Deployment Information

- **Frontend:** Deployed on [Vercel](https://vercel.com) for edge-optimized static delivery.
- **Backend:** Deployed on [Render](https://render.com) as a web service.
- **CI/CD:** Automated deployments trigger on every push to the `main` branch.

---

##  Challenges Faced

- **API Cost Constraints & LLM Rate Limits:** Balancing a feature-rich AI experience with the realities of OpenAI's token costs and rate limits required implementing efficient prompt engineering and mock-fallbacks for production.
- **Resume Parsing Challenges:** Extracting clean, readable text from complex, multi-column PDF resumes required robust backend error handling.
- **Frontend Optimization:** Ensuring strict Vercel build checks (TypeScript/ESLint) passed smoothly while dealing with complex UI component libraries.
- **AI Integration:** Managing conversational memory and context windows effectively using LangChain.

---

##  Future Improvements

- **Enable Live AI Chat:** Re-activate the OpenAI integration for production once funding is secured.
- **RAG Implementation:** Add Retrieval-Augmented Generation to allow the AI to search a database of real-time job market data.
- **Voice Assistant:** Implement speech-to-text for hands-free career mock interviews.
- **Vector Database Memory:** Replace standard chat history with Pinecone/ChromaDB for long-term user memory across sessions.
- **Real-time Notifications:** Alert users when their specific target jobs are hiring.

---

##  Skills Demonstrated

- **Full Stack Development** (Seamlessly connecting React to Python)
- **AI Integration & Prompt Engineering** (LangChain, OpenAI)
- **REST APIs** (FastAPI routing, validation)
- **Responsive UI/UX Design** (Tailwind, modern aesthetics)
- **System Design & Architecture**
- **Debugging & Deployment** (Vercel, Render, Git)

- **Problem-Solving & Scalability:** Overcoming strict deployment environments, CORS issues, and API limits proves my ability to debug complex systemic issues and design scalable solutions.
- **Modern Web Development:** Utilizing the absolute latest tools (Next.js 15, FastAPI, Tailwind CSS, ShadCN).
