from fastapi import APIRouter, HTTPException
from typing import List
import uuid
import logging

from backend.models import Lead, LeadCreate
from backend.database import AppState

logger = logging.getLogger(__name__)
api_router = APIRouter(prefix="/api")

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/leads", response_model=Lead)
async def create_lead(input: LeadCreate):
    lead_obj = Lead(name=input.name, phone=input.phone)
    
    try:
        async with AppState.pool.acquire() as conn:
            await conn.execute(
                "INSERT INTO leads (id, name, phone, timestamp) VALUES ($1, $2, $3, $4)",
                uuid.UUID(lead_obj.id), lead_obj.name, lead_obj.phone, lead_obj.timestamp
            )
        return lead_obj
    except Exception as e:
        logger.error(f"Failed to create lead: {e}")
        raise HTTPException(status_code=500, detail="Database Error")

@api_router.get("/leads", response_model=List[Lead])
async def get_leads():
    try:
        async with AppState.pool.acquire() as conn:
            rows = await conn.fetch("SELECT id, name, phone, timestamp FROM leads ORDER BY timestamp DESC LIMIT 1000")
            
            return [
                Lead(
                    id=str(row['id']),
                    name=row['name'],
                    phone=row['phone'],
                    timestamp=row['timestamp']
                ) for row in rows
            ]
    except Exception as e:
        logger.error(f"Failed to fetch leads: {e}")
        raise HTTPException(status_code=500, detail="Database Error")
