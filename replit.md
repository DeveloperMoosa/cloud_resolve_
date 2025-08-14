# replit.md

## Overview

This is a full-stack web application built with React and Express.js, featuring a modern IT support company website called "CloudResolve". The application uses TypeScript throughout, implements a component-based UI architecture with shadcn/ui, and includes a contact form with database storage capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- Removed the Awards section from the homepage (December 2024)
- Added background video to the hero section with floating particle animations
- Enhanced dynamic visual effects with animated overlay elements
- Implemented London cityscape video background (July 17, 2025)
- Fixed video playback issues with multiple fallback sources
- Embedded specific YouTube Shorts video (https://www.youtube.com/shorts/usw7TodLcx8) as hero background per user request
- Replaced YouTube embed with Pexels London Thames River video (https://www.pexels.com/video/3568724/) for better landscape display
- Updated hero background to use YouTube video (https://www.youtube.com/watch?v=CzT-LSCqCyc) as requested (July 23, 2025)
- Replaced YouTube embed with local downloaded video file for faster loading (July 23, 2025)
- Downloaded high-quality London aerial footage from Pexels for better video quality (July 23, 2025)
- Removed Awards section completely as per user request (July 17, 2025)
- Updated testimonials section to remove "award-winning" reference
- Replaced analytics dashboard image in testimonials section with professional IT support team image
- Added abstract wave background to Experience section with subtle animation effect (iStock video background)
- Removed all customer reviews from testimonials section as per user request (July 17, 2025)
- Replaced all "Silver Cloud" references with "CloudResolve" throughout the site (July 17, 2025)
- Updated contact email to info@cloudresolve.co.uk
- Removed physical address from contact section as per user request
- Added comprehensive SEO optimization tags to improve Google rankings
- Updated hero section background to use background-video.mp4 from public folder (January 14, 2025)

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom Azure-blue theme
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Development Setup**: Hot reload with Vite middleware in development
- **Production Build**: esbuild for server-side bundling

### Component Structure
The frontend follows a well-organized component architecture:
- **Layout Components**: Navigation, Footer
- **Section Components**: Modular page sections (Hero, About, Services, etc.)
- **UI Components**: Reusable shadcn/ui components
- **Pages**: Route-based page components

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared TypeScript schema definitions with Zod validation
- **Storage**: Abstracted storage interface with in-memory implementation for development
- **Tables**: Users table and contact submissions table

### Form Handling
- **Validation**: React Hook Form with Zod resolvers for type-safe form validation
- **Contact Form**: Complete contact form with fields for name, company, email, phone, and message
- **Error Handling**: Comprehensive error handling with user-friendly messages

### UI/UX Features
- **Responsive Design**: Mobile-first responsive design
- **Dark Mode Support**: Built-in dark mode capabilities
- **Smooth Scrolling**: Animated section navigation
- **Loading States**: Proper loading states and error handling
- **Toast Notifications**: User feedback through toast notifications

## Data Flow

1. **Frontend Form Submission**: User fills out contact form with validation
2. **API Request**: Form data sent to `/api/contact` endpoint via TanStack Query
3. **Server Processing**: Express.js validates data using Zod schema
4. **Database Storage**: Contact submission stored using storage abstraction layer
5. **Response Handling**: Success/error response sent back to client
6. **UI Feedback**: Toast notification displayed to user

### Storage Abstraction
The application uses an `IStorage` interface that currently implements in-memory storage but can be easily swapped for a database implementation:
- `createContactSubmission()`: Stores new contact form submissions
- `getContactSubmissions()`: Retrieves all submissions (admin functionality)
- `createUser()` and `getUserByUsername()`: User management (prepared for future auth)

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Prepared for PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **zod**: Runtime type validation
- **framer-motion**: Animation library

### UI Framework
- **@radix-ui/***: Comprehensive collection of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **clsx**: Conditional className utility

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety and enhanced developer experience
- **wouter**: Lightweight React router

## Deployment Strategy

### Development
- Vite development server with HMR (Hot Module Replacement)
- Express middleware integration for seamless full-stack development
- TypeScript compilation and type checking
- Automatic database schema pushing with `drizzle-kit push`

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Single deployment artifact with both frontend and backend
- Environment variable configuration for database connections

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment mode (development/production)
- Drizzle configuration points to `./shared/schema.ts` for schema definitions

The application is designed to be easily deployable on platforms like Replit, Vercel, or any Node.js hosting service with minimal configuration changes.