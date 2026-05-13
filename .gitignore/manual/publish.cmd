@echo off
chcp 65001 >nul

cd /d "D:\MyProgect\portfolio-site"

echo ========================================
echo  Публикация portfolio-site на GitHub Pages
echo ========================================
echo.

if not exist ".git" (
    echo ОШИБКА: В этой папке нет Git-репозитория.
    echo Проверь путь: D:\MyProgect\portfolio-site
    pause
    exit /b 1
)

if not exist ".gitignore" (
    echo Создаю .gitignore
    echo manual/ > .gitignore
    echo publish.cmd >> .gitignore
    echo publish.ps1 >> .gitignore
)

findstr /x /c:"manual/" ".gitignore" >nul
if errorlevel 1 (
    echo manual/>>.gitignore
)

findstr /x /c:"publish.cmd" ".gitignore" >nul
if errorlevel 1 (
    echo publish.cmd>>.gitignore
)

findstr /x /c:"publish.ps1" ".gitignore" >nul
if errorlevel 1 (
    echo publish.ps1>>.gitignore
)

echo Проверяю, что папка manual игнорируется...
if exist "manual" (
    echo test>manual\_test_ignore.md
    git check-ignore -q manual\_test_ignore.md
    if errorlevel 1 (
        echo.
        echo ОШИБКА: папка manual НЕ игнорируется.
        echo Проверь файл .gitignore. В нем должна быть строка manual/
        del manual\_test_ignore.md >nul 2>nul
        pause
        exit /b 1
    ) else (
        echo OK: папка manual игнорируется.
        del manual\_test_ignore.md >nul 2>nul
    )
) else (
    echo Папки manual пока нет. Это нормально.
)

echo.
echo Текущий статус:
git status --short

echo.
echo Добавляю изменения, кроме файлов из .gitignore...
git add .

echo.
echo Что подготовлено к отправке:
git status --short

echo.
git diff --cached --quiet
if not errorlevel 1 (
    echo Нет новых изменений для публикации.
    pause
    exit /b 0
)

set /p COMMIT_MSG="Введите комментарий к публикации или нажмите Enter: "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Update portfolio site

echo.
echo Создаю commit...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo.
    echo ОШИБКА: commit не создан.
    pause
    exit /b 1
)

echo.
echo Отправляю на GitHub...
git push
if errorlevel 1 (
    echo.
    echo ОШИБКА: git push не выполнен.
    echo Возможно, нужно один раз выполнить: git push -u origin main
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Готово. Сайт отправлен на GitHub.
echo  Проверь через 1-3 минуты:
echo  https://romanaleksandrowith.github.io/portfolio-site/
echo ========================================
echo.
pause