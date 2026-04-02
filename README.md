# Workspace

A responsive front-end application using React.

## 🛠 Tech Stack

- **Framework**: Next.js 16.2.1
- **Runtime**: React 19.2.4
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **Package Manager**: npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arunkumarmudakavi/worcspace.git
   cd worcspace
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
src/
├── app/
│   ├── (home)/
│   │   ├── layout.tsx          # Home layout with navbar and sidebar
│   │   ├── page.tsx            # Dashboard home page
│   │   └── KnowledgeBase/
│   │       └── page.tsx        # Knowledge base page
│   ├── globals.css             # Global styles
│   └── layout.tsx              # Root layout
└── components/
    ├── ui/                     # Reusable UI components
    │   ├── Button.tsx
    │   ├── Card.tsx
    │   ├── Input.tsx
    │   └── ...
    ├── Drawer.tsx
    ├── Header.tsx
    ├── Navbar.tsx
    ├── Pagination.tsx
    └── Sidebar.tsx

```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## License

This project is private and proprietary.
