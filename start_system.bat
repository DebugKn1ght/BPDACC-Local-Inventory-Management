@echo off
echo ===================================================
echo BPDACC Local Inventory Management - Startup Script
echo ===================================================
echo.
echo Starting the web server on port 0911...
echo (Please keep this window open or minimize it)
echo.

:: %~dp0 gets the folder path where this batch file is located
cd /d "%~dp0"

:: Start the Next.js app
npm run dev
