# Analytics Dashboard

## Overview

This project is a modular, responsive analytics dashboard built with **React + TypeScript**. The focus is on clean separation of concerns, reusability, and predictable data flow, while closely matching the provided design requirements.

The dashboard visualizes multiple metrics (bar charts, line charts, tables, and summary cards) with support for **time-based filtering**, **manual refresh**, and a **collapsible sidebar** layout.

---
**Live Demo:** https://analytics-dashboard-task.netlify.app/

## Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn package manager

### Installation

1. Clone the repository (or navigate to the project directory)
2. Install dependencies:

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### Available Scripts

* `npm run dev` - Start the development server with hot module replacement
* `npm run build` - Build the app for production (outputs to `dist/`)
* `npm run preview` - Preview the production build locally
* `npm run lint` - Run ESLint to check for code issues

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

---

## Approach

After reviewing the requirements, I started by **analyzing the design** rather than jumping straight into implementation. The goal was to treat the UI as a system of reusable building blocks instead of one-off components.

My process was:

1. **Design-first breakdown**
   Each dashboard card was split into logical components based on structure and behavior (title, total, refresh action, content).

2. **Identify repetition & consolidate**
   Repeated UI patterns (chart cards, loading/error states, totals, refresh logic) were consolidated into reusable components instead of duplicating logic.

3. **Layout before data**
   I implemented the dashboard grid and layout first using CSS Grid, ensuring responsiveness across screen sizes before wiring up data.

4. **Strong typing early**
   All chart data shapes and shared contracts were defined upfront in `dashboard.types.ts` to keep components predictable and self-documented.

5. **Incremental feature build-up**

   * Bar charts
   * Line charts
   * Queries-by-source table
   * Users summary card
   * Filters and refresh logic
   * Sidebar integration

6. **Refactor pass**
   After everything was working end-to-end, I reviewed the codebase to:

   * Extract helper utilities
   * Remove duplication
   * Simplify data-fetching patterns
   * Improve naming and consistency

---

## Architecture & File Structure

```
api/
  dashboard.api.ts     # Mock API + filtering logic

components/
  ChartCard.tsx        # Reusable card wrapper
  Charts/
    BarChart.tsx
    LineChart.tsx
  QueriesBySourceTable.tsx
  UsersCard.tsx
  TimeRangeFilter.tsx
  SideBar.tsx

hooks/
  useChartData.ts      # Shared async data-fetching hook

pages/
  DashboardPage.tsx    # Main dashboard composition

types/
  dashboard.types.ts   # Shared TypeScript contracts

utils/
  formatNumbers.ts     # Number & time formatting helpers

App.tsx                # Sidebar + dashboard integration
```

---

## Key Design Decisions

### 1. Reusable `ChartCard`

Instead of each chart managing its own loading, error, total, and refresh UI, all of that logic is centralized in `ChartCard`.

**Why:**

* Reduces duplication
* Enforces consistent UX
* Makes adding new charts trivial

---

### 2. Single Generic Data Hook (`useChartData`)

Rather than creating multiple custom hooks, a single generic hook handles:

* Loading state
* Error handling
* Manual refresh
* Dependency-based re-fetching

**Why:**

* Keeps hooks simple and predictable
* Avoids over-engineering
* Makes refresh-all functionality easy

---

### 3. API-Level Filtering

Date range filtering lives inside `dashboard.api.ts`, not inside components.

**Why:**

* UI components stay dumb and focused on rendering
* Data logic remains centralized
* Mirrors how real APIs behave

---

### 4. Explicit Date Handling

Dates are normalized to midnight boundaries when filtering time series data.

**Why:**

* Prevents off-by-one errors
* Makes ranges like `7d`, `30d`, `90d` inclusive and predictable

---

### 5. Controlled Refresh Strategy

Each chart exposes a `loadData` method. The dashboard-level refresh button simply triggers all of them.

**Why:**

* Avoids global state
* Keeps refresh logic explicit
* Scales well as new widgets are added

---

### 6. Color as a Prop

Charts accept `accentColor` as a prop instead of hardcoding styles.

**Why:**

* Enables visual differentiation
* Keeps chart components reusable
* Aligns with design-system thinking

---

### 7. Sidebar Integration at App Level

The sidebar is managed in `App.tsx`, not inside the dashboard page.

**Why:**

* Keeps layout concerns separate from page logic
* Allows responsive behavior (auto-close on smaller screens)

---

## Type System Notes

* `DateRange` is a strict union (`"7d" | "30d" | "90d"`) to prevent invalid states.
* Bar and line charts share a common base shape for consistency.
* All API responses are typed to avoid runtime assumptions.

---

## Utilities

Formatting logic is extracted into helpers:

* `formatNumber` – handles large numbers (`k`, `M`)
* `formatTime` – time-based totals
* `formatTotal` – single entry point for card totals

**Why:**

* Keeps components clean
* Centralizes formatting rules

---

## What I’d Improve Next

If this were taken further:

* Memoize chart components for large datasets
* Extract date utilities into a shared helper
* Add skeleton loaders instead of harcoding Loading...
* Introduce theme tokens for colors
* Add unit tests for filtering logic

---

## Summary

This dashboard was built with a **design-system mindset**:

* Reusable components
* Centralized data logic
* Strong typing
* Predictable state flow

The end result is a dashboard that is easy to extend, easy to reason about, and resilient to future changes.


Disclaimer: This Readme was made with the help of ChatGPT
