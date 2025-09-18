# Portfolio Project - Complete Development Guide

## 📋 Project Overview

**Portfolio Website** - A modern, responsive developer portfolio built with cutting-edge technologies and optimized for performance, accessibility, and user experience.

### 🎯 Project Goals

- Showcase professional work and skills
- Demonstrate technical expertise
- Provide seamless user experience
- Optimize for search engines and performance
- Support modern web standards and accessibility

## 🛠️ Tech Stack Details

### Core Framework

- **Next.js 14.0.3**: App Router, Server Components, API Routes
- **React 18**: Concurrent features, Suspense, Error Boundaries
- **TypeScript 5+**: Strict type checking, modern ES features

### Styling & UI

- **Tailwind CSS 3.3**: Utility-first styling, responsive design
- **Material-UI 5.15**: Component library, theming system
- **Radix UI**: Accessible primitives, headless components
- **Framer Motion 10.18**: Smooth animations, gesture handling

### Forms & Validation

- **React Hook Form 7.49**: Performant forms, minimal re-renders
- **Zod 3.22**: Type-safe validation, schema definition
- **@hookform/resolvers**: Integration between RHF and Zod

### Additional Libraries

- **next-themes**: Dark/light mode switching
- **react-intersection-observer**: Scroll-based animations
- **resend**: Email API integration
- **Storybook**: Component development and testing

## 🏗️ Architecture & File Structure

```
portfolio/
├── .cursorrules                    # Cursor AI optimization rules
├── .cursorignore                   # Files to exclude from indexing
├── .cursorindexignore             # Files to reference without indexing
├── .cursor/mcp.json               # MCP server configuration
├── PROJECT_DEVELOPMENT_PROMPT.md  # This development guide
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
├── next.config.js                 # Next.js configuration
├── components.json                # shadcn/ui configuration
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   ├── globals.css           # Global styles
│   │   └── [routes]/             # Dynamic routes
│   ├── components/               # Reusable components
│   │   ├── ui/                   # Base UI components
│   │   ├── forms/                # Form components
│   │   ├── layout/               # Layout components
│   │   └── sections/             # Page sections
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utilities and configurations
│   │   ├── utils.ts              # Utility functions
│   │   ├── validations.ts        # Zod schemas
│   │   └── constants.ts          # App constants
│   ├── types/                    # TypeScript definitions
│   └── assets/                   # Static assets
└── .storybook/                   # Storybook configuration
```

## 🎣 Custom Hooks & Patterns

### Performance Hooks

```typescript
// useIntersectionObserver.ts
import { useInView } from "react-intersection-observer";

export const useIntersectionObserver = (options = {}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  return { ref, inView };
};

// useLocalStorage.ts
import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
```

### Form Hooks

```typescript
// useContactForm.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validations";

export const useContactForm = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Handle form submission
      await submitContactForm(data);
      form.reset();
    } catch (error) {
      // Handle error
    }
  };

  return { form, onSubmit };
};
```

## 🧩 Component Patterns

### Form Components

```typescript
// ContactForm.tsx
import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  const { form, onSubmit } = useContactForm();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...form.register("name")}
        placeholder="Your Name"
        error={form.formState.errors.name?.message}
      />
      <Input
        {...form.register("email")}
        type="email"
        placeholder="Your Email"
        error={form.formState.errors.email?.message}
      />
      <Textarea
        {...form.register("message")}
        placeholder="Your Message"
        error={form.formState.errors.message?.message}
      />
      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};
```

### Animated Components

```typescript
// AnimatedSection.tsx
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedSection = ({
  children,
  className,
}: AnimatedSectionProps) => {
  const { ref, inView } = useIntersectionObserver();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

### Table Components

```typescript
// ProjectTable.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface ProjectTableProps {
  projects: Project[];
}

export const ProjectTable = ({ projects }: ProjectTableProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Project</th>
            <th className="text-left p-4">Technologies</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <motion.tr
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td className="p-4">{project.name}</td>
              <td className="p-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded ${
                    project.status === "completed"
                      ? "bg-green-100 dark:bg-green-900"
                      : "bg-yellow-100 dark:bg-yellow-900"
                  }`}
                >
                  {project.status}
                </span>
              </td>
              <td className="p-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </Button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
```

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices

```css
/* Use semantic class names */
.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded;
}
.btn-secondary {
  @apply bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded;
}

/* Responsive design */
.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
.grid-responsive {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

/* Dark mode support */
.theme-aware {
  @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-white;
}
```

### Material-UI Integration

```typescript
// theme.ts
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2563eb" },
    secondary: { main: "#64748b" },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3b82f6" },
    secondary: { main: "#94a3b8" },
  },
});
```

### Animation Guidelines

```typescript
// animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

## 🔄 State Management

### Local State

- Use `useState` for component-level state
- Use `useReducer` for complex state logic
- Use `useContext` for shared state across components

### Form State

- Use React Hook Form for form state management
- Implement Zod validation for type safety
- Handle loading and error states properly

### Theme State

```typescript
// ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <MuiThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextThemesProvider>
  );
};
```

## 🤖 AI Development Prompts

### New Feature Development

```
"Create a [FEATURE_NAME] component with the following requirements:

1. **TypeScript Interface**: Define proper types and interfaces
2. **Responsive Design**: Mobile-first approach with Tailwind CSS
3. **Dark Mode Support**: Implement theme-aware styling
4. **Accessibility**: ARIA labels, keyboard navigation, screen reader support
5. **Performance**: Optimize with useMemo/useCallback where needed
6. **Error Handling**: Proper error boundaries and loading states
7. **Animation**: Smooth transitions with Framer Motion
8. **Testing**: Storybook stories for component testing

Tech Stack: Next.js 14, TypeScript, Tailwind CSS, Material-UI, Radix UI, Framer Motion
Follow the established patterns in the codebase and maintain consistency."
```

### Refactoring Prompts

```
"Refactor [COMPONENT_NAME] to improve:

1. **Performance**: Optimize re-renders and expensive operations
2. **Accessibility**: Enhance keyboard navigation and screen reader support
3. **TypeScript**: Add strict typing and remove any types
4. **Mobile Optimization**: Improve responsive design and touch interactions
5. **Modern Patterns**: Implement latest React patterns and best practices
6. **Code Quality**: Reduce complexity and improve maintainability

Maintain existing functionality while implementing improvements.
Use the established component patterns and styling guidelines."
```

### Bug Fix Prompts

```
"Fix the following issues in [COMPONENT_NAME]:

1. **Issue Description**: [Describe the bug]
2. **Expected Behavior**: [What should happen]
3. **Current Behavior**: [What's happening now]
4. **Steps to Reproduce**: [How to trigger the bug]

Requirements:
- Maintain existing functionality
- Follow TypeScript best practices
- Ensure accessibility compliance
- Test on multiple devices and browsers
- Update Storybook stories if needed"
```

## 📊 Latest Trends Research Requirements

### Development Patterns (2025+)

- **React Server Components**: Leverage RSC for better performance
- **Advanced Hooks**: Custom hooks for complex logic
- **Modern State Management**: Zustand, Jotai for lightweight state
- **TypeScript Integration**: Strict typing and type safety
- **Performance Optimization**: Code splitting, lazy loading, memoization
- **AI-Powered Development**: Cursor AI integration and optimization

### UI/UX Trends (2025+)

- **Minimalist Design**: Clean, focused interfaces
- **Dark Mode**: Comprehensive theme switching
- **Micro-interactions**: Subtle animations and feedback
- **Voice Interfaces**: VUI integration considerations
- **AR/VR Ready**: Future-proofing for immersive experiences
- **Advanced Accessibility**: WCAG 2.2 compliance
- **Responsive Design**: Mobile-first, touch-optimized
- **Design Systems**: Atomic design principles

## 🔄 Critical AI Workflow

### Mandatory 6-Step Confirmation Process

#### 1. UNDERSTAND & LIST

Break down the user's request into clear, actionable items:

- What needs to be built/modified?
- What are the specific requirements?
- What constraints or preferences exist?

#### 2. RESEARCH LATEST TRENDS

Investigate current best practices and emerging patterns:

- Check latest React/Next.js documentation
- Research UI/UX trends for 2025+
- Identify performance optimization opportunities
- Review accessibility best practices

#### 3. PLAN & EXPLAIN

Detail the implementation approach:

- Step-by-step implementation plan
- Technology choices and rationale
- Architecture decisions
- Performance considerations

#### 4. HIGHLIGHT RISKS

Identify potential issues and challenges:

- Compatibility concerns
- Performance implications
- Accessibility considerations
- Maintenance complexity

#### 5. WAIT FOR CONFIRMATION

Never proceed without explicit approval:

- Present the plan clearly
- Ask for specific confirmation
- Wait for "yes" or "proceed" response
- Address any concerns before implementation

#### 6. ASK CLARIFICATIONS

Resolve any ambiguities:

- Ask specific questions about requirements
- Clarify preferences and constraints
- Confirm technical decisions
- Ensure understanding is complete

## 🎯 Quality Checklist

### Code Quality

- [ ] All files under 150 lines
- [ ] Proper separation of concerns
- [ ] No code duplication
- [ ] TypeScript strict mode compliance
- [ ] No console.log statements
- [ ] Proper error handling

### Performance

- [ ] Optimized with useMemo/useCallback
- [ ] Lazy loading implemented
- [ ] Image optimization
- [ ] Code splitting
- [ ] Bundle size optimization

### Accessibility

- [ ] ARIA labels implemented
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Color contrast compliance
- [ ] Focus management

### Responsive Design

- [ ] Mobile-first approach
- [ ] Touch-friendly interactions
- [ ] Cross-browser compatibility
- [ ] Performance on all devices

### Testing

- [ ] Storybook stories created
- [ ] Component testing
- [ ] Accessibility testing
- [ ] Performance testing

## 🚀 Deployment & Optimization

### Build Optimization

- Next.js production build
- Image optimization
- CSS purging
- Bundle analysis
- Performance monitoring

### SEO & Performance

- Meta tags optimization
- Open Graph tags
- Schema markup
- Core Web Vitals optimization
- Lighthouse score improvement

---

_This guide is optimized for Cursor AI 2025+ features and follows the latest development trends and best practices. Last updated: 2025_
