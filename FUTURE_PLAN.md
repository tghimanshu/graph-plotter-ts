# Future Plan: Ascending Audiology Phase 2

This document outlines the strategic plan for the next phase of development for the Ascending Audiology project. Phase 1 established a functional desktop prototype and explored web-based plotting capabilities. Phase 2 aims to improve code quality, maintainability, and scalability.

## 1. Refactoring and Architecture

The current `main.py` is a monolithic script containing UI definition, business logic, and database access.

-   **Modularization:** Split `main.py` into separate modules:
    -   `ui/`: Contains Tkinter widgets and layout logic.
    -   `db/`: Database connection and query handling.
    -   `models/`: Data classes representing a Case, Patient, Audiogram, etc.
    -   `utils/`: Helper functions (PDF generation, graph math).
-   **Configuration Management:** Move hardcoded values (grid sizes, colors, file paths) into a config file (YAML/JSON).

## 2. Database Enhancements

-   **ORM Migration:** Replace raw SQL queries with an Object-Relational Mapper (ORM) like **SQLAlchemy** or **Peewee**. This prevents SQL injection vulnerabilities and makes the code more Pythonic.
-   **Migrations:** Implement a database migration tool (e.g., Alembic) to handle schema changes gracefully.

## 3. Web Migration (Major Initiative)

The `graph-plotter` directory demonstrates the potential for a modern web interface.

-   **Full Stack Web App:** Transition the entire application to a web-based architecture.
    -   **Frontend:** React (using the existing TypeScript work) or Vue.js.
    -   **Backend:** FastAPI or Flask (Python) to serve the API and handle PDF generation/printing.
-   **Desktop Wrapper:** Use **Electron** or **Tauri** to wrap the web application if a native desktop experience is still required. This allows reusing the same codebase for both web and desktop.

## 4. Testing

-   **Unit Tests:** Implement `pytest` for business logic (e.g., PTA calculation, data formatting).
-   **UI Tests:** Add automated UI tests using Selenium or specialized Tkinter testing tools.

## 5. CI/CD

-   **Linting & Formatting:** Enforce PEP 8 (Python) and Prettier (JS/TS) using pre-commit hooks.
-   **Build Pipelines:** Automate the build process for the web assets and the desktop executable (using PyInstaller).
