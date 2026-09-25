@REM ----------------------------------------------------------------------------
@REM Maven Start Up Batch script
@REM ----------------------------------------------------------------------------
@echo off
setlocal

set "DIRNAME=%~dp0"
if "%DIRNAME%" == "" set "DIRNAME=."
set "MAVEN_PROJECTBASEDIR=%DIRNAME%"
if "%MAVEN_PROJECTBASEDIR:~-1%"=="\" set "MAVEN_PROJECTBASEDIR=%MAVEN_PROJECTBASEDIR:~0,-1%"

if not "%JAVA_HOME%" == "" goto OkJHome
for %%i in (java.exe) do set "JAVACMD=%%~$PATH:i"
if not "%JAVACMD%" == "" goto OkJHome

echo Error: JAVA_HOME is not defined and cannot find java.exe in PATH.
exit /b 1

:OkJHome
if "%JAVACMD%" == "" set "JAVACMD=%JAVA_HOME%\bin\java.exe"

set "WRAPPER_JAR=%DIRNAME%.mvn\wrapper\maven-wrapper.jar"

"%JAVACMD%" -cp "%WRAPPER_JAR%" -Dmaven.multiModuleProjectDirectory="%MAVEN_PROJECTBASEDIR%" org.apache.maven.wrapper.MavenWrapperMain %*
if ERRORLEVEL 1 exit /b %ERRORLEVEL%
exit /b 0
