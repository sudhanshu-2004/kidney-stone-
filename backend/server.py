from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from contextlib import asynccontextmanager

from backend.database import init_db, close_db
from backend.routes import api_router

logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: create connection pool and ensure table exists
    try:
        await init_db()
    except Exception as e:
        logger.error(f"Error initializing database: {e}")
        raise e
    yield
    # Shutdown
    await close_db()

# Create the main app
app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

# Include the external routers
app.include_router(api_router)
