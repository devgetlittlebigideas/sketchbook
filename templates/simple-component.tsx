import React from 'react'

/**
 * SIMPLE COMPONENT TEMPLATE
 *
 * Use this pattern for basic components without complex variants.
 * Examples: Badge, Label, Tag, Avatar
 *
 * Key Features:
 * - Minimal props
 * - Simple styling
 * - Extends HTML attributes
 * - Accepts custom className
 */

// 1. Define Props Interface
// - Export it so users can import the type
// - Extend appropriate HTML element attributes
// - Include common props: children, className
export interface SimpleComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content to display inside the component
   */
  children?: React.ReactNode

  /**
   * Additional CSS classes to apply
   */
  className?: string

  /**
   * Optional variant for different styles
   * Add this if you have 2-3 simple variants
   */
  variant?: 'default' | 'primary' | 'secondary'
}

// 2. Create the Component
// - Use React.FC<Props> for type safety
// - Destructure props with defaults
// - Spread ...props for flexibility
export const SimpleComponent: React.FC<SimpleComponentProps> = ({
  children,
  className = '',
  variant = 'default',
  ...props // This spreads all other HTML attributes
}) => {
  // 3. Define Styles
  // - Base styles apply to all variants
  // - Keep classes organized and readable
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium'

  // 4. Optional: Define Variants
  // - Only if you have different visual styles
  // - Keep variant names semantic
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-green-100 text-green-800',
  }

  // 5. Render the Component
  // - Use semantic HTML element
  // - Combine all className strings
  // - Spread props for HTML attributes
  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props} // Allows onClick, id, data-*, etc.
    >
      {children}
    </div>
  )
}

// 6. Export the component
// This is already done above with 'export const'
// In src/index.ts, you'll add:
// export { SimpleComponent } from './components/SimpleComponent'
// export type { SimpleComponentProps } from './components/SimpleComponent'
