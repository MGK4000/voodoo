:: ----------------------------------------------------------------------------
:: File: lib.cmd
::
:: Desc: Copies project dependencies into the lib folder.
::
:: Copyright (c) 2013 VoodooJs Authors
:: ----------------------------------------------------------------------------

@echo off

del /S /Q "%~dp0..\lib\*.*"
mkdir "%~dp0..\lib"

copy /B /Y "%~dp0..\tools\lib\three.min.js" "%~dp0..\lib"
copy /B /Y "%~dp0..\build\voodoo-*.min.debug.js" "%~dp0..\lib\voodoo.min.debug.js"
