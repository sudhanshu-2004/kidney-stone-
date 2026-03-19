import asyncpg
import os
import logging
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logger = logging.getLogger(__name__)

class AppState:
    pool = None

async def init_db():
    database_url = os.environ.get('DATABASE_URL')
    if database_url and database_url.startswith("postgres://"):
        database_url = database_url.replace("postgres://", "postgresql://", 1)
        
    if not database_url:
        raise ValueError("DATABASE_URL environment variable is not set")
        
    AppState.pool = await asyncpg.create_pool(database_url)
    async with AppState.pool.acquire() as conn:
        # Create table if it doesn't exist
        await conn.execute('''
            CREATE TABLE IF NOT EXISTS leads (
                id UUID PRIMARY KEY,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                timestamp TIMESTAMPTZ NOT NULL
            )
        ''')
    logger.info("Database initialized successfully.")

async def close_db():
    if AppState.pool:
        await AppState.pool.close()
