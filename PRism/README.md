# PRism: Human Performance Tracking System

## What It Is
PRism is a modular platform for tracking human performance across endurance and strength training.  
Think of it as one engine for runs, lifts, and data overlays (like music cadence).  

## Current Scope (MVP)
- **Running module**: log distance, pace, cadence, splits.  
- **Lifting module**: log sets, reps, weight, rest timer.  
- **Dashboard**: review sessions, highlight PRs.  
- **Data store**: SQLite for history (scalable to Postgres).  

## Planned Next Steps
- Add workout generator (weekly planning).  
- Overlay Spotify data against cadence/BPM.  
- Deploy as a Blazor portal (user login, sessions, PR dashboard).  
- Stripe integration for 45-day trial → subscription billing.  

## Why It Exists
Athletes juggle multiple fragmented tools. PRism consolidates running apps, lifting logs, and music overlays into one workflow.  
Goal: make performance tracking simple, addictive, and measurable.  

## Tech Stack
- Backend: Python (Flask)  
- Frontend: Blazor (Portal UI, user login, dashboards)  
- DB: SQLite (upgrade path to Postgres)  
- Infra: GitHub repo, branch protections, CI/CD ready  

---
## Chi Pisa 