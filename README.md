# E-commerce Frontend

A modern e-commerce frontend built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Product listing with data from FakeStore API
- Shopping cart functionality with add/remove/update capabilities
- Cart persistence using localStorage
- Clean, modern UI with Tailwind CSS

## Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Setup Instructions

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/mellow-ecommerce.git
   cd mellow-ecommerce
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
  - `layout/` - Layout components like Header and Footer
  - `product/` - Product-related components
  - `cart/` - Cart-related components
  - `ui/` - shadcn/ui components
- `context/` - React Context for state management
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and TypeScript types

## Implementation Approach

This project follows a component-based architecture with a focus on reusability and maintainability. The state management is handled through React Context API, which provides a simple and effective way to manage the shopping cart state across the application.

Server Components are used where possible to reduce client-side JavaScript and improve performance. Client Components are used where interactivity is needed, such as the cart functionality.

The design is fully responsive, with a mobile-first approach using Tailwind CSS for styling.

## Assumptions

- The FakeStore API is used as a data source for products
- Cart data is persisted in localStorage for simplicity
- No authentication or checkout process is implemented
- The design is inspired by the provided Mellow theme
