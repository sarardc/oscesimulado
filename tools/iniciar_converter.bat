@echo off
echo.
echo  OSCE MD-JS Converter
echo  ====================
echo.

if "%ANTHROPIC_API_KEY%"=="" (
  set /p ANTHROPIC_API_KEY="Cole sua chave Anthropic (sk-ant-...): "
)

echo.
echo  Iniciando servidor em http://localhost:3333
echo  Pressione Ctrl+C para parar.
echo.

node server.js

pause
