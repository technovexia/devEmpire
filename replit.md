# DevEmpire - The Empire of Development

## Overview

DevEmpire is a cinematic 3D marketing website showcasing digital sovereignty solutions. It's built as a modern full-stack application with a React frontend featuring immersive 3D experiences and an Express backend with PostgreSQL database integration. The project emphasizes performance, accessibility, and cutting-edge web technologies to create an "imperial" user experience.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast compilation
- **Client-side routing** using Wouter for lightweight navigation
- **3D Graphics Stack**: Three.js with React-Three-Fiber for WebGL rendering
- **Animation Framework**: Framer Motion and GSAP for complex animations
- **Component Library**: Radix UI primitives with custom styling
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **Modular routing** system with centralized route registration
- **In-memory storage** implementation with interface-based design for easy database swapping
- **Development tooling** with Vite integration for SSR and hot module replacement

### Styling and Design System
- **Tailwind CSS** for utility-first styling with custom imperial theme
- **CSS Custom Properties** for dynamic theming
- **Glassmorphism effects** and custom animations
- **Responsive design** with mobile-first approach
- **Imperial color palette**: Midnight (#0e1116), Gold (#f5b400), Platinum (#e6e6e6), Cyan (#1dc2ff)

## Key Components

### 3D Rendering System
- **Hero Citadel**: Animated 3D city structures in the hero section
- **Product Platform**: Interactive 3D product showcases
- **Timeline Visualization**: 3D timeline for company history
- **Contact Map**: Interactive 3D location markers

### UI Component Library
- **Custom Cards**: ProductCard, ServiceCard, ToolCard, TestimonialCard with themed variants
- **Form System**: Multi-step contact wizard with validation
- **Metric Counters**: Animated number displays with intersection observer triggers
- **Navigation**: Responsive nav with scroll-triggered styling changes

### Page Structure
- **Home**: Hero + Services + Products + Metrics + Tools + Testimonials + CTA
- **Services**: Detailed service offerings with pricing
- **Products**: EmpireKit product showcase with tiers
- **Tools**: Open-source tool gallery
- **About**: Company timeline with 3D visualization
- **Contact**: Multi-step contact form with office locations
- **Blog**: Content marketing with featured posts

## Data Flow

### Client-Side Data Management
- **TanStack Query** handles server state caching and synchronization
- **React Hook Form** manages form state with Zod validation
- **Custom hooks** for animations (useCounterAnimation, useScrollTrigger)
- **Context providers** for tooltips and global UI state

### API Architecture
- **RESTful endpoints** prefixed with `/api`
- **Middleware stack** for logging, error handling, and JSON parsing
- **Storage interface** allows switching between memory and database implementations
- **Type-safe** data transfer with shared TypeScript schemas

### 3D Asset Management
- **Lazy loading** of 3D components for performance
- **Suspense boundaries** with loading fallbacks
- **Optimized geometries** and materials for 60fps rendering
- **Responsive quality** adjustment based on device capabilities

## External Dependencies

### Core Runtime Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver
- **drizzle-orm**: Type-safe database ORM with Zod integration
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight client-side routing
- **@hookform/resolvers**: Form validation integration

### 3D and Animation Libraries
- **three**: WebGL 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Helper components for R3F
- **framer-motion**: Production-ready animation library

### UI and Styling
- **@radix-ui/react-***: Accessible component primitives
- **class-variance-authority**: Component variant management
- **tailwindcss**: Utility-first CSS framework
- **clsx**: Conditional className utility

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type checking and compilation
- **drizzle-kit**: Database migration and introspection
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

## Deployment Strategy

### Build Process
- **Client build**: Vite compiles React app to `dist/public`
- **Server build**: esbuild bundles Express server to `dist/index.js`
- **Type checking**: TypeScript compiler validates all code
- **Database migrations**: Drizzle Kit handles schema changes

### Production Configuration
- **Environment variables**: DATABASE_URL for PostgreSQL connection
- **Static asset serving**: Express serves built client files
- **Error boundaries**: React error boundaries with fallback UI
- **Performance monitoring**: Built-in request timing and logging

### Development Workflow
- **Hot reload**: Vite HMR for instant client updates
- **Server restart**: tsx with watch mode for backend changes
- **Database sync**: `db:push` command for schema synchronization
- **Type safety**: Shared schemas between client and server

## Changelog

Changelog:
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.