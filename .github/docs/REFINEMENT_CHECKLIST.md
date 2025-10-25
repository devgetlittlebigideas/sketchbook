# Code Refinement Checklist

After exporting code from Figma, you'll need to refine it to match Sketchbook's standards. This guide walks you through what to check and how to improve the generated code.

## Quick Start

Use this checklist when refining your component:

- [ ] Component structure and naming
- [ ] TypeScript props interface
- [ ] Tailwind class organization
- [ ] Responsive design
- [ ] Accessibility (ARIA attributes)
- [ ] Variants and states
- [ ] Documentation and comments
- [ ] Storybook stories

Let's go through each in detail!

---

## 1. Component Structure

### Convert to Proper React Component

**Generated code might look like:**
```jsx
<div className="flex items-center px-4 py-2 bg-blue-600 rounded-lg">
  <span className="text-white">Button</span>
</div>
```

**Refine to:**
```typescript
import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  // ... other props
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button className="flex items-center px-4 py-2 bg-blue-600 rounded-lg">
      {children}
    </button>
  )
}
```

### Key Points:
- ✅ Export component with proper name
- ✅ Use proper HTML element (button, input, div, etc.)
- ✅ Add TypeScript interface for props
- ✅ Accept and spread `...props` for flexibility

---

## 2. TypeScript Props Interface

### Define Clear Props

Look at existing components for patterns:

**Example - Button.tsx:**
```typescript
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}
```

**Example - Input.tsx:**
```typescript
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}
```

### Extending HTML Attributes

Always extend the appropriate HTML element attributes:

- Buttons: `React.ButtonHTMLAttributes<HTMLButtonElement>`
- Inputs: `React.InputHTMLAttributes<HTMLInputElement>`
- Divs: `React.HTMLAttributes<HTMLDivElement>`
- Forms: `React.FormHTMLAttributes<HTMLFormElement>`

**Why?** This gives users access to all standard HTML props (onClick, disabled, id, className, etc.)

---

## 3. Tailwind Class Organization

### Use Our Pattern

Instead of inline classes, organize by variant:

**❌ Don't:**
```typescript
<button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
```

**✅ Do:**
```typescript
const baseStyles = 'flex items-center px-4 py-2 rounded-lg transition-colors'

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
}

<button className={`${baseStyles} ${variants[variant]} ${className}`}>
```

### Class Organization Structure

```typescript
// 1. Base styles (apply to all variants)
const baseStyles = 'font-medium rounded-lg focus:outline-none'

// 2. Variant-specific styles
const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
}

// 3. Size variations
const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

// 4. Combine in className
className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
```

### Allow className Override

Always accept `className` prop so users can customize:

```typescript
export interface ComponentProps {
  className?: string
  // ...
}

// In component:
className={`${baseStyles} ${variants[variant]} ${className}`}
```

---

## 4. Responsive Design

### Use Tailwind Responsive Classes

```typescript
// Mobile-first approach
className="flex flex-col md:flex-row gap-4"
//         ↑ mobile    ↑ tablet+    ↑ all sizes

// Common patterns:
"text-sm md:text-base lg:text-lg"  // Responsive text
"p-4 md:p-6 lg:p-8"                // Responsive padding
"w-full md:w-auto"                 // Responsive width
"hidden md:block"                  // Responsive visibility
```

### Breakpoints Reference

- `sm:` - 640px and up (mobile landscape)
- `md:` - 768px and up (tablet)
- `lg:` - 1024px and up (desktop)
- `xl:` - 1280px and up (large desktop)

---

## 5. Accessibility (A11y)

### Required Accessibility Features

All components should be accessible. Here's what to add:

#### Buttons
```typescript
<button
  type="button"                    // Explicit type
  aria-label="Close modal"         // When no visible text
  disabled={isDisabled}            // Proper disabled state
  className={...}
>
```

#### Form Inputs
```typescript
<label htmlFor={id} className="...">
  {label}
</label>
<input
  id={id}
  aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
  aria-invalid={!!error}
  {...props}
/>
{error && <p id={`${id}-error`} role="alert">{error}</p>}
```

#### Interactive Elements
```typescript
// Focus states
className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"

// Keyboard navigation
onKeyDown={(e) => {
  if (e.key === 'Escape') handleClose()
  if (e.key === 'Enter') handleSubmit()
}}
```

#### Icons and Visuals
```typescript
// Icon with label
<svg aria-label="Search icon" role="img">...</svg>

// Decorative icon (hide from screen readers)
<svg aria-hidden="true">...</svg>
```

### Accessibility Checklist

- [ ] Semantic HTML (button, input, label, etc.)
- [ ] ARIA labels for screen readers
- [ ] Keyboard navigation support
- [ ] Focus visible styles
- [ ] Color contrast (WCAG AA minimum)
- [ ] Error states announced to screen readers

**Learn more:** [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)

---

## 6. Variants and States

### Create Flexible Variants

Components should support different states:

```typescript
interface ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
}
```

### Common Variants

**Visual Variants:**
- Primary, Secondary, Outline
- Success, Warning, Error, Info
- Solid, Ghost, Link

**Size Variants:**
- Small (sm)
- Medium (md) - usually default
- Large (lg)
- Sometimes: Extra Small (xs), Extra Large (xl)

**State Variants:**
- Default
- Hover
- Active/Pressed
- Focus
- Disabled
- Loading

### Example Implementation

```typescript
const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300',
  outline: 'border-2 border-gray-300 hover:bg-gray-50 disabled:border-gray-200',
}

// In render:
<button
  disabled={disabled || loading}
  className={`${baseStyles} ${variants[variant]} ${className}`}
>
  {loading ? <Spinner /> : children}
</button>
```

---

## 7. Documentation

### Add JSDoc Comments

Help users understand your component:

```typescript
/**
 * A flexible button component with multiple variants and sizes.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">
 *   Click me
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({...}) => {
  // ...
}
```

### Document Complex Props

```typescript
export interface ModalProps {
  /**
   * Controls whether the modal is open
   */
  isOpen: boolean

  /**
   * Callback fired when the modal requests to be closed
   * (via ESC key or overlay click)
   */
  onClose: () => void

  /**
   * Size of the modal
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl'
}
```

---

## 8. Storybook Stories

### Create Comprehensive Examples

Show all variants and states:

```typescript
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Loading Button',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}
```

### Story Organization

- **Default/Primary** - Most common use case
- **Variants** - All visual variants
- **Sizes** - All size options
- **States** - Disabled, Loading, Error, etc.
- **Complex Examples** - Real-world usage
- **Playground** - Interactive story for testing

---

## Common Patterns

### Pattern 1: Simple Component (Badge)

```typescript
export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  children: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center rounded-full font-medium'

  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  }

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}
```

### Pattern 2: Form Component (Input)

```typescript
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  className?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={className}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full px-3 py-2 border rounded-lg ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        aria-invalid={!!error}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  )
}
```

### Pattern 3: Component with Sub-components (Modal)

```typescript
// Main component
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, size = 'md' }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg ${sizes[size]}`}>
        {children}
      </div>
    </div>
  )
}

// Sub-components
export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className = '' }) => {
  return <div className={`px-6 py-4 border-b ${className}`}>{children}</div>
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className = '' }) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

// Export all together
export { Modal, ModalHeader, ModalBody, ModalFooter }
```

---

## Getting AI Help

### Good Prompts for Refinement

**For adding TypeScript:**
```
Please add TypeScript types to this React component.
It should extend the appropriate HTML element attributes and follow this example:
[paste Button.tsx]
```

**For organizing Tailwind classes:**
```
Please refactor this component to use the variant pattern we use in our library.
Separate baseStyles, variants, and sizes. Here's our pattern:
[paste Button.tsx example]
```

**For accessibility:**
```
Please add proper accessibility features to this component:
- ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support

Reference: [paste Input.tsx or Modal.tsx]
```

---

## Final Checklist

Before submitting your PR, verify:

### Code Quality
- [ ] TypeScript types defined and exported
- [ ] Props interface extends appropriate HTML attributes
- [ ] Tailwind classes organized by variant pattern
- [ ] Custom className can be passed and applied
- [ ] Component exported from `src/index.ts`

### Functionality
- [ ] All variants work correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] States (hover, focus, active) work properly
- [ ] Disabled state works correctly

### Accessibility
- [ ] Semantic HTML elements used
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Focus styles visible
- [ ] Screen reader friendly

### Documentation
- [ ] Storybook stories created
- [ ] All variants shown in stories
- [ ] JSDoc comments added
- [ ] Examples are clear and helpful

### Testing
- [ ] Runs in Storybook without errors
- [ ] Builds without TypeScript errors (`npm run build`)
- [ ] Looks good visually in all variants
- [ ] Works in different browsers (if possible)

---

## Need Help?

- Look at existing components: `Button.tsx`, `Input.tsx`, `Modal.tsx`
- Ask AI tools (Claude, ChatGPT) with specific questions
- Create a draft PR and ask for early feedback
- Check [CONTRIBUTING.md](../../CONTRIBUTING.md) for workflow help

---

**You're ready to create amazing components!** 🎨✨
