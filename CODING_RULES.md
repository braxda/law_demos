# Barrington Legal Website Coding Rules

## Technical Stack

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **UI Components**: Shadcn UI, Radix UI
- **Styling**: Tailwind CSS
- **State Management**: React Hooks, nuqs for URL search params

## Code Style and Structure

### General Guidelines
- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`)

### File Structure
Files should be structured in the following order:
1. Exported component
2. Subcomponents
3. Helper functions
4. Static content
5. Types and interfaces

### Naming Conventions
- Use lowercase with dashes for directories (e.g., `components/auth-wizard`)
- Favor named exports for components

## TypeScript Usage
- Use TypeScript for all code
- Prefer interfaces over types
- Avoid enums; use maps instead
- Use functional components with TypeScript interfaces

## Syntax and Formatting
- Use the "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements
- Use declarative JSX

## UI and Styling
- Implement responsive design with Tailwind CSS
- Use Shadcn UI and Radix components for UI elements

## Performance Optimization
- Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC)
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Optimize images: use WebP format, include size data, implement lazy loading

## Key Conventions
- Use 'nuqs' for URL search parameter state management
- Optimize Web Vitals (LCP, CLS, FID)
- Limit 'use client':
  - Favor server components and Next.js SSR
  - Use only for Web API access in small components
  - Avoid for data fetching or state management

## Using Server Components
- Follow Next.js documentation for Data Fetching, Rendering, and Routing
- Don't use hooks (`useState`, `useEffect`, etc.) in server components
- Don't import client components directly into server components; use a client wrapper 