# Ascending Audiology

## Overview

Ascending Audiology is a Case Management System designed for audiology clinics. It provides a comprehensive solution for managing patient data, conducting audiological evaluations, and generating reports.

The project currently consists of two main components:
1.  **Desktop Application (Python/Tkinter):** The core application for case management, database storage, and audiogram plotting.
2.  **Web Graph Plotter (TypeScript/Vite):** An experimental web-based module for rendering interactive audiograms.

## Features

-   **Patient Management:** Create, read, and update patient records.
-   **Audiogram Plotting:** Interactive plotting of Left and Right ear audiograms with standard audiology symbols (Air Conduction, Bone Conduction, Masked/Unmasked).
-   **Reporting:** Automated generation of PDF reports using HTML templates and Selenium.
-   **Data Persistence:** SQLite database integration for storing case details and graph points.
-   **Export:** Export database records to CSV format.

## Setup Instructions

### Prerequisites

-   **Python 3.x**
-   **Node.js & npm** (for the web plotter)
-   **Google Chrome** (for PDF generation via Selenium)

### Desktop Application (Python)

1.  Clone the repository.
2.  Install the required Python dependencies:

    ```bash
    pip install pandas selenium tkcalendar Pillow chromedriver-autoinstaller
    ```

    *Note: `tkinter` and `sqlite3` are typically included in standard Python installations.*

3.  Run the application:

    ```bash
    python main.py
    ```

### Web Graph Plotter (TypeScript)

1.  Navigate to the `graph-plotter` directory:

    ```bash
    cd graph-plotter
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

4.  Open the local URL provided (usually `http://localhost:5173`) in your browser.

## Usage

### Desktop App

1.  **New Case:** Click `File > New` to start a fresh patient record.
2.  **Open Case:** Click `File > Open` to view existing cases from the database. Double-click a row to load the full details.
3.  **Plotting:**
    -   Use the buttons on the right side of the graph to select a symbol (e.g., "Unmasked AC", "Masked BC").
    -   Click on the grid to place the point. The application automatically connects points with lines appropriate for the symbol type.
    -   Use "Remove Points" to delete incorrect entries.
4.  **Save/Update:** Fill in the patient details and clinical findings, then click "Submit" (for new cases) or "Update" (for existing cases). This will save the data and generate a PDF report.

### Web Plotter

-   The web plotter is a standalone visualization tool. Move your mouse over the grid to see the snapping cursor. This component serves as a proof-of-concept for future web migration.
