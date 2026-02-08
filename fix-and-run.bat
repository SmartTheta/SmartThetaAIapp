@echo off
echo ==========================================
echo   SmartTheta Repair ^& Start Script
echo ==========================================
echo.
echo [1/3] Terminating old stuck processes...
taskkill /F /IM node.exe /T >nul 2>&1
echo      Done.
echo.
echo [2/3] Starting Backend Server...
echo      (Note: It will run even without MongoDB now)
start "SmartTheta Server" cmd /k "cd server && npm run dev"
echo.
echo [3/3] Starting Frontend Client...
start "SmartTheta Client" cmd /k "cd client && npm run dev"
echo.
echo ==========================================
echo   SUCCESS! 
echo ==========================================
echo.
echo   1. Please wait about 10-15 seconds for startup.
echo   2. Refresh http://localhost:5173 (or 5174).
echo   3. Look at the terminal windows for the exact URL.
echo.
echo   The UI will now match the refined design!
echo.
pause
