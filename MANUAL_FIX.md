# 🔧 MANUAL FIX - Run These Commands

## Problem
The server is still connected to the old database. Nodemon didn't restart properly.

## Solution - Run These Commands One by One

### Step 1: Find and Stop the Old Server Process

```powershell
# Find process using port 5000
Get-NetTCPConnection -LocalPort 5000 | Select-Object -ExpandProperty OwningProcess -Unique
```

**Copy the process ID (number) from the output**

### Step 2: Kill the Process

```powershell
# Replace XXXX with the process ID from Step 1
Stop-Process -Id XXXX -Force
```

**OR use this one-liner:**

```powershell
Get-NetTCPConnection -LocalPort 5000 | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force }
```

### Step 3: Start the Server Fresh

```powershell
cd e:\ST\landingpage\server
npm run dev
```

**Wait for:**
```
✅ MongoDB connected successfully
📊 Database: smarttheta_db
🚀 Server started successfully
```

### Step 4: Trigger Data Fetch

```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/index/refresh -Method POST
```

**Expected Response:**
```json
{
  "message": "Data refreshed successfully",
  "profitLoss": -19915.35,
  "timestamp": "..."
}
```

### Step 5: Verify Data

```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/index/current | Select-Object -ExpandProperty Content
```

**Expected Response:**
```json
{
  "profitLoss": -19915.35,
  "date": "2025-11-20T00:00:00.000Z",
  "timestamp": "..."
}
```

### Step 6: Refresh Frontend

1. Open http://localhost:5173
2. Click the **"Refresh"** button
3. You should see **₹-19,915.35** displayed!

---

## Alternative: Use the Restart Script

```powershell
cd e:\ST\landingpage\server
.\restart-server.ps1
```

This will automatically stop the old server and start a new one.

---

## Quick Verification

After restarting, run this to verify everything:

```powershell
# Check server health
Invoke-WebRequest -Uri http://localhost:5000/health

# Check current data
Invoke-WebRequest -Uri http://localhost:5000/api/index/current

# Check MongoDB
mongosh "mongodb://127.0.0.1:27017/smarttheta_db" --eval "db.indexdatas.find().pretty()"
```

All three should return successful responses!
