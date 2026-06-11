# UFC Custom Ranking

This is a humor-themed project created to simulate the official UFC ranking interface, customized with inside jokes among friends. It displays specific individuals as champions of fictitious weight classes.

## Features

- **Responsive UFC Clone UI**: Styled closely to the official UFC rankings layout.
- **Custom Weight Classes**: Features customized weight categories (e.g., God Weight / PESO-DEUS, PESO-GORDIM).
- **Interactive Visuals**: Includes hover zoom animations on champion cards.
- **WhatsApp Shortcut**: Floating button shortcut for team/group contact.
- **Automated Deployment**: Configured to deploy directly to GitHub Pages.

## Tech Stack

- **Frontend Framework**: React 18 (TypeScript)
- **Styling**: Tailwind CSS, Shadcn UI, Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Testing**: Vitest
- **Deployment**: gh-pages

## Project Structure

```text
src/
├── assets/          # Custom fighter portrait images
├── components/      # Application components (Header, SponsorBanner, etc.)
│   └── ui/          # Core layout and UI styling primitives (Button, Card, etc.)
├── pages/           # Page layouts (Index.tsx, NotFound.tsx)
├── App.tsx          # Main application wrapper and routing
├── main.tsx         # Mounting entry point
└── index.css        # Core Tailwind imports and theme utilities
```

## Getting Started

### Prerequisites
- Node.js 18+ or Bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/andretoyama-dev/ufc-los-pollos.git
   cd ufc-los-pollos
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:8080` or the port displayed in your terminal.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the production bundle to `dist/` |
| `npm run lint` | Runs ESLint syntax and code style checks |
| `npm run preview` | Previews the generated production build locally |
| `npm run test` | Runs the test suites using Vitest |
| `npm run deploy` | Deploys the built application to GitHub Pages |

## Disclaimer

This project is for educational and entertainment purposes only. It is not affiliated with, endorsed by, or associated with the Ultimate Fighting Championship (UFC).
